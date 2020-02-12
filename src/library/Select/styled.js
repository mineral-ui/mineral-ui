/* @flow */
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { ellipsis } from 'polished';
import Dropdown from '../Dropdown/Dropdown';
import FauxControl from '../FauxControl';
import { getNormalizedValue, pxToEm } from '../styles';
import { mapComponentThemes, themed } from '../themes';
import { ignoreSsrWarning } from '../utils/emotion';
import { SIZE } from './constants';
import { selectTheme, selectTriggerTheme } from './themes';

import type { StyledComponent } from '@emotion/styled-base/src/utils';

const ThemedDropdown = themed(Dropdown)(({ theme: baseTheme }) =>
  mapComponentThemes(
    {
      name: 'Select',
      theme: selectTheme(baseTheme)
    },
    {
      name: 'Dropdown',
      theme: {}
    },
    baseTheme
  )
);

export const SelectRoot: StyledComponent<{ [key: string]: any }> = styled(
  ThemedDropdown
)({
  width: '100%',

  '& > span': {
    width: '100%'
  }
});

export const contentWidthModifier = {
  enabled: true,
  fn: (data: Object) => {
    data.styles.minWidth = pxToEm(224);
    data.styles.width = pxToEm(data.offsets.reference.width);
    return data;
  }
};

const ThemedFauxControl = themed(FauxControl)(({ theme: baseTheme }) =>
  mapComponentThemes(
    {
      name: 'Select',
      theme: selectTriggerTheme(baseTheme)
    },
    {
      name: 'FauxControl',
      theme: {}
    },
    baseTheme
  )
);

export const SelectTriggerRoot: StyledComponent<{
  [key: string]: any
}> = styled(ThemedFauxControl)(
  ({ disabled, readOnly, selectedItemVariant, theme: baseTheme, variant }) => {
    const theme = selectTriggerTheme(baseTheme);
    const rtl = theme.direction === 'rtl';

    return {
      alignItems: 'center',
      display: 'flex',
      width: '100%',

      // all icons
      '& [role="img"]': {
        display: 'block',
        color: theme.SelectIcon_color,
        flex: '0 0 auto',

        ['&:first-child' + ignoreSsrWarning]: {
          color:
            disabled || readOnly
              ? theme.color_disabled
              : selectedItemVariant
              ? theme[`color_${selectedItemVariant}`]
              : theme.SelectIcon_color,
          margin: `0 ${theme.SelectIcon_marginHorizontal}`
        }
      },

      // the arrow icon
      '& :not([role="img"]) ~ [role="img"]': {
        color:
          disabled || readOnly
            ? theme.color_disabled
            : variant
            ? theme[`icon_color_${variant}`]
            : theme.SelectIcon_color
      },

      // the variant icon
      '& :not([role="img"]) + [role="img"]:not(:last-of-type)': {
        color:
          disabled || readOnly
            ? theme.color_disabled
            : variant
            ? theme[`color_${variant}`]
            : selectedItemVariant
            ? theme[`color_${selectedItemVariant}`]
            : theme.SelectIcon_color,
        marginLeft: rtl ? null : theme.SelectIcon_marginHorizontal,
        marginRight: rtl ? theme.SelectIcon_marginHorizontal : null
      }
    };
  }
);

export const Trigger: StyledComponent<{ [key: string]: any }> = styled('div', {
  shouldForwardProp: (prop) => prop !== 'size' && isPropValid(prop)
})(({ size, theme: baseTheme }) => {
  const theme = selectTriggerTheme(baseTheme);

  const fontSize =
    size === SIZE.small ? theme.Select_fontSize_small : theme.Select_fontSize;

  return {
    alignItems: 'center',
    display: 'flex',
    flex: '1 1 auto',
    height: getNormalizedValue(theme[`Select_height_${size}`], fontSize),
    minWidth: 0
  };
});

export const TriggerContent: StyledComponent<{ [key: string]: any }> = styled(
  'span'
)({
  ...ellipsis(null),
  userSelect: 'none',
  width: '100%'
});
