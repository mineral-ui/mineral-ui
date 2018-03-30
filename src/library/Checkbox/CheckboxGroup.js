/* @flow */
import React from 'react';
import { createThemedComponent, mapComponentThemes } from '../themes';
import ChoiceGroup, {
  componentTheme as choiceGroupComponentTheme
} from '../Choice/ChoiceGroup';
import Checkbox from './Checkbox';

type Props = {
  /**
   * Array of values of the selected Checkboxes; primarily for use with
   * controlled components. If this prop is specified, an `onChange` handler
   * must also be specified. See also: `defaultChecked`.
   */
  checked?: Array<string>,
  /** Mineral [Checkbox](/components/checkbox) components */
  children?: React$Node,
  /** Data used to contruct [Checkboxes](/components/checkbox), see [example](#data) */
  data?: Array<{ label: string | React$Element<*>, value: string }>,
  /**
   * Array of values of the selected [Checkboxes](/components/checkbox); primarily for
   * use with uncontrolled components.
   */
  defaultChecked?: Array<string>,
  /** Display the choices inline horizontally rather than stacked vertically. */
  inline?: boolean,
  /** The name of the group */
  name: string,
  /** Function called when a choice is selected */
  onChange?: (event: SyntheticEvent<>) => void,
  /** Props to be applied directly to the root element */
  rootProps?: Object
};

export const componentTheme = (baseTheme: Object) => {
  return {
    ...mapComponentThemes(
      {
        name: 'ChoiceGroup',
        theme: choiceGroupComponentTheme(baseTheme)
      },
      {
        name: 'CheckboxGroup',
        theme: {}
      },
      baseTheme
    )
  };
};

const Root = createThemedComponent(ChoiceGroup, ({ theme: baseTheme }) => {
  return {
    ...mapComponentThemes(
      {
        name: 'CheckboxGroup',
        theme: componentTheme(baseTheme)
      },
      {
        name: 'ChoiceGroup',
        theme: {}
      },
      baseTheme
    )
  };
});

/**
 * CheckboxGroup allows authors to construct a group of
 * [Checkboxes](/components/checkbox) and provides a simpler API than working with
 * Checkbox directly.
 *
 * CheckboxGroup allows users to select multiple options from a list.
 */
export default function CheckboxGroup({
  rootProps: otherRootProps,
  ...restProps
}: Props) {
  const rootProps = {
    rootProps: {
      ...otherRootProps
    },
    input: Checkbox,
    type: 'checkbox',
    ...restProps // Note: Props are spread to input rather than Root
  };

  return <Root {...rootProps} />;
}

CheckboxGroup.displayName = 'CheckboxGroup';
