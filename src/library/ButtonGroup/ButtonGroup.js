/* @flow */
import React, { Children, Component, cloneElement } from 'react';
import { createStyledComponent } from '../styles';
import { setFromArray, toArray } from '../utils/collections';
import composeEventHandlers from '../utils/composeEventHandlers';
import Button from '../Button';

type Props = {
  /** Accessible label */
  'aria-label': string,
  /**
   * Index or array of indices of the selected [Button(s)](/components/button).
   * Primarily for use with controlled components with a `mode` prop defined.
   * If this prop is specified, an `onClick` handler must also be specified.
   * See also: `defaultChecked`
   */
  checked?: number | Array<number>,
  /** Mineral [Button](/components/button) components */
  children: React$Node,
  /**
   * Index or array of indices of the selected [Button(s)](/components/button);
   * primarily for use with uncontrolled components with a `mode` prop defined.
   */
  defaultChecked?: number | Array<number>,
  /** Disable all [Button](/components/button) children */
  disabled?: boolean,
  /** Stretch ButtonGroup to fill its container */
  fullWidth?: boolean,
  /** Behavioral mode of [Button](/components/button) children: either
   [Radio](/components/radio) or [Checkbox](/components/checkbox) */
  mode?: 'checkbox' | 'radio',
  /** Called when a toggleable Button is selected */
  onChange?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  /** Called with the click event */
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** Available variants */
  variant?: 'danger' | 'success' | 'warning'
};

type State = {
  checked: Set<number>
};

export const componentTheme = (baseTheme: Object) => ({
  ButtonGroupButton_backgroundColor_checkedDisabled: baseTheme.color_gray_40,
  ButtonGroupButton_border_disabled: `solid 1px ${baseTheme.borderColor}`,
  ButtonGroupButton_borderColor_active: baseTheme.borderColor_theme_active,
  ButtonGroupButton_borderColor_hover: baseTheme.borderColor_theme_hover,
  ButtonGroupButton_borderStartColor: baseTheme.borderColor,
  ButtonGroupButton_borderStartColor_checked: 'currentcolor',
  ButtonGroupButton_color_checkedDisabled: baseTheme.color_gray_60,

  ...baseTheme
});

const styles = ({ fullWidth, theme: baseTheme, variant }) => {
  let theme = componentTheme(baseTheme);
  if (variant) {
    // prettier-ignore
    theme = {
      ...theme,
      ButtonGroupButton_borderColor_active: theme[`borderColor_${variant}_active`],
      ButtonGroupButton_borderColor_hover: theme[`borderColor_${variant}_hover`]
    };
  }
  const { direction } = theme;
  const rtl = direction === 'rtl';
  const start = rtl ? 'Right' : 'Left';
  const end = rtl ? 'Left' : 'Right';

  const borderStartColorProperty = `border${start}Color`;
  const borderEndColorProperty = `border${end}Color`;

  const borderBottomStartRadiusProperty = `borderBottom${start}Radius`;
  const borderBottomEndRadiusProperty = `borderBottom${end}Radius`;

  const borderTopStartRadiusProperty = `borderTop${start}Radius`;
  const borderTopEndRadiusProperty = `borderTop${end}Radius`;

  return {
    display: 'flex',

    '& button': {
      flexGrow: fullWidth && 1,

      '&:focus, &:active': {
        position: 'relative'
      },

      '&:hover:not(:focus):not(:active):not([aria-checked=true]):not([disabled])': {
        borderColor: theme.ButtonGroupButton_borderColor_hover,

        '&[data-variant="danger"]': {
          borderColor: theme.borderColor_danger_hover
        },

        '&[data-variant="success"]': {
          borderColor: theme.borderColor_success_hover
        },

        '&[data-variant="warning"]': {
          borderColor: theme.borderColor_warning_hover
        }
      },

      '&:active:not(:focus):not([aria-checked=true]):not([disabled])': {
        borderColor: theme.ButtonGroupButton_borderColor_active,

        '&[data-variant="danger"]': {
          borderColor: theme.borderColor_danger_active
        },

        '&[data-variant="success"]': {
          borderColor: theme.borderColor_success_active
        },

        '&[data-variant="warning"]': {
          borderColor: theme.borderColor_warning_active
        }
      },

      '&[disabled]': {
        border: theme.ButtonGroupButton_border_disabled,

        '&[aria-checked=true]': {
          backgroundColor:
            theme.ButtonGroupButton_backgroundColor_checkedDisabled,
          color: theme.ButtonGroupButton_color_checkedDisabled,

          '&:hover': {
            color: theme.ButtonGroupButton_color_checkedDisabled
          }
        }
      }
    },

    // 1 - Buttons except the first
    // 2 - "Anything" except the first with a nested button
    '& > button:not(:first-child), & > *:not(:first-child) button': {
      [borderBottomStartRadiusProperty]: 0,
      [borderTopStartRadiusProperty]: 0
    },

    // 1 - Buttons except the last
    // 2 - "Anything" except the last with a nested button
    '& > button:not(:last-child), & > *:not(:last-child) button': {
      [borderBottomEndRadiusProperty]: 0,
      [borderTopEndRadiusProperty]: 0,
      [borderEndColorProperty]: 'transparent'
    },

    // 1 - Mode'd, unchecked buttons
    // 2 - Non-mode'd buttons
    // 3 - Non-mode'd "anything" with a nested button
    '& > [aria-checked=false], & > button:not([aria-checked]), & > *:not([aria-checked]) button': {
      '&:focus, & button:focus': {
        borderLeftColor: theme.ButtonGroupButton_borderStartColor,
        borderRightColor: theme.ButtonGroupButton_borderStartColor
      }
    },

    // Mode'd, unchecked, un-focused, un-hovered button immediately following a mode'd, unchecked button
    '& > [aria-checked=false] + [aria-checked=false]:not(:focus)': {
      [borderStartColorProperty]: theme.ButtonGroupButton_borderStartColor
    },

    // 1 - Mode'd, unchecked, un-focused buttons immediately following a mode'd, unchecked, non-disabled, hovered button
    // 2 - Non-mode'd, un-focused buttons immediately following a non-mode'd, non-disabled, hovered "anything"
    // 3 - Non-mode'd "anything" with a nested, un-focused button immediately following a non-mode'd, non-disabled, hovered "anything"
    '& > [aria-checked=false]:not([disabled]):hover + [aria-checked=false], & > *:not([aria-checked]):not([disabled]):hover + button:not([aria-checked]), & > *:not([aria-checked]):not([disabled]):hover + *:not([aria-checked]) button': {
      '&:not(:focus)': {
        [borderStartColorProperty]: 'transparent'
      }
    },

    // Mode'd, unchecked, un-focused buttons immediately following a mode'd, checked button
    '& > [aria-checked=true] + [aria-checked=false]:not(:focus)': {
      [borderStartColorProperty]: 'transparent'
    },

    // Mode'd, checked, un-focused buttons immediately following a mode'd checked button
    '& > [aria-checked=true] + [aria-checked=true]:not(:focus)': {
      [borderStartColorProperty]:
        theme.ButtonGroupButton_borderStartColor_checked
    }
  };
};

const isChecked = (checked: number | Array<number> | Set<number>, index) => {
  const isSet = checked instanceof Set;
  const checkedSet = isSet ? checked : setFromArray(toArray(checked));
  // $FlowFixMe - Refinement to Set not working
  return checkedSet.has(index);
};

const getDefaultCheckedState = (props: Props) => {
  const { children: _children, defaultChecked, mode } = props;
  const children = Children.toArray(_children);

  if (mode && defaultChecked !== undefined) {
    const defaultCheckedArray = toArray(defaultChecked);
    const checked =
      mode === 'checkbox' ? defaultCheckedArray : [defaultCheckedArray[0]];
    return setFromArray(checked);
  }

  const checked: Set<number> = new Set();

  children.forEach((child, index) => {
    if (mode === 'checkbox') {
      if (child.props.defaultChecked) {
        checked.add(index);
      }
    } else if (mode === 'radio') {
      const selectedChild = children.find(
        (child) => child.props.defaultChecked
      );
      const index = children.indexOf(selectedChild);
      if (index !== -1) {
        checked.add(index);
      }
    }
  });

  return checked;
};

const Root = createStyledComponent('div', styles, {
  displayName: 'ButtonGroup',
  includeStyleReset: true
});

/**
 * ButtonGroup allows authors to stylistically group a set of related
 * [Buttons](/components/button) or construct a group of selectable Buttons that
 * behave like [Radios](/components/radio) or [Checkboxes](/components/checkbox).
 */
export default class ButtonGroup extends Component<Props, State> {
  static displayName = 'ButtonGroup';

  state = {
    checked: getDefaultCheckedState(this.props)
  };

  render() {
    const {
      children,
      disabled,
      fullWidth,
      mode,
      onClick: ignoreOnClick,
      size,
      variant,
      ...restProps
    } = this.props;
    const rootProps = {
      disabled,
      fullWidth,
      mode,
      role: mode === 'radio' ? 'radiogroup' : 'group',
      variant,
      ...restProps
    };
    const checked = this.getControllableValue('checked');
    const buttons = Children.map(children, (child, index) => {
      const isChildToggleable = mode;
      const isChildChecked = isChecked(checked, index);
      const hasNestedButton = child.type !== Button;
      const nestedButton = hasNestedButton && child.props.children;

      return cloneElement(child, {
        ...(isChildToggleable ? { 'aria-checked': isChildChecked } : undefined),
        ...(nestedButton
          ? {
              children: cloneElement(nestedButton, {
                'data-variant': nestedButton.props.variant,
                variant: nestedButton.props.variant || variant
              })
            }
          : undefined),
        'data-index': index,
        ...(!hasNestedButton
          ? { 'data-variant': child.props.variant }
          : undefined),
        disabled: disabled || child.props.disabled,
        key: index,
        ...(isChildToggleable && isChildChecked
          ? { primary: true }
          : undefined),
        onClick: composeEventHandlers(
          child.props.onClick,
          this.handleClick.bind(null, index)
        ),
        ...(isChildToggleable ? { role: mode } : undefined),
        size,
        ...(variant && !hasNestedButton
          ? { variant: child.props.variant || variant }
          : undefined)
      });
    });

    return <Root {...rootProps}>{buttons}</Root>;
  }

  handleClick = (index: number, event: SyntheticEvent<HTMLButtonElement>) => {
    const { mode } = this.props;

    if (!mode) {
      return this.clickActions(event, false);
    }

    event.persist();
    const { currentTarget: target } = event;

    if (this.isControlled('checked')) {
      this.clickActions(event, true);
    } else {
      let changed;
      this.setState(
        (prevState) => {
          let checked;
          if (mode === 'checkbox') {
            changed = true;
            checked = prevState.checked;
            const dataIndex = parseInt(target.getAttribute('data-index'));
            checked.has(dataIndex)
              ? checked.delete(dataIndex)
              : checked.add(dataIndex);
          } else {
            checked = setFromArray([index]);
            changed = [...prevState.checked][0] !== [...checked][0];
          }

          return { checked };
        },
        () => {
          this.clickActions(event, changed);
        }
      );
    }
  };

  clickActions = (
    event: SyntheticEvent<HTMLButtonElement>,
    changed: boolean
  ) => {
    const { onChange, onClick } = this.props;

    onClick && onClick(event);
    changed && onChange && onChange(event);
  };

  isControlled = (prop: string) => {
    return this.props.hasOwnProperty(prop);
  };

  getControllableValue = (key: string) => {
    return this.isControlled(key) ? this.props[key] : this.state[key];
  };
}
