/* @flow */
export default ({ theme }: Object) => {
  return {
    boxSizing: 'border-box',
    color: theme.color_text,
    fontFamily: theme.fontFamily
      ? `${theme.fontFamily}, ${theme.fontFamily_system}`
      : `${theme.fontFamily_system}`,
    fontSize: `${theme.fontSize_base}px`,
    lineHeight: theme.lineHeight,
    outline: 0,
    '& *,& *::before,& *::after': {
      boxSizing: 'inherit'
    }
  };
};
