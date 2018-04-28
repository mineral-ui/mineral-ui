/* @flow */
export default ({ theme }: Object) => {
  return {
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
  };
};
