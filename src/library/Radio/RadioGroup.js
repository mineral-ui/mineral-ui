/* @flow */
import React from 'react';
import { createThemedComponent, mapComponentThemes } from '../themes';
import ChoiceGroup, {
  componentTheme as choiceGroupComponentTheme
} from '../Choice/ChoiceGroup';
import Radio from './Radio';

type Props = {
  /**
   * Value of the selected [Radio](/components/radio); primarily for use with controlled
   * components. If this prop is specified, an `onChange` handler must also be
   * specified. See also: `defaultChecked`.
   */
  checked?: string,
  /** Mineral [Radio](/components/radio) components */
  children?: React$Node,
  /** Data used to contruct [Radio](/components/radio), see [example](#data) */
  data?: Array<{ label: string | React$Element<*>, value: string }>,
  /**
   * Value of the selected [Radio](/components/radio); primarily for use with
   * uncontrolled components.
   */
  defaultChecked?: string,
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
        name: 'RadioGroup',
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
        name: 'RadioGroup',
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
 * RadioGroup allows authors to construct a group of [Radios](/components/radio)
 * and provides a simpler API than working with Radio directly.
 *
 * RadioGroup allows users to select a single option from a list.
 */
export default function RadioGroup({
  rootProps: otherRootProps,
  ...restProps
}: Props) {
  const rootProps = {
    rootProps: {
      role: 'radiogroup',
      ...otherRootProps
    },
    input: Radio,
    type: 'radio',
    ...restProps // Note: Props are spread to input rather than Root
  };

  return <Root {...rootProps} />;
}

RadioGroup.displayName = 'RadioGroup';
