/* @flow */

import type {
  FormFieldThemeFn,
  FormFieldDividerThemeFn,
  FormFieldsetThemeFn
} from './types';

// [1] This deviates from h6 because it must look right when used both within
//     and without a FormFieldset
export const formFieldTheme: FormFieldThemeFn = (baseTheme) => ({
  FormFieldCaption_color: baseTheme.color_mouse,
  FormFieldCaption_fontSize: baseTheme.fontSize_mouse,
  FormFieldCaption_marginTop: baseTheme.space_stack_xxs,
  FormFieldCaption_marginTop_isGroup: baseTheme.space_stack_sm,

  FormFieldLabel_color: baseTheme.h6_color,
  FormFieldLabel_fontSize: baseTheme.h6_fontSize,
  FormFieldLabel_fontWeight: baseTheme.fontWeight_semiBold, // [1]
  FormFieldLabel_marginBottom: baseTheme.space_stack_sm,

  FormFieldSecondaryText_fontSize: baseTheme.fontSize_mouse,
  FormFieldSecondaryText_color: baseTheme.color_mouse,
  FormFieldSecondaryText_color_required: baseTheme.color_required,
  FormFieldSecondaryText_fontWeight: baseTheme.fontWeight_regular,

  ...baseTheme
});

export const formFieldDividerTheme: FormFieldDividerThemeFn = (baseTheme) => ({
  FormFieldDivider_borderColor: baseTheme.borderColor,
  FormFieldDivider_borderWidth: '1px',
  FormFieldDivider_margin: baseTheme.space_stack_sm,

  ...baseTheme
});

export const formFieldsetTheme: FormFieldsetThemeFn = (baseTheme) => ({
  FormFieldset_borderColor: baseTheme.borderColor,

  FormFieldsetLegend_color: baseTheme.h5_color,
  FormFieldsetLegend_fontSize: baseTheme.h5_fontSize,
  FormFieldsetLegend_fontWeight: baseTheme.h5_fontWeight,

  ...baseTheme
});
