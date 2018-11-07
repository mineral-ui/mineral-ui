/* @flow */
import { createStyledComponent } from '../styles';
import { createThemedComponent } from '../themes';
import Flex, { FlexItem } from '../Flex';
import TextInput from '../TextInput';
import Button from '../Button';

import { paginationTheme } from './themes';

export const PaginationRoot = createStyledComponent(
  Flex,
  ({ theme: baseTheme }) => {
    const theme = paginationTheme(baseTheme);
    return {
      flexWrap: 'wrap-reverse',
      marginBottom: `-${theme.Pagination_gutterWidth}`,

      '& > *': {
        marginBottom: theme.Pagination_gutterWidth
      }
    };
  },
  {
    includeStyleReset: true,
    withProps: {
      element: 'nav'
    }
  }
);

export const PagesRoot = createStyledComponent(
  FlexItem,
  ({ theme: baseTheme }) => {
    const theme = paginationTheme(baseTheme);
    const rtl = theme.direction === 'rtl';
    const middleMargin = rtl ? 'marginLeft' : 'marginRight';
    return {
      '& > button, & > span': {
        '&:not(:last-child)': {
          [middleMargin]: theme.Pagination_gutterWidth
        }
      }
    };
  }
);

export const PagesEllipsisButton = createThemedComponent(
  Button,
  ({ theme }) => ({
    color_disabled: theme.color_theme
  })
);

export const PageJumperNumberInput = createStyledComponent(TextInput, {
  '& > input': {
    MozAppearance: 'textfield',

    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    }
  }
});

export const PageJumperRoot = createStyledComponent(FlexItem, ({ width }) => ({
  width
}));
