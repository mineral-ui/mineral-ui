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
  ({ disabled, theme: baseTheme }) => {
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
 * FormFieldsets group related [FormFields](../form-field) and provide a legend.
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
