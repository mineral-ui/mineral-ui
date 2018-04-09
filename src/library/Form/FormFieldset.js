/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';

type Props = {
  /** Rendered content of the component, most likely [FormField](/components/form-field) */
  children?: React$Node,
  /** Disable (visually) the fieldset */
  disabled?: boolean,
  /** Title of the fieldset */
  legend?: string | React$Element<*>
};

export const componentTheme = (baseTheme: Object) => ({
  FormFieldset_borderColor: baseTheme.borderColor,

  FormFieldsetLegend_color: baseTheme.h5_color,
  FormFieldsetLegend_fontSize: baseTheme.h5_fontSize,
  FormFieldsetLegend_fontWeight: baseTheme.h5_fontWeight,

  ...baseTheme
});

const Root = createStyledComponent(
  'fieldset',
  ({ disabled, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      border: '1px solid transparent',
      borderTopColor: theme.FormFieldset_borderColor,
      padding: 0,

      '& > legend': {
        color: disabled ? theme.color_disabled : theme.FormFieldsetLegend_color,
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
 * FormFieldsets group related [FormFields](/components/form-field) and provide a legend.
 * Grouping FormFields provides contextual clues to users and enhances
 * accessibility.
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
