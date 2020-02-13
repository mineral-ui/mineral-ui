/* @flow */
import styled from '@emotion/styled';
import IconLaunch from 'mineral-ui-icons/IconLaunch';
import rgba from 'polished/lib/color/rgba';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import Link from '../../library/Link';
import { themed } from '../../library/themes';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

type SiteLinkProps = {
  as?: $FlowFixMe,
  children?: React$Node,
  href?: string,
  to?: string
};

// prettier-ignore
const siteLinkTheme = baseTheme => ({
  Link_borderColor_focus: baseTheme.SiteLink_borderColor_focus || baseTheme.borderColor_theme_focus,
  Link_color: baseTheme.SiteLink_color || baseTheme.color_theme,
  Link_color_active: baseTheme.SiteLink_color_active || baseTheme.color_theme_active,
  Link_color_hover: baseTheme.SiteLink_color_hover || baseTheme.color_theme_hover,
  Link_color_focus: baseTheme.SiteLink_color_focus || baseTheme.color_theme_focus,

  ...baseTheme
});

const ThemedLink = themed(Link)(({ theme }) => ({
  ...siteLinkTheme(theme)
}));

const Root: StyledComponent<{ [key: string]: any }> = styled(ThemedLink)(
  ({ href, theme }) => {
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
  }
);

export default function SiteLink(props: SiteLinkProps) {
  const { children, as, href, to, ...restProps } = props;
  const isExternal = href && !href.startsWith('#');

  const rootProps = {
    as: to ? as || ReactRouterLink : as,
    href,
    target: isExternal ? '_blank' : undefined,
    to,
    ...restProps
  };
  const iconProps = {
    size: 'medium'
  };

  // $FlowFixMe - Ignore context prop injected from Marksy.compile()
  delete rootProps.context;

  return (
    <Root {...rootProps}>
      {children}
      {isExternal && <IconLaunch {...iconProps} />}
    </Root>
  );
}
