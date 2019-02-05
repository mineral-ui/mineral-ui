/* @flow */
import { pxToEm } from '../styles';

import type { ChoiceThemeFn, ChoiceGroupThemeFn } from './types';

export const choiceTheme: ChoiceThemeFn = (baseTheme) => {
  const colors = {
    background: baseTheme.input_backgroundColor,
    regular: baseTheme.borderColor,
    checked: baseTheme.borderColor_theme,
    focus: baseTheme.borderColor_theme_focus,
    hover: baseTheme.borderColor_theme_hover
  };

  // prettier-ignore
  return {
    ChoiceControl_backgroundColor: colors.background,
    ChoiceControl_backgroundColor_checked: colors.checked,
    ChoiceControl_backgroundColor_checkedHover: colors.hover,
    ChoiceControl_borderColor: colors.regular,
    ChoiceControl_borderColor_hover: colors.hover,
    ChoiceControl_borderColor_checked: colors.checked,
    ChoiceControl_borderColor_checkedHover: colors.hover,
    ChoiceControl_borderRadius: baseTheme.borderRadius_1,
    ChoiceControl_boxShadow_focus: `0 0 0 1px ${baseTheme.boxShadow_focusInner}, 0 0 0 2px ${colors.focus}`,
    ChoiceControl_size: pxToEm(16),
    ChoiceControl_size_jumbo: pxToEm(24),

    ChoiceText_color: baseTheme.color,
    ChoiceText_fontSize: baseTheme.fontSize_ui,
    ChoiceText_fontSize_small: pxToEm(12),
    ChoiceText_marginHorizontal: baseTheme.space_inline_md,

    ...baseTheme
  };
};

export const choiceGroupTheme: ChoiceGroupThemeFn = (baseTheme) => ({
  ChoiceGroupControl_marginHorizontal_inline: baseTheme.space_inline_xl,
  ChoiceGroupControl_marginVertical_stacked: baseTheme.space_stack_md,
  ChoiceGroupControl_marginVertical_stackedJumbo: baseTheme.space_stack_lg,

  ...baseTheme
});
