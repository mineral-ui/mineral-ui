/* @flow */
import { rtlTextAlign } from '../utils';
import { createStyledComponent } from '../styles';
import { textTheme } from './themes';
import { APPEARANCE, HEADING_ELEMENTS, MONOSPACE_ELEMENTS } from './constants';

import type { CreateRootNode, Styles, StyleObj } from '../styles/types';
import type { TextDefaultProps, TextProps, TextTheme } from './types';

type GetCommonStyles = (
  element: string,
  theme: TextTheme,
  truncate: boolean | number | string
) => StyleObj;

type GetTextStyles = (
  inherit: ?boolean,
  defaultProps: TextDefaultProps
) => Styles;

const getCommonStyles: GetCommonStyles = (element, theme, truncate) => {
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

  if (MONOSPACE_ELEMENTS.indexOf(element) !== -1) {
    (styles: Object).fontFamily = theme.fontFamily_monospace;
  }

  return styles;
};

const getTextStyles: GetTextStyles = (inherit, defaultProps) => {
  return inherit
    ? ({ element, theme: baseTheme, truncate }) => {
        const theme = textTheme(baseTheme);

        return getCommonStyles(element, theme, truncate);
      }
    : ({
        align,
        appearance: propAppearance,
        color,
        element,
        fontWeight,
        noMargins,
        theme: baseTheme,
        truncate
      }) => {
        let theme = textTheme(baseTheme);
        const isHeadingElement = HEADING_ELEMENTS.indexOf(element) !== -1;
        const appearance =
          propAppearance !== defaultProps.appearance
            ? propAppearance
            : isHeadingElement
              ? element
              : undefined;
        const headingAppearance =
          HEADING_ELEMENTS.indexOf(appearance) !== -1 && appearance;

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
        } else if (appearance === APPEARANCE.mouse) {
          theme = {
            ...theme,
            Text_color: theme.Text_color_mouse,
            Text_fontSize: theme.Text_fontSize_mouse
          };
        } else if (appearance === APPEARANCE.prose) {
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
          textAlign: rtlTextAlign(align, theme.direction),
          ...getCommonStyles(element, theme, truncate),
          // 1 - Not normalized because we actually want `##em` as applied value
          // 2 - Must come after commonStyles
          marginBottom: noMargins ? 0 : theme.Text_marginBottom
        };

        return styles;
      };
};

export const createTextRootNode: CreateRootNode<TextProps, TextDefaultProps> = (
  props,
  defaultProps
) => {
  let { parentElement, element = defaultProps.element, inherit } = props;
  element =
    parentElement === 'p' && element === defaultProps.element
      ? 'span'
      : element;

  return createStyledComponent(element, getTextStyles(inherit, defaultProps), {
    rootEl: element,
    includeStyleReset: !inherit
  });
};
