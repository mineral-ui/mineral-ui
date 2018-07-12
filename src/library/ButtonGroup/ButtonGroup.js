/* @flow */
import React, { Children, Component, cloneElement } from 'react';
import { createStyledComponent } from '../styles';
import { setFromArray, toArray } from '../utils/collections';
import composeEventHandlers from '../utils/composeEventHandlers';

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
  variant?: 'danger' | 'success' | 'warning',
  /** Align Buttons vertically */
  vertical?: boolean
};

type State = {
  checked: Set<number>
};

export const componentTheme = (baseTheme: Object) => ({
  ButtonGroupButton_backgroundColor_checkedDisabled: baseTheme.color_gray_40,
  ButtonGroupButton_border_disabled: `solid 1px ${baseTheme.borderColor}`,
  ButtonGroupButton_borderStartColor: baseTheme.borderColor,
  ButtonGroupButton_borderStartColor_checked: 'currentcolor',
  ButtonGroupButton_color_checkedDisabled: baseTheme.color_gray_60,

  ...baseTheme
});

const styles = ({ fullWidth, theme: baseTheme, vertical }) => {
  let theme = componentTheme(baseTheme);
  const { direction } = theme;
  const rtl = direction === 'rtl';

  return {
    display: 'flex',
    flexDirection: vertical ? 'column' : 'row',

    '& button': {
      flexGrow: fullWidth && 1,

      '&:focus, &:active': {
        position: 'relative'
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

    '& > button:not(:first-child), & > *:not(:first-child) button':
      rtl && !vertical
        ? {
            borderRightColor: 'transparent',
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0
          }
        : !rtl && !vertical
          ? {
              borderLeftColor: 'transparent',
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0
            }
          : {
              borderTopColor: 'transparent',
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0
            },

    '& > button:not(:last-child), & > *:not(:last-child) button':
      rtl && !vertical
        ? {
            borderBottomLeftRadius: 0,
            borderTopLeftRadius: 0
          }
        : !rtl && !vertical
          ? {
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0
            }
          : {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0
            },

    '& > [aria-checked]:not(:last-child)':
      rtl && !vertical
        ? { borderLeftColor: 'transparent' }
        : !rtl && !vertical
          ? { borderRightColor: 'transparent' }
          : { borderBottomColor: 'transparent' },

    '& > [aria-checked=false] + *:not(button) button':
      rtl && !vertical
        ? { borderRightColor: theme.ButtonGroupButton_borderStartColor }
        : !rtl && !vertical
          ? { borderLeftColor: theme.ButtonGroupButton_borderStartColor }
          : { borderTopColor: theme.ButtonGroupButton_borderStartColor },

    '& > [aria-checked=true] + [aria-checked=true]': {
      '&:not(:focus), & button:not(:focus)': vertical
        ? {
            borderTopColor: theme.ButtonGroupButton_borderStartColor_checked
          }
        : {
            borderLeftColor:
              !rtl && theme.ButtonGroupButton_borderStartColor_checked,
            borderRightColor:
              rtl && theme.ButtonGroupButton_borderStartColor_checked
          }
    },

    '& > [aria-checked=false], & > *:not([aria-checked])': {
      '&:focus, & button:focus': vertical
        ? {
            borderTopColor: theme.ButtonGroupButton_borderStartColor,
            borderBottomColor: theme.ButtonGroupButton_borderStartColor
          }
        : {
            borderLeftColor: theme.ButtonGroupButton_borderStartColor,
            borderRightColor: theme.ButtonGroupButton_borderStartColor
          }
    },
    '& > [aria-checked=false] + [aria-checked=false]': {
      '&:not(:focus)': vertical
        ? {
            borderTopColor: theme.ButtonGroupButton_borderStartColor
          }
        : {
            borderLeftColor: !rtl && theme.ButtonGroupButton_borderStartColor,
            borderRightColor: rtl && theme.ButtonGroupButton_borderStartColor
          }
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
      vertical,
      ...restProps
    } = this.props;
    const rootProps = {
      disabled,
      fullWidth,
      mode,
      role: mode === 'radio' ? 'radiogroup' : 'group',
      vertical,
      ...restProps
    };
    const checked = this.getControllableValue('checked');
    const buttons = Children.map(children, (child, index) => {
      const isChildToggleable = mode;
      const isChildChecked = isChecked(checked, index);

      return cloneElement(child, {
        ...(isChildToggleable ? { 'aria-checked': isChildChecked } : undefined),
        'data-index': index,
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
        ...(variant ? { variant } : undefined)
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
