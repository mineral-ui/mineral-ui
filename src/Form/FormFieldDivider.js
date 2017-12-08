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

type Props = Object;

export const componentTheme = (baseTheme: Object) => ({
  FormFieldDivider_borderColor: baseTheme.borderColor,
  FormFieldDivider_borderWidth: '1px',
  FormFieldDivider_margin: baseTheme.space_stack_sm,

  ...baseTheme
});

const Root = createStyledComponent(
  'div',
  ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      backgroundColor: theme.FormFieldDivider_borderColor,
      height: theme.FormFieldDivider_borderWidth,
      margin: `${theme.FormFieldDivider_margin} 0`
    };
  },
  {
    displayName: 'FormFieldDivider'
  }
);

/**
 * FormFieldDivider separates [FormFields](../form-field) to group form inputs.
 *
 * FormFieldDividers help your users grok forms with several inputs by hinting
 * at related fields, without explicitly adding a legend. Too many dividers will
 * add unnecessary weight to your form.
 */
export default function FormFieldDivider(props: Props) {
  return <Root {...props} role="separator" />;
}
