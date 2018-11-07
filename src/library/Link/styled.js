/* @flow */
import { createStyledComponent } from '../styles';
import { linkTheme } from './themes';

import type { CreateRootNode } from '../styles/types';
import type { LinkDefaultProps, LinkProps } from './types';

export const createLinkRootNode: CreateRootNode<LinkProps, LinkDefaultProps> = (
  props,
  defaultProps
) => {
  const { element = defaultProps.element } = props;

  return createStyledComponent(
    element,
    ({ variant, theme: baseTheme }) => {
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
    },
    {
      displayName: 'Link',
      filterProps: ['element', 'variant'],
      rootEl: element
    }
  );
};
