/* @flow */
import React, { PureComponent } from 'react';
import { createThemedComponent, mapComponentThemes } from '../themes';
import Choice, {
  componentTheme as choiceComponentTheme
} from '../Choice/Choice';
import IconChecked from '../Icon/IconCheckBoxCheck';
import IconIndeterminate from '../Icon/IconCheckBoxIndeterminate';

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
  /** Disables the checkbox */
  disabled?: boolean,
  /** Visually hide label, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology) */
  hideLabel?: boolean,
  /**
   * Indicates a state in which it cannot be determined if the input is checked
   * or not
   */
  indeterminate?: boolean,
  /** Ref for the checkbox */
  inputRef?: (node: ?React$Component<*, *>) => void,
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
  /** Indicates that the user must select an option before submitting a form */
  required?: boolean,
  /** Props to be applied directly to the root element rather than the input */
  rootProps?: Object,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** The value of the checkbox */
  value?: string
};

export const componentTheme = (baseTheme: Object) => {
  return {
    ...mapComponentThemes(
      {
        name: 'Choice',
        theme: choiceComponentTheme(baseTheme)
      },
      {
        name: 'Checkbox',
        theme: {}
      },
      baseTheme
    )
  };
};

const Root = createThemedComponent(Choice, ({ theme: baseTheme }) => {
  return {
    ...mapComponentThemes(
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
  };
});

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

  render() {
    const {
      className,
      indeterminate,
      inputRef,
      rootProps: otherRootProps,
      ...restProps
    } = this.props;
    const rootProps = {
      iconChecked: indeterminate ? <IconIndeterminate /> : <IconChecked />,
      inputRef: (ref) => {
        if (ref) {
          ref.indeterminate = indeterminate;
        }

        if (inputRef) {
          inputRef(ref);
        }
      },
      rootProps: {
        className,
        ...otherRootProps
      },
      type: 'checkbox',
      ...restProps // Note: Props are spread to input rather than Root
    };

    return <Root {...rootProps} />;
  }
}
