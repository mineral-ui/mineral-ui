/* @flow */
import { createStyledComponent, getNormalizedValue } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import FauxControl from '../FauxControl';
import { SIZE } from './constants';
import { textInputTheme } from './themes';

const ThemedFauxControl = createThemedComponent(
  FauxControl,
  ({ theme: baseTheme }) =>
    mapComponentThemes(
      {
        name: 'TextInput',
        theme: textInputTheme(baseTheme)
      },
      {
        name: 'FauxControl',
        theme: {}
      },
      baseTheme
    )
);

export const TextInputRoot = createStyledComponent(
  ThemedFauxControl,
  ({ theme: baseTheme, variant }) => {
    let theme = textInputTheme(baseTheme);

    if (variant) {
      theme = {
        ...theme,
        TextInputIcon_color: theme[`icon_color_${variant}`]
      };
    }

    return {
      alignItems: 'center',
      cursor: 'text',
      display: 'flex',
      width: '100%',

      '& [role="img"]': {
        color: theme.TextInputIcon_color,
        display: 'block',
        flex: '0 0 auto',
        margin: `0 ${theme.TextInputIcon_marginHorizontal}`,

        '&:last-of-type': {
          color: theme.TextInputIcon_color
        }
      }
    };
  },
  {
    displayName: 'TextInput'
  }
);

export const Input = createStyledComponent(
  'input',
  ({ controlSize, size: nonHtmlSize, theme: baseTheme }) => {
    const theme = textInputTheme(baseTheme);

    const size = controlSize || nonHtmlSize;
    const fontSize =
      size === SIZE.small
        ? theme.TextInput_fontSize_small
        : theme.TextInput_fontSize;

    return {
      backgroundColor: 'transparent',
      border: 0,
      boxShadow: 'none',
      flex: '1 1 auto',
      fontFamily: 'inherit',
      height: getNormalizedValue(theme[`TextInput_height_${size}`], fontSize),
      minWidth: 0,
      width: '100%',

      // Normalize Safari search inputs
      '&[type="search"]': {
        WebkitAppearance: 'none',

        '&::-webkit-search-decoration': {
          WebkitAppearance: 'none'
        }
      }
    };
  },
  {
    displayName: 'Input',
    rootEl: 'input',
    forwardProps: ['size']
  }
);
