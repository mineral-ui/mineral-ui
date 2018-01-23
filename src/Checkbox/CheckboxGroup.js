/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
  /** Mineral [Checkbox](../checkbox) components */
  children?: React$Node,
  /** Data used to contruct [Checkboxes](../checkbox), see [example](#data) */
  data?: Array<{ label: string | React$Element<*>, value: string }>,
  /**
   * Array of values of the selected [Checkboxes](../checkbox); primarily for
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
 * [Checkboxes](../checkbox) and provides a simpler API than working with
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
