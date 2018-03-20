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
 * FormFieldDivider separates [FormFields](/components/form-field) to group form inputs.
 *
 * FormFieldDividers help your users grok forms with several inputs by hinting
 * at related fields, without explicitly adding a legend.
 */
export default function FormFieldDivider(props: Props) {
  return <Root {...props} role="separator" />;
}
