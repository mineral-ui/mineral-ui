/* @flow */
import type { ThemeObj } from '../themes/types';
import type { StyleObj } from './types';

type ComponentStyleReset = ({ theme: ThemeObj }) => StyleObj;

const componentStyleReset: ComponentStyleReset = ({ theme }) => ({
  boxSizing: 'border-box',
  color: theme.color,
  fontFamily: theme.fontFamily
    ? `${theme.fontFamily}, ${theme.fontFamily_system}`
    : `${theme.fontFamily_system}`,
  fontSize: theme.fontSize_base,
  lineHeight: theme.lineHeight,
  outline: 0,
  '& *,& *::before,& *::after': {
    boxSizing: 'inherit'
  },
  MozOsxFontSmoothing: 'auto',
  WebkitFontSmoothing: 'antialiased'
});

export default componentStyleReset;
