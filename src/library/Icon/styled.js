/* @flow */
import { createStyledComponent } from '../styles';
import { iconTheme } from './themes';

export const IconRoot = createStyledComponent(
  'svg',
  ({ color, rtl, size, theme: baseTheme }) => {
    let theme = iconTheme(baseTheme);

    return {
      color,
      fill: theme.Icon_fill,
      fontSize: theme.fontSize_base,
      height: theme[`Icon_size_${size}`] || size,
      transform: theme.direction === 'rtl' && rtl && 'scaleX(-1)',
      width: theme[`Icon_size_${size}`] || size
    };
  },
  {
    rootEl: 'svg'
  }
);
