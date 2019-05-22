/* @flow */
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { componentStyleReset } from '../styles';
import { SHAPE } from './constants';
import { avatarTheme } from './themes';

export const AvatarRoot = styled('span', {
  shouldForwardProp: (prop) =>
    ['color', 'shape', 'size'].indexOf(prop) === -1 && isPropValid(prop)
})(
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
    const size =
      typeof propSize === 'number'
        ? propSize
        : theme[`Avatar_size_${propSize}`];

    return {
      ...componentStyleReset(baseTheme),

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
        fontSize: icon
          ? null
          : typeof propSize === 'number'
          ? propSize / 2
          : theme[`Avatar_fontSize_${propSize}`]
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
  }
);
