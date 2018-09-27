/* @flow */
import normalizeToDocument from './normalizeToDocument';

export default ({ theme }: Object) => {
  return {
    boxSizing: 'border-box',
    color: theme.color,
    fontFamily: theme.fontFamily
      ? `${theme.fontFamily}, ${theme.fontFamily_system}`
      : `${theme.fontFamily_system}`,
    fontSize: normalizeToDocument(1, theme),
    lineHeight: theme.lineHeight,
    outline: 0,
    '& *,& *::before,& *::after': {
      boxSizing: 'inherit'
    },
    MozOsxFontSmoothing: 'auto',
    WebkitFontSmoothing: 'antialiased'
  };
};
