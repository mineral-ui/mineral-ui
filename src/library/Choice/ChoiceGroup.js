/* @flow */
import React, { Children, cloneElement, createElement } from 'react';
import { createStyledComponent } from '../styles';

type Props = {
  /**
   * Value of the selected Radio or an array of values of the selected
   * Checkboxes. Primarily for use with controlled components. If this prop is
   * specified, an `onChange` handler must also be specified. See also:
   * `defaultChecked`.
   */
  checked?: string | Array<string>,
  /** Mineral Checkbox or Radio components */
  children?: React$Node,
  /** Data used to contruct Checkboxes, see [example](#data) */
  data?: Array<{ label: string | React$Element<*>, value: string }>,
  /**
   * Value of the selected Radio or an array of values of the selected
   * Checkboxes.  Primarily for use with uncontrolled components.
   */
  defaultChecked?: string | Array<string>,
  /** Display the choices inline horizontally rather than stacked vertically. */
  inline?: boolean,
  /**
   * The class of input to render. e.g. Checkbox or Radio
   */
  input?: React$ComponentType<*>,
  /**
   * @Private Indicates that the field is invalid. Not forwarded for checkboxes.
   */
  invalid?: boolean,
  /** The name of the group */
  name: string,
  /** Function called when a choice is selected */
  onChange?: (event: SyntheticEvent<>) => void,
  /**
   * @Private Indicates that the field is required. Not forwarded for checkboxes.
   */
  required?: boolean,
  /** The aria role for the group */
  role?: string,
  /** Props to be applied directly to the root element */
  rootProps?: Object,
  /** @Private Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** Type of component that will be rendered */
  type: 'checkbox' | 'radio'
};

export const componentTheme = (baseTheme: Object) => ({
  ChoiceGroupControl_marginHorizontal_inline: baseTheme.space_inline_xl,
  ChoiceGroupControl_marginVertical_stacked: baseTheme.space_stack_md,
  ChoiceGroupControl_marginVertical_stackedJumbo: baseTheme.space_stack_lg,

  ...baseTheme
});

const styles = {
  root: ({ inline, size, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      display: 'flex',
      flexDirection: inline ? 'row' : 'column',

      '& > *:not(:last-child)': {
        marginBottom: inline
          ? 0
          : size === 'jumbo'
            ? theme.ChoiceGroupControl_marginVertical_stackedJumbo
            : theme.ChoiceGroupControl_marginVertical_stacked,
        marginRight: inline
          ? theme.ChoiceGroupControl_marginHorizontal_inline
          : undefined
      }
    };
  }
};

const Root = createStyledComponent('div', styles.root, {
  displayName: 'ChoiceGroup',
  includeStyleReset: true
});

const isChecked = (checked: string | Array<string>, value) => {
  return Array.isArray(checked)
    ? checked.indexOf(value) !== -1
    : checked === value;
};

/**
 * ChoiceGroup allows users to construct a group
 * of [Radios](/components/radio) or [Checkboxes](/components/checkbox) and
 * provides a simpler API than working with Radio or Checkbox directly.
 */
const ChoiceGroup = (props: Props) => {
  const {
    checked,
    children,
    data,
    defaultChecked,
    inline,
    input,
    invalid,
    required,
    role,
    rootProps: otherRootProps,
    size,
    type,
    ...restProps
  } = props;
  const rootProps = {
    inline,
    role,
    size,
    ...otherRootProps
  };

  const inputProps = (value, index, inputData = {}) => {
    return {
      checked: checked !== undefined ? isChecked(checked, value) : undefined,
      defaultChecked:
        defaultChecked !== undefined
          ? isChecked(defaultChecked, value)
          : undefined,
      invalid: type === 'checkbox' ? undefined : invalid,
      key: index,
      required: type === 'checkbox' ? undefined : required,
      size,
      ...restProps, // Note: Props are spread to input rather than Root
      ...inputData
    };
  };

  let inputs = null;
  if (data && input) {
    inputs = data.map((inputData, index) => {
      return createElement(
        input,
        inputProps(inputData.value, index, inputData)
      );
    });
  } else if (children) {
    inputs = Children.map(children, (child, index) => {
      return cloneElement(child, inputProps(child.props.value, index));
    });
  }

  return <Root {...rootProps}>{inputs}</Root>;
};

ChoiceGroup.defaultProps = {
  role: 'group',
  size: 'large'
};

export default ChoiceGroup;
