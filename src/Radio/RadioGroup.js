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
import React, { Children, cloneElement, createElement } from 'react';
import { createStyledComponent } from '../styles';
import Radio from './Radio';

type Props = {
  /**
   * Checked state of the radio button. Primarily for use with controlled
   * components. If this prop is specified, an `onChange` handler must also be
   * specified. See also: `defaultChecked`.
   */
  checked?: string,
  /** Mineral Radio components */
  children?: React$Node,
  /** Data used to contruct Radios, see [example](#data) */
  data?: Array<{ label: string | React$Element<*>, value: string }>,
  /**
   * Value of the selected Radio; primarily for use with uncontrolled
   * components
   */
  defaultChecked?: string,
  /** Display the choices inline horizontally rather than stacked vertically */
  inline?: boolean,
  /**
   * The name of the radio group; used to uniquely define a group of radio
   * buttons
   */
  name: string,
  /** Function called when a radio button is selected */
  onChange?: (event: SyntheticEvent<>) => void,
  /** Props to be applied directly to the root element */
  rootProps?: Object,
  /** @Private Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo'
};

export const componentTheme = (baseTheme: Object) => ({
  RadioGroup_marginHorizontal_inline: baseTheme.space_inline_xl,
  RadioGroup_marginVertical: baseTheme.space_stack_md,
  RadioGroup_marginVertical_jumbo: baseTheme.space_stack_lg,

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
            ? theme.RadioGroup_marginVertical_jumbo
            : theme.RadioGroup_marginVertical,
        marginRight: inline
          ? theme.RadioGroup_marginHorizontal_inline
          : undefined
      }
    };
  }
};

const Root = createStyledComponent('div', styles.root, {
  displayName: 'RadioGroup',
  includeStyleReset: true
});

/**
 * RadioGroup allows users to select a single option from a set and provides a
 * simpler API than working with [Radios](../radio) directly.
 */
export default function RadioGroup({
  checked,
  children,
  data,
  defaultChecked,
  inline,
  name,
  onChange,
  rootProps: otherRootProps,
  size = 'large',
  ...restProps
}: Props) {
  const rootProps = {
    inline,
    role: 'radiogroup',
    size,
    ...otherRootProps
  };

  const inputProps = {
    name,
    onChange,
    size,
    ...restProps // Note: Props are spread to input rather than Root
  };

  let inputs = null;
  if (data) {
    inputs = data.map((inputData, index) => {
      return createElement(Radio, {
        checked: checked ? checked === inputData.value : undefined,
        defaultChecked: defaultChecked
          ? defaultChecked === inputData.value
          : undefined,
        key: index,
        ...inputProps,
        ...inputData
      });
    });
  } else if (children) {
    inputs = Children.map(children, (child, index) => {
      return cloneElement(child, {
        checked: checked ? checked === child.props.value : undefined,
        defaultChecked: defaultChecked
          ? defaultChecked === child.props.value
          : undefined,
        key: index,
        ...inputProps
      });
    });
  }

  return <Root {...rootProps}>{inputs}</Root>;
}
