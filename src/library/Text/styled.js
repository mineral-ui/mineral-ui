/* @flow */
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { rtlTextAlign } from '../utils';
import { componentStyleReset } from '../styles';
import { textTheme } from './themes';
import { APPEARANCE, HEADING_ELEMENTS, MONOSPACE_ELEMENTS } from './constants';

import type { StyleObj } from '../styles/types';
import type { TextTheme } from './types';

type GetCommonStyles = (
  as: string,
  theme: TextTheme,
  truncate: boolean | number | string
) => StyleObj;

const getCommonStyles: GetCommonStyles = (as, theme, truncate) => {
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

  if (MONOSPACE_ELEMENTS.indexOf(as) !== -1) {
    (styles: Object).fontFamily = theme.fontFamily_monospace;
  }

  return styles;
};

export const TextRoot = styled('p', {
  shouldForwardProp: (prop) =>
    ['color', 'fontWeight'].indexOf(prop) === -1 && isPropValid(prop)
})(
  ({
    /* TargetX Custom Styles */
    bold,
    fontFamily,
    fontSize,
    lineHeight,
    margin,
    marginBottom,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginTop,
    marginVertical,

    /* Built-In Styles */
    align,
    appearance: propAppearance,
    as,
    color,
    defaultAppearance,
    fontWeight,
    inherit,
    noMargins = true,
    theme: baseTheme,
    truncate
  }) => {
    let theme = textTheme(baseTheme);

    if (inherit) {
      return getCommonStyles(as, theme, truncate);
    }

    const isHeadingElement = HEADING_ELEMENTS.indexOf(as) !== -1;
    const appearance =
      propAppearance !== defaultAppearance
        ? propAppearance
        : isHeadingElement
        ? as
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

    return {
      ...componentStyleReset(baseTheme),

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
      ...getCommonStyles(as, theme, truncate),
      // 1 - Not normalized because we actually want `##em` as applied value
      // 2 - Must come after commonStyles
      marginBottom: noMargins ? 0 : theme.Text_marginBottom,

      /* TargetX Custom Styles */
      ...(bold && { fontWeight: 'bold' }),
      ...(fontFamily && { fontFamily }),
      ...(fontSize && { fontSize }),
      ...(lineHeight && { lineHeight }),
      ...(margin && { margin }),
      ...(marginBottom && { marginBottom }),
      ...(marginHorizontal && {
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal
      }),
      ...(marginLeft && { marginLeft }),
      ...(marginRight && { marginRight }),
      ...(marginTop && { marginTop }),
      ...(marginVertical && {
        marginBottom: marginVertical,
        marginTop: marginVertical
      })
    };
  }
);
