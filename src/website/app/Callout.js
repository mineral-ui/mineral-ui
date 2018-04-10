/* @flow */
import React from 'react';
import darken from 'polished/lib/color/darken';
import desaturate from 'polished/lib/color/desaturate';
import rgba from 'polished/lib/color/rgba';
import { createStyledComponent } from '../../library/styles';

type Props = {
  children: React$Node,
  className?: string,
  title?: string,
  variant?: 'danger' | 'regular'
};

const Root = createStyledComponent('div', ({ theme, variant }) => {
  const linkColors = {
    active: darken(0.1, theme.SiteLink_color_active),
    focus: darken(0.1, theme.SiteLink_color_focus),
    hover: darken(0.1, theme.SiteLink_color_hover),
    idle: darken(0.1, theme.SiteLink_color),
    visited: desaturate(0.2, theme.SiteLink_color)
  };

  const getIcon = (color) => {
    // `#` not valid in data URIs: https://www.chromestatus.com/features/5656049583390720
    const escapedColor = color.replace('#', '%23');

    // This is an encoded IconLaunch
    return `url('data:image/svg+xml;utf8, <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24"><path fill="${escapedColor}" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>')`;
  };

  return {
    backgroundColor:
      variant === 'danger'
        ? theme.well_backgroundColor_danger
        : rgba(theme.color_theme, 0.1),
    borderLeft: `3px solid ${
      variant === 'danger' ? theme.color_danger : theme.color_theme
    }`,
    padding: theme.baseline_2,

    '& p': {
      margin: '0.75em 0',

      '&:last-of-type': {
        marginBottom: 0
      }
    },

    // These styles adapted from Link & SiteLink. Necessary because you cannot
    // use markdown within this component if it itself is used within Markdown.
    '& a': {
      '&:link': {
        color: linkColors.idle,
        fontWeight: theme.fontWeight_semiBold,
        textDecoration: 'underline',
        textDecorationColor: rgba(theme.color_theme, 0.5)
      },
      '&:visited': {
        color: linkColors.visited
      },
      '&:hover': {
        color: linkColors.hover,
        textDecoration: 'underline'
      },
      '&:focus': {
        color: linkColors.focus,
        outline: `1px solid ${darken(0.1, theme.SiteLink_borderColor_focus)}`,
        outlineOffset: '2px'
      },
      // `:active` must be last, to follow LVHFA order:
      // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
      '&:active': {
        color: linkColors.active,
        textDecoration: 'none'
      },

      '&[href^="http"]': {
        '&:link::after': {
          borderBottom: `1px solid ${rgba(theme.color_theme, 0.5)}`,
          backgroundImage: getIcon(linkColors.idle),
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
          boxSizing: 'content-box',
          content: '""',
          display: 'inline-block',
          height: '1em',
          paddingLeft: theme.space_inline_xs,
          position: 'relative',
          top: 2,
          width: '1em'
        },

        '&:visited::after': {
          backgroundImage: getIcon(linkColors.visited)
        },

        '&:hover::after': {
          borderBottomColor: 'currentColor',
          backgroundImage: getIcon(linkColors.hover)
        },

        '&:focus::after': {
          borderBottomColor: 'transparent',
          backgroundImage: getIcon(linkColors.focus)
        },

        '&:active::after': {
          backgroundImage: getIcon(linkColors.active)
        }
      }
    }
  };
});
const Title = createStyledComponent('h4', ({ variant, theme }) => ({
  color:
    variant === 'danger'
      ? darken(0.1, theme.color_danger)
      : darken(0.1, theme.color_theme),
  fontSize: '1em',
  fontWeight: theme.fontWeight_semiBold,
  margin: 0
}));

export default function Callout({
  children,
  className,
  title = '💡 Info',
  variant = 'regular'
}: Props) {
  return (
    <Root className={className} variant={variant}>
      {title !== '' && <Title variant={variant}>{title}</Title>}
      {children}
    </Root>
  );
}
