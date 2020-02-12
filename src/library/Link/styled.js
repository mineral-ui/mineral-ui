/* @flow */
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { linkTheme } from './themes';

import type { StyledComponent } from '@emotion/styled-base/src/utils';

export const Link: StyledComponent<{ [key: string]: any }> = styled('a', {
  shouldForwardProp: (prop) => isPropValid(prop)
})(({ variant, theme: baseTheme }) => {
  let theme = linkTheme(baseTheme);

  if (variant) {
    // prettier-ignore
    theme = {
        ...theme,
        Link_borderColor_focus: baseTheme[`borderColor_${variant}_focus`],
        Link_color: baseTheme[`color_${variant}`],
        Link_color_hover: baseTheme[`color_${variant}_hover`],
        Link_color_focus: baseTheme[`color_${variant}_focus`],
        Link_color_active: baseTheme[`color_${variant}_active`],
      };
  }

  return {
    color: theme.Link_color,
    textDecoration: 'none',

    '&:hover': {
      color: theme.Link_color_hover,
      textDecoration: 'underline'
    },
    '&:focus': {
      color: theme.Link_color_focus,
      outline: `1px solid ${theme.Link_borderColor_focus}`,
      outlineOffset: '2px'
    },
    // `:active` must be last, to follow LVHFA order:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
    '&:active': {
      color: theme.Link_color_active
    }
  };
});
