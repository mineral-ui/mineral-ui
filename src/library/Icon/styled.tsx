/* @flow */
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { iconTheme } from './themes';

export const IconRoot = styled('svg', {
  shouldForwardProp: (prop) =>
    ['color', 'size'].indexOf(prop) === -1 && isPropValid(prop)
})(({ color, rtl, size, theme: baseTheme }) => {
  let theme = iconTheme(baseTheme);

  return {
    color,
    fill: theme.Icon_fill,
    fontSize: theme.fontSize_base,
    height: theme[`Icon_size_${size}`] || size,
    transform: theme.direction === 'rtl' && rtl && 'scaleX(-1)',
    width: theme[`Icon_size_${size}`] || size
  };
});
