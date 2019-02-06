/* @flow */
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { getNormalizedValue, pxToEm } from '../styles';
import { themed, mapComponentThemes } from '../themes';
import FauxControl from '../FauxControl';
import { textAreaTheme } from './themes';

const ThemedFauxControl = themed(FauxControl)(({ theme: baseTheme }) =>
  mapComponentThemes(
    {
      name: 'TextArea',
      theme: textAreaTheme(baseTheme)
    },
    {
      name: 'FauxControl',
      theme: {}
    },
    baseTheme
  )
);

export const TextAreaRoot = styled(ThemedFauxControl)({
  alignItems: 'center',
  cursor: 'text',
  display: 'flex',
  width: '100%'
});

export const Input = styled('textarea', {
  shouldForwardProp: (prop) => prop !== 'size' && isPropValid(prop)
})(({ resizeable, size, theme: baseTheme }) => {
  const theme = textAreaTheme(baseTheme);

  const fontSize =
    size === 'small' ? theme.TextArea_fontSize_small : theme.TextArea_fontSize;
  const paddingVerticalNormalized = getNormalizedValue(
    theme[`TextArea_paddingVertical_${size}`],
    fontSize
  );

  return {
    backgroundColor: 'transparent',
    border: 0,
    boxShadow: 'none',
    flex: '1 1 auto',
    fontFamily: 'inherit',
    lineHeight: theme.lineHeight_prose,
    margin: theme.TextArea_borderWidth,
    // minHeight value is an attempt to display a single line of text.
    // It is needed when a user manually resizes a textarea.
    minHeight: `${parseFloat(paddingVerticalNormalized) * 2 +
      parseFloat(theme.TextArea_fontSize) * parseFloat(theme.lineHeight) +
      parseFloat(pxToEm(parseFloat(theme.TextArea_borderWidth) * 2)) +
      parseFloat(pxToEm(2))}em`,
    minWidth: 0,
    outline: 0,
    paddingBottom: paddingVerticalNormalized,
    paddingTop: paddingVerticalNormalized,
    resize: resizeable ? 'vertical' : 'none',
    width: '100%'
  };
});
