/* @flow */
import React, { Component } from 'react';
import { string } from 'prop-types';
import { createStyledComponent } from '../styles';
import TextProvider from './TextProvider';

type Props = {
  /** Available horizontal alignments */
  align?: 'start' | 'end' | 'center' | 'justify',
  /** Available styles */
  appearance?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'mouse'
    | 'p'
    | 'prose',
  /** Rendered content */
  children: React$Node,
  /** Color of text */
  color?: string,
  /** The rendered HTML element, e.g. `'span'`, `'strong'` */
  element?: string,
  /** Available font weights */
  fontWeight?: 'regular' | 'semiBold' | 'bold' | 'extraBold' | number,
  /** Inherit all styles from parent */
  inherit?: boolean,
  /** Remove top & bottom margins */
  noMargins?: boolean,
  /** @Private See use of context */
  parentElement?: string,
  /** Force display to one line and truncate with ellipsis at given max-width */
  truncate?: boolean | number | string
};

export const componentTheme = (baseTheme: Object) => ({
  Text_color: baseTheme.color,
  Text_color_h1: baseTheme.h1_color,
  Text_color_h2: baseTheme.h2_color,
  Text_color_h3: baseTheme.h3_color,
  Text_color_h4: baseTheme.h4_color,
  Text_color_h5: baseTheme.h5_color,
  Text_color_h6: baseTheme.h6_color,
  Text_color_mouse: baseTheme.color_mouse,
  Text_fontSize: baseTheme.fontSize_ui,
  Text_fontSize_h1: baseTheme.h1_fontSize,
  Text_fontSize_h2: baseTheme.h2_fontSize,
  Text_fontSize_h3: baseTheme.h3_fontSize,
  Text_fontSize_h4: baseTheme.h4_fontSize,
  Text_fontSize_h5: baseTheme.h5_fontSize,
  Text_fontSize_h6: baseTheme.h6_fontSize,
  Text_fontSize_mouse: baseTheme.fontSize_mouse,
  Text_fontSize_prose: baseTheme.fontSize_prose,
  Text_fontWeight_h1: baseTheme.h1_fontWeight,
  Text_fontWeight_h2: baseTheme.h2_fontWeight,
  Text_fontWeight_h3: baseTheme.h3_fontWeight,
  Text_fontWeight_h4: baseTheme.h4_fontWeight,
  Text_fontWeight_h5: baseTheme.h5_fontWeight,
  Text_fontWeight_h6: baseTheme.h6_fontWeight,
  Text_lineHeight: baseTheme.lineHeight_prose,
  Text_lineHeight_heading: baseTheme.lineHeight_heading,
  Text_lineHeight_headingSmall: baseTheme.lineHeight_headingSmall,
  Text_marginBottom: baseTheme.space_stack_md,
  Text_marginBottom_heading: baseTheme.space_stack_sm,

  ...baseTheme
});

const headingElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
const monospaceElements = ['code', 'kbd', 'pre', 'samp'];

const commonStyles = (element, theme, truncate) => {
  let styles = {
    marginBottom: 0,
    marginTop: 0
  };

  if (truncate) {
    styles = {
      ...styles,
      // These styles from polished's ellipsis, which we cannot use here
      // because the dynamic width means the output can't be extracted at
      // build time.
      maxWidth: truncate === true ? '100%' : truncate,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      wordWrap: 'normal'
    };
  }

  if (monospaceElements.indexOf(element) !== -1) {
    (styles: Object).fontFamily = theme.fontFamily_monospace;
  }

  return styles;
};

const styles = {
  inherit: ({ element, theme: baseTheme, truncate }) => {
    const theme = componentTheme(baseTheme);

    return commonStyles(element, theme, truncate);
  },
  noInherit: ({
    align,
    appearance: propAppearance,
    color,
    element,
    fontWeight,
    noMargins,
    theme: baseTheme,
    truncate
  }) => {
    let theme = componentTheme(baseTheme);
    const isHeadingElement = headingElements.indexOf(element) !== -1;
    const appearance =
      propAppearance !== Text.defaultProps.appearance
        ? propAppearance
        : isHeadingElement ? element : undefined;
    const headingAppearance =
      headingElements.indexOf(appearance) !== -1 && appearance;
    const rtl = theme.direction === 'rtl';

    if (headingAppearance) {
      theme = {
        ...theme,
        Text_color: theme[`Text_color_${headingAppearance}`],
        Text_fontSize: theme[`Text_fontSize_${headingAppearance}`],
        Text_fontWeight: theme[`Text_fontWeight_${headingAppearance}`],
        Text_lineHeight:
          ['h5', 'h6'].indexOf(headingAppearance) !== -1
            ? theme.Text_lineHeight_headingSmall
            : theme.Text_lineHeight_heading,
        Text_marginBottom: theme.Text_marginBottom_heading
      };
    } else if (appearance === 'mouse') {
      theme = {
        ...theme,
        Text_color: theme.Text_color_mouse,
        Text_fontSize: theme.Text_fontSize_mouse
      };
    } else if (appearance === 'prose') {
      theme = {
        ...theme,
        Text_fontSize: theme.Text_fontSize_prose
      };
    }

    let styles = {
      color: color || theme.Text_color,
      fontSize: `${parseFloat(theme.Text_fontSize) *
        parseInt(theme.fontSize_base)}px`,
      fontWeight: (() => {
        if (fontWeight && theme[`fontWeight_${fontWeight}`]) {
          return theme[`fontWeight_${fontWeight}`];
        } else if (headingAppearance && theme.Text_fontWeight) {
          return theme.Text_fontWeight;
        } else if (isHeadingElement) {
          return fontWeight || theme.fontWeight_regular;
        } else {
          return fontWeight;
        }
      })(),
      lineHeight: theme.Text_lineHeight,
      textAlign: (() => {
        if ((rtl && align == 'start') || (!rtl && align == 'end')) {
          return 'right';
        } else if ((rtl && align == 'end') || align == 'start') {
          return 'left';
        } else {
          return align;
        }
      })(),
      ...commonStyles(element, theme, truncate),
      // 1 - Not normalized because we actually want `##em` as applied value
      // 2 - Must come after commonStyles
      marginBottom: noMargins ? 0 : theme.Text_marginBottom
    };

    return styles;
  }
};

// Text's root node must be created outside of render, so that the entire DOM
// element is replaced only when the element prop is changed, otherwise it is
// updated in place
export function createRootNode(props: Props) {
  let { parentElement, element = Text.defaultProps.element, inherit } = props;
  element =
    parentElement === 'p' && element === Text.defaultProps.element
      ? 'span'
      : element;
  return createStyledComponent(
    element,
    inherit ? styles.inherit : styles.noInherit,
    {
      rootEl: element,
      includeStyleReset: !inherit
    }
  );
}

/**
 * The Text component provides styles and semantic meaning for text and headings
 * in a manner consistent with other components.
 */
export default class Text extends Component<Props> {
  static defaultProps = {
    appearance: 'p',
    element: 'p'
  };

  static contextTypes = {
    parentElement: string
  };

  render() {
    const { inherit, ...restProps } = this.props;
    const parentElement = this.context.parentElement;
    const rootProps = {
      inherit: inherit === false || !parentElement ? inherit : true,
      parentElement,
      ...restProps
    };

    return <TextProvider {...rootProps} />;
  }
}
