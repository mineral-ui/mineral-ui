/* @flow */
import React, { Component } from 'react';
import { ellipsis } from 'polished';
import IconDanger from '../Icon/IconDanger';
import IconSuccess from '../Icon/IconSuccess';
import IconWarning from '../Icon/IconWarning';
import { createStyledComponent, pxToRem } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import IconArrowDropdownUp from '../Icon/IconArrowDropdownUp';
import IconArrowDropdownDown from '../Icon/IconArrowDropdownDown';
import FauxControl from '../FauxControl';
import { componentTheme as textInputComponentTheme } from '../TextInput/TextInput';

import type { Item } from '../Menu/Menu';

type Props = {
  /** Disables the control */
  disabled?: boolean,
  /** Indicates that the Select is open */
  isOpen?: boolean,
  /** Name of the field when submitted in a form */
  name?: string,
  /** Text displayed when there is no item selected */
  placeholder?: string,
  /** Indicates that the user cannot modify the value of the control */
  readOnly?: boolean,
  /** Indicates that the user must fill in a value before submitting a form */
  required?: boolean,
  /** The selected item */
  item?: Item,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** Ref for the trigger */
  triggerRef?: () => void,
  /** Available variants */
  variant?: 'success' | 'warning' | 'danger'
};

export const componentTheme = (baseTheme: Object) =>
  mapComponentThemes(
    {
      name: 'TextInput',
      theme: textInputComponentTheme(baseTheme)
    },
    {
      name: 'Select',
      theme: {
        Select_height_small: baseTheme.size_small,
        Select_height_medium: baseTheme.size_medium,
        Select_height_large: baseTheme.size_large,
        Select_height_jumbo: baseTheme.size_jumbo,

        SelectIcon_color: baseTheme.icon_color_theme
      }
    },
    baseTheme
  );

const ThemedFauxControl = createThemedComponent(
  FauxControl,
  ({ theme: baseTheme }) =>
    mapComponentThemes(
      {
        name: 'Select',
        theme: componentTheme(baseTheme)
      },
      {
        name: 'FauxControl',
        theme: {}
      },
      baseTheme
    )
);

const styles = {
  root: ({
    disabled,
    readOnly,
    selectedItemVariant,
    theme: baseTheme,
    variant
  }) => {
    const theme = componentTheme(baseTheme);
    const marginProperty =
      theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';

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
        [marginProperty]: theme.SelectIcon_marginHorizontal
      }
    };
  },
  trigger: ({ size, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      alignItems: 'center',
      display: 'flex',
      flex: '1 1 auto',
      height: theme[`Select_height_${size}`],
      minWidth: 0
    };
  },
  triggerContent: {
    ...ellipsis(null),
    userSelect: 'none',
    width: '100%'
  }
};

const Root = createStyledComponent(ThemedFauxControl, styles.root, {
  displayName: 'SelectTrigger'
});
const Trigger = createStyledComponent('div', styles.trigger, {
  displayName: 'Trigger'
});
const TriggerContent = createStyledComponent('span', styles.triggerContent, {
  displayName: 'TriggerContent'
});

const variantIcons = {
  danger: <IconDanger />,
  success: <IconSuccess />,
  warning: <IconWarning />
};

/**
 * SelectTrigger
 */
export default class SelectTrigger extends Component<Props> {
  render() {
    const {
      disabled,
      isOpen,
      item,
      name,
      placeholder,
      readOnly,
      triggerRef,
      size = 'large',
      variant,
      ...restProps
    } = this.props;

    const iconMarginMap = {
      small: 4,
      medium: 8,
      large: 8,
      jumbo: 14
    };

    const ArrowIcon = isOpen ? IconArrowDropdownUp : IconArrowDropdownDown;
    const Arrow = createStyledComponent(
      ArrowIcon,
      {
        margin: pxToRem(iconMarginMap[size])
      },
      {
        withProps: {
          size: size === 'small' || size === 'medium' ? 'medium' : pxToRem(24)
        }
      }
    );

    const controlProps = {
      hasPlaceholder: !item,
      variant: item && item.variant
    };

    const inputProps = {
      name,
      type: 'hidden',
      value: item ? item.value : ''
    };

    let rootProps = {
      afterItems: [
        <Arrow key="arrow" />,
        <input {...inputProps} key="input" />
      ],
      control: Trigger,
      controlProps,
      disabled,
      fauxControlRef: triggerRef,
      readOnly,
      selectedItemVariant: item && item.variant,
      size,
      variant,
      ...restProps
    };

    if (item) {
      const { iconEnd, iconStart, variant } = item;
      rootProps = {
        ...rootProps,
        iconEnd,
        iconStart: variant ? variantIcons[variant] : iconStart,
        item,
        variant: this.props.variant
      };
    }

    return (
      <Root {...rootProps}>
        <TriggerContent>{item ? item.text : placeholder}</TriggerContent>
      </Root>
    );
  }
}
