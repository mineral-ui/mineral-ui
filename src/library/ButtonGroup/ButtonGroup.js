/* @flow */
import React, { Children, cloneElement, Component } from 'react';
import { findDeep } from '../utils/children';
import { setFromArray, toArray } from '../utils/collections';
import composeEventHandlers from '../utils/composeEventHandlers';
import { MODE } from './constants';
import { buttonGroupPropTypes } from './propTypes';
import { ButtonGroupRoot as Root } from './styled';

import type { ButtonGroupProps, ButtonGroupState } from './types';

// This check is intentionally loose. We cannot do a direct type comparison as
// we want to allow for styled buttons, themed buttons, and buttons inside of
// wrappers like Dropdowns, Popovers, and Tooltips.
// NOTE: We can rely on displayName, without fear of it being mangled, even in
// production, as long as it is set statically on each component
// https://github.com/facebook/react/issues/4915#issuecomment-335803765
const isButtonComponent = (element: React$Element<*>) => {
  return element.type && /Button/.test(element.type.displayName);
};

const isItemAtIndexChecked = (
  checked: number | Array<number> | Set<number>,
  index
) => {
  const isSet = checked instanceof Set;
  const checkedSet = isSet ? checked : setFromArray(toArray(checked));
  // $FlowFixMe - Refinement to Set not working
  return checkedSet.has(index);
};

const getDefaultCheckedState = (props: ButtonGroupProps) => {
  const { children: _children, defaultChecked, mode } = props;
  const children = Children.toArray(_children);

  if (mode && defaultChecked !== undefined) {
    const defaultCheckedArray = toArray(defaultChecked);
    const checked =
      mode === MODE.checkbox ? defaultCheckedArray : [defaultCheckedArray[0]];
    return setFromArray(checked);
  }

  const checked: Set<number> = new Set();

  children.forEach((child, index) => {
    if (mode === MODE.checkbox) {
      if (child.props.defaultChecked) {
        checked.add(index);
      }
    } else if (mode === MODE.radio) {
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

export default class ButtonGroup extends Component<
  ButtonGroupProps,
  ButtonGroupState
> {
  static displayName = 'ButtonGroup';

  static propTypes = buttonGroupPropTypes;

  state = {
    checked: getDefaultCheckedState(this.props)
  };

  render() {
    const {
      checked: ignoreChecked,
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
      fullWidth,
      role: mode === MODE.radio ? 'radiogroup' : 'group',
      variant,
      ...restProps
    };
    const checked = this.getControllableValue('checked');
    const buttons = Children.map(children, (child, index) => {
      const isToggleable = Boolean(mode);
      const isChecked = isItemAtIndexChecked(checked, index);
      const isButton = isButtonComponent(child);
      const nestedButton = isButton
        ? undefined
        : // Must be able to find styled/themed buttons inside of triggers
          findDeep(child.props.children, isButtonComponent);

      return cloneElement(child, {
        ...(isToggleable ? { 'aria-checked': isChecked } : undefined),
        ...(nestedButton
          ? {
              children: cloneElement(nestedButton, {
                'data-variant': nestedButton.props.variant,
                variant: nestedButton.props.variant || variant
              })
            }
          : undefined),
        'data-index': index,
        ...(isButton ? { 'data-variant': child.props.variant } : undefined),
        disabled: disabled || child.props.disabled,
        key: index,
        ...(isToggleable && isChecked ? { primary: true } : undefined),
        onClick: composeEventHandlers(
          child.props.onClick,
          this.handleClick.bind(null, index)
        ),
        ...(isToggleable ? { role: mode } : undefined),
        size,
        ...(variant && isButton
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
          if (mode === MODE.checkbox) {
            changed = true;
            checked = prevState.checked;
            const dataIndex = parseInt(target.getAttribute('data-index'));
            checked.has(dataIndex)
              ? checked.delete(dataIndex)
              : checked.add(dataIndex);
          } else {
            checked = setFromArray([index]);
            changed =
              isItemAtIndexChecked(checked, index) !==
              isItemAtIndexChecked(prevState.checked, index);
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
    return Object.prototype.hasOwnProperty.call(this.props, prop);
  };

  getControllableValue = (key: string) => {
    return this.isControlled(key) ? this.props[key] : this.state[key];
  };
}
