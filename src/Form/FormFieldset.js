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
import { createStyledComponent } from '../styles';

type Props = {
  /** Rendered content of the component, most likely [FormField](../form-field) */
  children?: React$Node,
  /** Disable (visually) the fieldset */
  disabled?: boolean,
  /** Title of the fieldset */
  legend?: string | React$Element<*>
};

export const componentTheme = (baseTheme: Object) => ({
  FormFieldset_borderColor: baseTheme.borderColor,

  FormFieldsetLegend_color_text: baseTheme.color_text,
  FormFieldsetLegend_fontSize: baseTheme.fontSize_ui,
  FormFieldsetLegend_fontWeight: baseTheme.fontWeight_bold,

  ...baseTheme
});

const Root = createStyledComponent(
  'fieldset',
  props => {
    const { disabled, theme: baseTheme } = props;
    const theme = componentTheme(baseTheme);

    return {
      border: '1px solid transparent',
      borderTopColor: theme.FormFieldset_borderColor,
      padding: 0,

      '& > legend': {
        color: disabled
          ? theme.color_text_disabled
          : theme.FormFieldsetLegend_color_text,
        fontSize: theme.FormFieldsetLegend_fontSize,
        fontWeight: theme.FormFieldsetLegend_fontWeight,
        lineHeight: theme.size_medium,
        padding: 0,
        paddingLeft: theme.direction === 'rtl' ? theme.space_inline_sm : null,
        paddingRight: theme.direction === 'ltr' ? theme.space_inline_sm : null
      }
    };
  },
  {
    displayName: 'FormFieldset',
    includeStyleReset: true,
    rootEl: 'fieldset'
  }
);

/**
 * FormFieldset wraps related [FormFields](../form-field) and provides a legend.
 */
export default function FormFieldset({
  children,
  legend,
  ...restProps
}: Props) {
  return (
    <Root {...restProps}>
      {legend && <legend>{legend}</legend>}
      {children}
    </Root>
  );
}
