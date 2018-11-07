/* @flow */
import { createStyledComponent, pxToEm } from '../styles';
import RtlPopper from '../Popover/RtlPopper';
import { dropdownContentTheme } from './themes';

export const DropdownContentRoot = createStyledComponent(
  RtlPopper,
  ({ theme: baseTheme, wide }) => {
    const theme = dropdownContentTheme(baseTheme);

    return {
      backgroundColor: theme.DropdownContent_backgroundColor,
      border: `1px solid ${theme.DropdownContent_borderColor}`,
      borderRadius: theme.DropdownContent_borderRadius,
      boxShadow: theme.DropdownContent_boxShadow,
      maxHeight: '30vh',
      overflowY: 'auto',
      userSelect: 'none',
      width: wide ? pxToEm(344) : pxToEm(224),
      zIndex: theme.DropdownContent_zIndex,

      '&[data-placement^="top"]': {
        marginBottom: theme.DropdownContent_margin
      },
      '&[data-placement^="bottom"]': {
        marginTop: theme.DropdownContent_margin
      },
      '&[data-placement^="left"]': {
        marginRight: theme.DropdownContent_margin
      },
      '&[data-placement^="right"]': {
        marginLeft: theme.DropdownContent_margin
      },
      '&[data-x-out-of-boundaries]': {
        visibility: 'hidden'
      }
    };
  },
  {
    displayName: 'DropdownContent',
    includeStyleReset: true,
    filterProps: ['hasArrow', 'wide']
  }
);
