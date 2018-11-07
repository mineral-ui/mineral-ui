/* @flow */
import { ellipsis } from 'polished';
import { createStyledComponent, getNormalizedValue, pxToEm } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import FauxControl from '../FauxControl';
import Dropdown from '../Dropdown/Dropdown';
import { selectTheme, selectTriggerTheme } from './themes';
import { SIZE } from './constants';

const ThemedDropdown = createThemedComponent(Dropdown, ({ theme: baseTheme }) =>
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

export const SelectRoot = createStyledComponent(
  ThemedDropdown,
  {
    width: '100%',

    '& > span': {
      width: '100%'
    }
  },
  {
    displayName: 'Select'
  }
);

export const contentWidthModifier = {
  enabled: true,
  fn: (data: Object) => {
    data.styles.minWidth = pxToEm(224);
    data.styles.width = pxToEm(data.offsets.reference.width);
    return data;
  }
};

const ThemedFauxControl = createThemedComponent(
  FauxControl,
  ({ theme: baseTheme }) =>
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

export const SelectTriggerRoot = createStyledComponent(
  ThemedFauxControl,
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

        '&:first-child': {
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
  },
  {
    displayName: 'SelectTrigger'
  }
);

export const Trigger = createStyledComponent(
  'div',
  ({ size, theme: baseTheme }) => {
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
  },
  {
    displayName: 'Trigger'
  }
);

export const TriggerContent = createStyledComponent(
  'span',
  {
    ...ellipsis(null),
    userSelect: 'none',
    width: '100%'
  },
  {
    displayName: 'TriggerContent'
  }
);
