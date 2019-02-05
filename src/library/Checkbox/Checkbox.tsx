/* @flow */
import React, { PureComponent } from 'react';
import { canUseDOM } from 'exenv';
import IconChecked from '../Icon/IconCheckBoxCheck';
import IconIndeterminate from '../Icon/IconCheckBoxIndeterminate';
import { composeEventHandlers } from '../utils';
import { CheckboxRoot as Root } from './styled';
import { LABEL_POSITION, SIZE } from './constants';

import { checkboxPropTypes } from './propTypes';
import type { CheckboxDefaultProps, CheckboxProps } from './types';

// Detect if browser triggers change event when click indeterminate checkbox
// IE/Edge/other? do not
const indeterminateClickTriggersChangeEvent = (() => {
  let supportsOnChange = false;

  if (canUseDOM && process.env.NODE_ENV !== 'test') {
    const { body } = document;
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.indeterminate = true;
    checkbox.setAttribute('hidden', 'true');
    checkbox.addEventListener('change', () => {
      supportsOnChange = true;
    });

    body && body.appendChild(checkbox);
    checkbox.click();
    body && body.removeChild(checkbox);
  }

  return supportsOnChange;
})();

export default class Checkbox extends PureComponent<CheckboxProps> {
  static defaultProps: CheckboxDefaultProps = {
    labelPosition: LABEL_POSITION.end,
    size: SIZE.large
  };

  static displayName = 'Checkbox';

  static propTypes = checkboxPropTypes;

  input: ?HTMLInputElement;

  indeterminate: boolean;

  componentDidMount() {
    const {
      checked,
      defaultChecked,
      defaultIndeterminate,
      indeterminate
    } = this.props;

    const isIndeterminate = Boolean(indeterminate || defaultIndeterminate);
    const isChecked = Boolean(isIndeterminate || checked || defaultChecked);

    this.updateState(isIndeterminate, isChecked);
  }

  componentDidUpdate(prevProps: CheckboxProps) {
    const { checked, indeterminate } = this.props;

    if (
      prevProps.indeterminate !== indeterminate ||
      prevProps.checked !== checked
    ) {
      this.updateState(
        Boolean(indeterminate),
        Boolean(indeterminate || checked)
      );
    }
  }

  render() {
    const {
      className,
      defaultIndeterminate,
      indeterminate,
      onClick,
      rootProps: otherRootProps,
      ...restProps
    } = this.props;
    const rootProps = {
      iconChecked:
        defaultIndeterminate || indeterminate ? (
          <IconIndeterminate />
        ) : (
          <IconChecked />
        ),
      inputRef: this.setInputRef,
      onClick: composeEventHandlers(onClick, this.handleClick),
      rootProps: {
        className,
        ...otherRootProps
      },
      type: 'checkbox',
      ...restProps // Note: Props are spread to input rather than Root
    };

    return <Root {...rootProps} />;
  }

  setInputRef = (node: HTMLInputElement) => {
    const { inputRef } = this.props;
    this.input = node;
    inputRef && inputRef(node);
  };

  updateState = (indeterminate: boolean, checked: boolean) => {
    this.indeterminate = indeterminate;
    if (this.input) {
      this.input.indeterminate = indeterminate;
      this.input.checked = checked;
    }
  };

  handleClick = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { defaultIndeterminate, indeterminate, onChange } = this.props;

    if (defaultIndeterminate || indeterminate) {
      const nextIndeterminate = this.isControlled('indeterminate')
        ? this.getIndeterminateValue()
        : !this.getIndeterminateValue();

      this.updateState(nextIndeterminate, nextIndeterminate);

      if (!indeterminateClickTriggersChangeEvent) {
        onChange && onChange(event);
      }
    }
  };

  isControlled = (prop: string) => {
    return this.props.hasOwnProperty(prop);
  };

  getIndeterminateValue = () => {
    return Boolean(
      this.isControlled('indeterminate')
        ? this.props.indeterminate
        : this.indeterminate
    );
  };
}
