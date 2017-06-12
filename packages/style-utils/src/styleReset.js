export default theme => ({
  all: 'initial',
  boxSizing: 'border-box',
  fontFamily: `${theme.fontFamily}, ${theme.fontFamily_system}`,
  lineHeight: theme.lineHeight,
  outline: 0,
  '& *,& *::before,& *::after': {
    boxSizing: 'inherit'
  }
});
