/* @flow */
import React from 'react';
import { createThemedComponent, mapComponentThemes } from '../themes';
import Choice, {
  componentTheme as choiceComponentTheme
} from '../Choice/Choice';
import IconChecked from '../Icon/IconRadioButtonCheck';

type Props = {
  /**
   * Checked state of the radio button. Primarily for use with controlled
   * components. If this prop is specified, an `onChange` handler must also be
   * specified. See also: `defaultChecked`.
   */
  checked?: boolean,
  /** @Private CSS className */
  className?: string,
  /**
   * Initial checked state of the radio button; primarily for use with
   * uncontrolled components
   */
  defaultChecked?: boolean,
  /** Disables the radio button */
  disabled?: boolean,
  /** Visually hide label, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology) */
  hideLabel?: boolean,
  /** Ref for the radio button */
  inputRef?: (node: ?React$Component<*, *>) => void,
  /** Indicates that the value of the input is invalid */
  invalid?: boolean,
  /** Maximize the distance between the label and the control */
  justify?: boolean,
  /** Label associated with the input element */
  label: string | React$Element<*>,
  /** Determines the position of the label relative to the control */
  labelPosition?: 'start' | 'end',
  /** Used to uniquely define a group of radio buttons */
  name?: string,
  /** Function called when a radio button is selected */
  onChange?: (event: SyntheticInputEvent<>) => void,
  /** Indicates that the user must select an option before submitting a form */
  required?: boolean,
  /** Props to be applied directly to the root element rather than the input */
  rootProps?: Object,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** The value of the radio button */
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
        name: 'Radio',
        theme: {
          RadioControl_borderRadius: '100%'
        }
      },
      baseTheme
    )
  };
};

const Root = createThemedComponent(Choice, ({ theme: baseTheme }) => {
  return {
    ...mapComponentThemes(
      {
        name: 'Radio',
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
 * Radio is an interactive control that can be turned on or off. Radios are most
 * often used in [groups](/components/radio-group), wherein only a single option may be
 * selected.
 */
const Radio = (props: Props) => {
  const {
    className,
    inputRef,
    rootProps: otherRootProps,
    ...restProps
  } = props;
  const rootProps = {
    iconChecked: <IconChecked />,
    inputRef: (ref) => {
      if (inputRef) {
        inputRef(ref);
      }
    },
    rootProps: {
      className,
      ...otherRootProps
    },
    type: 'radio',
    ...restProps // Note: Props are spread to input rather than Root
  };

  return <Root {...rootProps} />;
};

Radio.defaultProps = {
  labelPosition: 'end',
  size: 'large'
};
Radio.displayName = 'Radio';

export default Radio;
