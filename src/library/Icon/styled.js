/* @flow */
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { iconTheme } from './themes';

export const IconRoot = styled('svg', {
  shouldForwardProp: (prop) =>
    ['color', 'size'].indexOf(prop) === -1 && isPropValid(prop)
})(({
    /* TargetX Custom Styles */
    clickable,
    cursor,
    margin,
    marginBottom,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginTop,
    marginVertical,

    /* Built-In Styles */
    color,
    rtl,
    size,
    theme: baseTheme
 }) => {
  let theme = iconTheme(baseTheme);

  return {
    color,
    fill: theme.Icon_fill,
    fontSize: theme.fontSize_base,
    height: theme[`Icon_size_${size}`] || size,
    transform: theme.direction === 'rtl' && rtl && 'scaleX(-1)',
    width: theme[`Icon_size_${size}`] || size,

    /* TargetX Custom Styles */
    ...(clickable ? { cursor: 'pointer' } : {}),
    ...(cursor ? { cursor } : {}),
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
});
