/* @flow */
import { pxToEm } from '../styles';

import type { FauxControlThemeFn } from './types';

// prettier-ignore
export const fauxControlTheme: FauxControlThemeFn = (baseTheme) => ({
  FauxControl_backgroundColor: baseTheme.input_backgroundColor,
  FauxControl_borderColor: baseTheme.borderColor,
  FauxControl_borderColor_active: baseTheme.borderColor,
  FauxControl_borderColor_focus: baseTheme.borderColor,
  FauxControl_borderColor_hover: baseTheme.borderColor_theme_hover,
  FauxControl_borderRadius: baseTheme.borderRadius_1,
  FauxControl_borderWidth: '1px',
  FauxControl_boxShadow_active: `0 0 0 1px ${baseTheme.boxShadow_focusInner}, 0 0 0 2px ${baseTheme.borderColor_theme_active}`,
  FauxControl_boxShadow_focus: `0 0 0 1px ${baseTheme.boxShadow_focusInner}, 0 0 0 2px ${baseTheme.borderColor_theme_focus}`,
  FauxControl_color: baseTheme.color,
  FauxControl_color_placeholder: baseTheme.input_color_placeholder,
  FauxControl_color_readOnly: baseTheme.color_readOnly,
  FauxControl_fontSize: baseTheme.fontSize_ui,
  FauxControl_fontSize_small: pxToEm(12),
  FauxControl_paddingHorizontal: baseTheme.space_inset_md,
  FauxControl_paddingHorizontal_small: baseTheme.space_inset_sm,

  FauxControlIcon_marginHorizontal: baseTheme.space_inline_sm,

  ...baseTheme
});
