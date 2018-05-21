/* @flow */
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import rgba from 'polished/lib/color/rgba';
import { createStyledComponent } from '../../library/styles';
import { createThemedComponent } from '../../library/themes';
import IconLaunch from 'mineral-ui-icons/IconLaunch';
import Link from '../../library/Link';

type Props = {
  children?: React$Node,
  element?: $FlowFixMe,
  href?: string,
  to?: string
};

// prettier-ignore
const componentTheme = baseTheme => ({
  Link_borderColor_focus: baseTheme.SiteLink_borderColor_focus || baseTheme.borderColor_theme_focus,
  Link_color: baseTheme.SiteLink_color || baseTheme.color_theme,
  Link_color_active: baseTheme.SiteLink_color_active || baseTheme.color_theme_active,
  Link_color_hover: baseTheme.SiteLink_color_hover || baseTheme.color_theme_hover,
  Link_color_focus: baseTheme.SiteLink_color_focus || baseTheme.color_theme_focus,

  ...baseTheme
});

const ThemedLink = createThemedComponent(Link, ({ theme }) => ({
  ...componentTheme(theme)
}));

const Root = createStyledComponent(ThemedLink, ({ href, theme }) => {
  let styles = {
    fontWeight: theme.fontWeight_semiBold,
    textDecoration: 'underline',
    textDecorationColor: rgba(theme.color_theme, 0.5),

    '&:focus': {
      textDecoration: 'none'
    }
  };

  if (href) {
    styles = {
      ...styles,

      '& > [role="img"]': {
        borderBottom: `1px solid ${rgba(theme.color_theme, 0.5)}`,
        boxSizing: 'content-box',
        fill: 'currentColor',
        paddingLeft: theme.space_inline_xs,
        position: 'relative',
        top: 2
      },

      '&:hover > [role="img"]': {
        borderBottomColor: 'currentColor'
      },

      '&:focus > [role="img"]': {
        borderBottomColor: 'transparent'
      },

      // Hiding the external link icon when the link looks like a button
      '& > span ~ [role="img"]': {
        display: 'none'
      }
    };
  }

  return styles;
});

export default function SiteLink(props: Props) {
  const { children, element, href, to, ...restProps } = props;
  const isExternal = href && !href.startsWith('#');

  const rootProps = {
    element: to ? element || ReactRouterLink : element,
    href,
    target: isExternal ? '_blank' : undefined,
    to,
    ...restProps
  };
  const iconProps = {
    size: 'medium'
  };

  delete rootProps.context; // Ignore context prop injected from Marksy.compile()

  return (
    <Root {...rootProps}>
      {children}
      {isExternal && <IconLaunch {...iconProps} />}
    </Root>
  );
}
