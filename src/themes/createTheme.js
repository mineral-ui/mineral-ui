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
import color from '../colors';
import createColorRamp from './createColorRamp';
import fontSize_base from './fontSizeBase';
import pxToEm from '../styles/pxToEm';

type Colors =
  | 'blue'
  | 'dusk'
  | 'gray'
  | 'green'
  | 'indigo'
  | 'lime'
  | 'magenta'
  | 'orange'
  | 'purple'
  | 'red'
  | 'sky'
  | 'slate'
  | 'teal'
  | 'yellow';

const spacing_quarter = pxToEm(2);
const spacing_half = pxToEm(4);
const spacing_1x = pxToEm(8);
const spacing_2x = pxToEm(16);
const spacing_3x = pxToEm(24);
const spacing_4x = pxToEm(32);
const spacing_8x = pxToEm(64);

const grays = createColorRamp('gray', 'color_gray', color);

export default function createTheme(
  baseColor?: Colors = 'blue',
  overrides?: { [string]: any } = {}
): { [string]: any } {
  /* Theme key naming convention:
   *
   *   [property]_[target]_[variant]_[state]
   *
   * E.g., A key for the border-color on focused "success" buttons and inputs
   * would look like the following.
   *
   *   borderColor_success_focus
   *
   * Only [property] is required. Irrelevant parts are skipped.
   */

  const primaries = createColorRamp(baseColor, 'color_theme', color);

  // prettier-ignore
  return {
    backgroundColor_disabled: color.gray_20,
    backgroundColor_danger: color.red_60,
    backgroundColor_danger_muted: color.red_20,
    backgroundColor_danger_active: color.red_70,
    backgroundColor_danger_activeMuted: color.red_30,
    backgroundColor_danger_focus: color.red_60,
    backgroundColor_danger_hover: color.red_50,
    backgroundColor_success: color.green_80,
    backgroundColor_success_muted: color.green_20,
    backgroundColor_success_active: color.green_90,
    backgroundColor_success_activeMuted: color.green_30,
    backgroundColor_success_focus: color.green_80,
    backgroundColor_success_hover: color.green_70,
    backgroundColor_warning: color.orange_60,
    backgroundColor_warning_muted: color.orange_20,
    backgroundColor_warning_active: color.orange_70,
    backgroundColor_warning_activeMuted: color.orange_30,
    backgroundColor_warning_focus: color.orange_60,
    backgroundColor_warning_hover: color.orange_50,

    backgroundColor_input: color.white,

    backgroundColor_link_focus: color.gray_30,

    borderColor: color.gray_40,
    borderColor_active: primaries.color_theme_60,
    borderColor_focus: primaries.color_theme_60,
    borderColor_hover: primaries.color_theme_60,
    borderColor_danger: color.red_60,
    borderColor_danger_active: color.red_70,
    borderColor_danger_focus: color.red_70,
    borderColor_danger_hover: color.red_70,
    borderColor_danger_muted: color.red_40,
    borderColor_success: color.green_70,
    borderColor_success_active: color.green_80,
    borderColor_success_focus: color.green_80,
    borderColor_success_hover: color.green_80,
    borderColor_success_muted: color.green_40,
    borderColor_warning: color.orange_60,
    borderColor_warning_active: color.orange_70,
    borderColor_warning_focus: color.orange_70,
    borderColor_warning_hover: color.orange_70,
    borderColor_warning_muted: color.orange_40,

    borderRadius_1: pxToEm(3),

    color_black: color.black,

    color_caption: color.gray_80,

    ...grays,

    color_placeholder: color.gray_60,

    ...primaries,

    color_text: color.gray_100,
    color_text_disabled: color.gray_50,
    color_text_danger: color.red_60,
    color_text_danger_active: color.red_70,
    color_text_danger_focus: color.red_60,
    color_text_danger_hover: color.red_50,
    color_text_ondanger: color.white,
    color_text_primary: primaries.color_theme_60,
    color_text_primary_active: primaries.color_theme_70,
    color_text_primary_focus: primaries.color_theme_60,
    color_text_primary_hover: primaries.color_theme_50,
    color_text_onprimary: color.white,
    color_text_success: color.green_90,
    color_text_success_active: color.green_100,
    color_text_success_focus: color.green_90,
    color_text_success_hover: color.green_80,
    color_text_onsuccess: color.white,
    color_text_warning: color.orange_70,
    color_text_warning_active: color.orange_80,
    color_text_warning_focus: color.orange_70,
    color_text_warning_hover: color.orange_60,
    color_text_onwarning: color.white,

    color_white: color.white,

    direction: 'ltr',

    fontFamily: 'Open Sans',
    fontFamily_system: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontFamily_monospace: '"SF Mono", "Droid Sans Mono", "Source Code Pro", Monaco, Consolas, "Courier New", Courier, monospace',

    fontSize_base,
    fontSize_h1: pxToEm(34),
    fontSize_h2: pxToEm(28),
    fontSize_h3: pxToEm(22),
    fontSize_h4: pxToEm(18),
    fontSize_h5: pxToEm(14),
    fontSize_h6: pxToEm(14),
    fontSize_mouse: pxToEm(11),
    fontSize_prose: pxToEm(16),
    fontSize_ui: pxToEm(14),

    fontWeight_regular: 400,
    fontWeight_semiBold: 600,
    fontWeight_bold: 700,
    fontWeight_extraBold: 800,

    lineHeight: 1.25,
    lineHeight_prose: 1.5,

    shadow_1: '0 1px 2px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.2)',
    shadow_2: '0 2px 4px 0 rgba(0,0,0,0.2), 0 4px 8px 0 rgba(0,0,0,0.2)',
    shadow_3: '0 4px 8px 0 rgba(0,0,0,0.2), 0 8px 16px 0 rgba(0,0,0,0.2)',
    shadow_4: '0 8px 16px 0 rgba(0,0,0,0.2), 0 20px 16px -8px rgba(0,0,0,0.2)',
    shadow_5: '0 16px 24px 0 rgba(0,0,0,0.2), 0 32px 24px -16px rgba(0,0,0,0.2)',

    size_small: pxToEm(24),
    size_medium: pxToEm(32),
    size_large: pxToEm(40),
    size_jumbo: pxToEm(52),

    space_inline_xxs: spacing_quarter,
    space_inline_xs: spacing_half,
    space_inline_sm: spacing_1x,
    space_inline_md: spacing_2x,
    space_inline_lg: spacing_3x,
    space_inline_xl: spacing_4x,
    space_inline_xxl: spacing_8x,

    space_inset_sm: spacing_1x,
    space_inset_md: spacing_2x,
    space_inset_lg: spacing_3x,

    space_stack_xxs: spacing_quarter,
    space_stack_xs: spacing_half,
    space_stack_sm: spacing_1x,
    space_stack_md: spacing_2x,
    space_stack_lg: spacing_3x,
    space_stack_xl: spacing_4x,
    space_stack_xxl: spacing_8x,

    zIndex_100: 100,
    zIndex_200: 200,
    zIndex_400: 400,
    zIndex_800: 800,
    zIndex_1600: 1600,

    ...overrides
  };
}
