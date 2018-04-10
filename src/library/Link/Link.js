/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';

type Props = {
  /** Content of the Link */
  children?: React$Node,
  /** A URL or URL fragment to which the Link points */
  href?: string,
  /** Element to be used as the root node - e.g. `a` or `ReactRouterLink` */
  element?: $FlowFixMe, // Should allow string | React class
  /** Available variants */
  variant?: 'regular' | 'danger' | 'success' | 'warning'
};

export const componentTheme = (baseTheme: Object) => ({
  Link_borderColor_focus: baseTheme.borderColor_theme_focus,
  Link_color: baseTheme.color_theme,
  Link_color_active: baseTheme.color_theme_active,
  Link_color_hover: baseTheme.color_theme_hover,
  Link_color_focus: baseTheme.color_theme_focus,

  ...baseTheme
});

const linkStyles = ({ variant, theme: baseTheme }) => {
  let theme = componentTheme(baseTheme);

  if (variant !== 'regular') {
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
};

/**
 * The Link component creates a hyperlink to external pages, files, anchors on the same page, or another URL.
 */
export default function Link({
  children,
  element = 'a',
  variant = 'regular',
  ...restProps
}: Props) {
  const rootProps = {
    variant,
    ...restProps
  };
  const Root = createStyledComponent(element, linkStyles, {
    displayName: 'Link',
    filterProps: ['variant']
  });

  return <Root {...rootProps}>{children}</Root>;
}
