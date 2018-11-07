/* @flow */
import { createStyledComponent } from '../styles';
import { SHAPE } from './constants';
import { avatarTheme } from './themes';

export const AvatarRoot = createStyledComponent(
  'span',
  ({
    background,
    color: propColor,
    icon,
    noBackground,
    shape,
    size: propSize,
    theme: baseTheme
  }) => {
    const theme = avatarTheme(baseTheme);

    const color = propColor || theme.color_themePrimary;
    const size = theme[`Avatar_size_${propSize}`];

    return {
      alignItems: 'center',
      backgroundColor: noBackground ? null : background || theme.color_theme_60,
      color,
      borderRadius:
        shape === SHAPE.square
          ? null
          : shape === SHAPE.rounded
            ? theme.borderRadius_1
            : '100%',
      display: 'inline-flex',
      fontWeight: theme.Avatar_fontWeight,
      height: size,
      lineHeight: size,
      justifyContent: 'center',
      verticalAlign: 'middle',
      width: size,

      '& > abbr,& > span': {
        fontSize: icon ? null : theme[`Avatar_fontSize_${propSize}`]
      },

      '& > abbr': {
        textDecoration: 'none'
      },

      '& > img': {
        borderRadius: '100%',
        display: 'block',
        flex: '0 0 auto',
        maxWidth: '100%'
      },

      '& > [role="img"]': {
        color
      }
    };
  },
  {
    displayName: 'Avatar',
    filterProps: ['icon'],
    includeStyleReset: true
  }
);
