/* @flow */
import type {
  PopoverThemeFn,
  PopoverArrowThemeFn,
  PopoverContentThemeFn
} from './types';

export const popoverTheme: PopoverThemeFn = (baseTheme) => ({
  ...popoverArrowTheme(baseTheme),
  ...popoverContentTheme(baseTheme),
  ...baseTheme
});

export const popoverArrowTheme: PopoverArrowThemeFn = (baseTheme) => ({
  PopoverArrow_backgroundColor: baseTheme.panel_backgroundColor,
  PopoverArrow_borderColor: baseTheme.panel_borderColor,
  ...baseTheme
});

export const popoverContentTheme: PopoverContentThemeFn = (baseTheme) => ({
  PopoverContent_backgroundColor: baseTheme.panel_backgroundColor,
  PopoverContent_borderColor: baseTheme.panel_borderColor,
  PopoverContent_borderRadius: baseTheme.borderRadius_1,
  PopoverContent_boxShadow: baseTheme.boxShadow_2,
  PopoverContent_color: baseTheme.color,
  PopoverContent_paddingVertical: baseTheme.space_inset_sm,
  PopoverContent_maxWidth: 'none',
  PopoverContent_zIndex: baseTheme.zIndex_100,

  PopoverContentBlock_marginVertical: baseTheme.space_stack_sm,
  PopoverContentBlock_paddingHorizontal: baseTheme.space_inset_md,

  ...baseTheme
});
