/* @flow */
import React, {
  Children,
  Component,
  cloneElement,
  isValidElement
} from 'react';
import { setFromArray, toArray } from '../utils/collections';
import { findDeep } from '../utils/children';
import composeEventHandlers from '../utils/composeEventHandlers';
import { MODE } from './constants';
import { ButtonGroupRoot as Root } from './styled';

import { buttonGroupPropTypes } from './propTypes';
import { ButtonGroupProps, ButtonGroupState } from './types';

// This check is intentionally loose. We cannot do a direct type comparison as
// we want to allow for styled buttons, themed buttons, and buttons inside of
// wrappers like Dropdowns, Popovers, and Tooltips.
// NOTE: We can rely on displayName, without fear of it being mangled, even in
// production, as long as it is set statically on each component
// https://github.com/facebook/react/issues/4915#issuecomment-335803765
const isButtonComponent = (element: any): element is React.ComponentType => {
  return element.type && /Button/.test(element.type.displayName);
};

const isSet = (a: any): a is Set<any> => a instanceof Set;

const isItemAtIndexChecked = (
  checked: number | Array<number> | Set<number>,
  index
) => {
  const checkedSet: Set<number> = isSet(checked)
    ? checked
    : setFromArray(toArray(checked));
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
      if (isValidElement(child) && child.props['defaultChecked']) {
        checked.add(index);
      }
    } else if (mode === MODE.radio) {
      const selectedChild = children.find((child) =>
        isValidElement(child) ? child.props['defaultChecked'] : undefined
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
      defaultChecked: ignoreDefaultChecked,
      disabled,
      fullWidth,
      mode,
      onClick: ignoreOnClick,
      onChange: ignoreOnChange,
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
      if (isValidElement(child)) {
        const nestedButton = isButton
          ? undefined
          : // Must be able to find styled/themed buttons inside of triggers
            findDeep(child.props['children'], isButtonComponent);

        return cloneElement<any>(child, {
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
          ...(isButton
            ? { 'data-variant': child.props['variant'] }
            : undefined),
          disabled: disabled || child.props['disabled'],
          key: index,
          ...(isToggleable && isChecked ? { primary: true } : undefined),
          onClick: composeEventHandlers(
            child.props['onClick'],
            this.handleClick.bind(null, index)
          ),
          ...(isToggleable ? { role: mode } : undefined),
          size,
          ...(variant && isButton
            ? { variant: child.props['variant'] || variant }
            : undefined)
        });
      } else {
        return null;
      }
    });

    return <Root {...rootProps}>{buttons}</Root>;
  }

  handleClick = (
    index: number,
    event: React.SyntheticEvent<HTMLButtonElement>
  ) => {
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
    event: React.SyntheticEvent<HTMLButtonElement>,
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
