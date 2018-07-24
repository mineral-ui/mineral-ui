/* @flow */
import React, { PureComponent } from 'react';
import { canUseDOM } from 'exenv';
import { createThemedComponent, mapComponentThemes } from '../themes';
import Choice, {
  componentTheme as choiceComponentTheme
} from '../Choice/Choice';
import IconChecked from '../Icon/IconCheckBoxCheck';
import IconIndeterminate from '../Icon/IconCheckBoxIndeterminate';
import { composeEventHandlers } from '../utils';

type Props = {
  /**
   * Checked state of the checkbox. Primarily for use with controlled
   * components. If this prop is specified, an `onChange` handler must also be
   * specified. See also: `defaultChecked`.
   */
  checked?: boolean,
  /** @Private CSS className */
  className?: string,
  /**
   * Initial checked state of the checkbox; primarily for use with
   * uncontrolled components
   */
  defaultChecked?: boolean,
  /**
   * Initial indeterminate state of the checkbox; primarily for use with
   * uncontrolled components
   */
  defaultIndeterminate?: boolean,
  /** Disables the checkbox */
  disabled?: boolean,
  /** Visually hide label, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology) */
  hideLabel?: boolean,
  /**
   * Partially checked state. Primarily for use with controlled components.
   * If this prop is specified, an `onChange` handler must also be
   * specified. See also: `defaultIndeterminate`.
   */
  indeterminate?: boolean,
  /** Ref for the checkbox */
  inputRef?: (node: ?HTMLInputElement) => void,
  /** Indicates that the value of the input is invalid */
  invalid?: boolean,
  /** Maximize the distance between the label and the control */
  justify?: boolean,
  /** Label associated with the input element */
  label: string | React$Element<*>,
  /** Determines the position of the label relative to the control */
  labelPosition?: 'start' | 'end',
  /** Used to uniquely define a group of checkboxes */
  name?: string,
  /** Function called when a checkbox is selected */
  onChange?: (event: SyntheticInputEvent<>) => void,
  /** @Private Function called when a checkbox is clicked. */
  onClick?: (event: SyntheticInputEvent<>) => void,
  /** Indicates that the user must select an option before submitting a form */
  required?: boolean,
  /** Props to be applied directly to the root element rather than the input */
  rootProps?: Object,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** The value of the checkbox */
  value?: string
};

export const componentTheme = (baseTheme: Object) =>
  mapComponentThemes(
    {
      name: 'Choice',
      theme: choiceComponentTheme(baseTheme)
    },
    {
      name: 'Checkbox',
      theme: {}
    },
    baseTheme
  );

const Root = createThemedComponent(Choice, ({ theme: baseTheme }) =>
  mapComponentThemes(
    {
      name: 'Checkbox',
      theme: componentTheme(baseTheme)
    },
    {
      name: 'Choice',
      theme: {}
    },
    baseTheme
  )
);

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

/**
 * Checkbox is an interactive control that can be turned on or off. Checkboxes
 * are often used in [groups](/components/checkbox-group), wherein multiple options may be
 * selected.
 */
export default class Checkbox extends PureComponent<Props> {
  static defaultProps = {
    labelPosition: 'end',
    size: 'large'
  };
  static displayName = 'Checkbox';

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

  componentDidUpdate(prevProps: Props) {
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
