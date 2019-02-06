/* @flow */
import type { TextThemeFn } from './types';

export const textTheme: TextThemeFn = (baseTheme) => ({
  Text_color: baseTheme.color,
  Text_color_h1: baseTheme.h1_color,
  Text_color_h2: baseTheme.h2_color,
  Text_color_h3: baseTheme.h3_color,
  Text_color_h4: baseTheme.h4_color,
  Text_color_h5: baseTheme.h5_color,
  Text_color_h6: baseTheme.h6_color,
  Text_color_mouse: baseTheme.color_mouse,
  Text_fontSize: baseTheme.fontSize_ui,
  Text_fontSize_h1: baseTheme.h1_fontSize,
  Text_fontSize_h2: baseTheme.h2_fontSize,
  Text_fontSize_h3: baseTheme.h3_fontSize,
  Text_fontSize_h4: baseTheme.h4_fontSize,
  Text_fontSize_h5: baseTheme.h5_fontSize,
  Text_fontSize_h6: baseTheme.h6_fontSize,
  Text_fontSize_mouse: baseTheme.fontSize_mouse,
  Text_fontSize_prose: baseTheme.fontSize_prose,
  Text_fontWeight_h1: baseTheme.h1_fontWeight,
  Text_fontWeight_h2: baseTheme.h2_fontWeight,
  Text_fontWeight_h3: baseTheme.h3_fontWeight,
  Text_fontWeight_h4: baseTheme.h4_fontWeight,
  Text_fontWeight_h5: baseTheme.h5_fontWeight,
  Text_fontWeight_h6: baseTheme.h6_fontWeight,
  Text_lineHeight: baseTheme.lineHeight_prose,
  Text_lineHeight_heading: baseTheme.lineHeight_heading,
  Text_lineHeight_headingSmall: baseTheme.lineHeight_headingSmall,
  Text_marginBottom: baseTheme.space_stack_md,
  Text_marginBottom_heading: baseTheme.space_stack_sm,

  ...baseTheme
});
