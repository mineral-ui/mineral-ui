/* @flow */
import color from '../colors';
import createColorRamp from './createColorRamp';
import fontSize_base from './fontSizeBase';
import pxToEm from '../styles/pxToEm';

type Ramp = { [string]: string };

type Tokens = Array<{ [string]: Values | ((Ramp) => Values) }>;

type Values = { [string]: number | string };

const spacing_quarter = pxToEm(2);
const spacing_half = pxToEm(4);
const spacing_1x = pxToEm(8);
const spacing_2x = pxToEm(16);
const spacing_3x = pxToEm(24);
const spacing_4x = pxToEm(32);
const spacing_8x = pxToEm(64);

const grayRamp = createColorRamp('gray', 'color_gray', color);

/* Theme key naming convention:
 *
 *   [target]_[property]_[variation]_[state]
 *
 * E.g., A key for the background color on disabled inputs with a 'success'
 * variant would look like:
 *
 *   input_backgroundColor_success_disabled
 *
 * Only [property] is required. Irrelevant parts are skipped.
 */

// prettier-ignore
const tokens: Tokens = [
  {
    generics: (themeRamp: Ramp) => ({
      backgroundColor_active: color.gray_20,
      backgroundColor_disabled: color.gray_30,
      backgroundColor_focus: color.gray_10,
      backgroundColor_hover: color.gray_10,
      backgroundColor_danger_active: color.red_20,
      backgroundColor_danger_focus: color.red_10,
      backgroundColor_danger_hover: color.red_10,
      backgroundColor_dangerPrimary: color.red_60,
      backgroundColor_dangerPrimary_active: color.red_70,
      backgroundColor_dangerPrimary_focus: color.red_60,
      backgroundColor_dangerPrimary_hover: color.red_50,
      backgroundColor_success_active: color.green_20,
      backgroundColor_success_focus: color.green_10,
      backgroundColor_success_hover: color.green_10,
      backgroundColor_successPrimary: color.green_60,
      backgroundColor_successPrimary_active: color.green_70,
      backgroundColor_successPrimary_focus: color.green_60,
      backgroundColor_successPrimary_hover: color.green_50,
      backgroundColor_theme_selected: themeRamp.color_theme_10,
      backgroundColor_theme_selectedActive: themeRamp.color_theme_30,
      backgroundColor_theme_selectedHover: themeRamp.color_theme_20,
      backgroundColor_themePrimary: themeRamp.color_theme_60,
      backgroundColor_themePrimary_active: themeRamp.color_theme_70,
      backgroundColor_themePrimary_focus: themeRamp.color_theme_60,
      backgroundColor_themePrimary_hover: themeRamp.color_theme_50,
      backgroundColor_warning_active: color.bronze_20,
      backgroundColor_warning_focus: color.bronze_10,
      backgroundColor_warning_hover: color.bronze_10,
      backgroundColor_warningPrimary: color.bronze_60,
      backgroundColor_warningPrimary_active: color.bronze_70,
      backgroundColor_warningPrimary_focus: color.bronze_60,
      backgroundColor_warningPrimary_hover: color.bronze_50,

      borderColor: color.gray_40,
      borderColor_theme: themeRamp.color_theme_60,
      borderColor_theme_active: themeRamp.color_theme_70,
      borderColor_theme_focus: themeRamp.color_theme_70,
      borderColor_theme_hover: themeRamp.color_theme_50,
      borderColor_danger: color.red_60,
      borderColor_danger_active: color.red_70,
      borderColor_danger_focus: color.red_70,
      borderColor_danger_hover: color.red_50,
      borderColor_success: color.green_60,
      borderColor_success_active: color.green_70,
      borderColor_success_focus: color.green_70,
      borderColor_success_hover: color.green_50,
      borderColor_warning: color.bronze_60,
      borderColor_warning_active: color.bronze_70,
      borderColor_warning_focus: color.bronze_70,
      borderColor_warning_hover: color.bronze_50,

      boxShadow_1: '0 1px 2px 0 rgba(0,0,0,0.2), 0 2px 4px 0 rgba(0,0,0,0.2)',
      boxShadow_2: '0 2px 4px 0 rgba(0,0,0,0.2), 0 4px 8px 0 rgba(0,0,0,0.2)',
      boxShadow_3: '0 4px 8px 0 rgba(0,0,0,0.2), 0 8px 16px 0 rgba(0,0,0,0.2)',
      boxShadow_4: '0 8px 16px 0 rgba(0,0,0,0.2), 0 20px 16px -8px rgba(0,0,0,0.2)',
      boxShadow_5: '0 16px 24px 0 rgba(0,0,0,0.2), 0 32px 24px -16px rgba(0,0,0,0.2)',
      boxShadow_focusInner: color.white,

      borderRadius_1: pxToEm(3),

      breakpoint_narrow: 512,
      breakpoint_medium: 768,
      breakpoint_wide: 1024,

      color: color.gray_100,
      color_inverted: color.white,
      color_disabled: color.gray_50,
      color_danger: color.red_60,
      color_danger_active: color.red_70,
      color_danger_focus: color.red_60,
      color_danger_hover: color.red_50,
      color_mouse: color.gray_80,
      color_primary: color.white,
      color_readOnly: color.gray_80,
      color_required: color.red_60,
      color_success: color.green_60,
      color_success_active: color.green_70,
      color_success_focus: color.green_60,
      color_success_hover: color.green_50,
      color_theme: themeRamp.color_theme_60,
      color_theme_active: themeRamp.color_theme_70,
      color_theme_focus: themeRamp.color_theme_60,
      color_theme_hover: themeRamp.color_theme_50,
      color_warning: color.bronze_60,
      color_warning_active: color.bronze_70,
      color_warning_focus: color.bronze_60,
      color_warning_hover: color.bronze_50,

      direction: 'ltr',

      fontFamily: 'Open Sans',
      fontFamily_system: '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontFamily_monospace: '"SF Mono", "Droid Sans Mono", "Source Code Pro", Monaco, Consolas, "Courier New", Courier, monospace',

      fontSize_base,
      fontSize_mouse: pxToEm(11),
      fontSize_prose: pxToEm(16),
      fontSize_ui: pxToEm(14),

      fontWeight_regular: 400,
      fontWeight_semiBold: 600,
      fontWeight_bold: 700,
      fontWeight_extraBold: 800,

      lineHeight: 1.25,
      lineHeight_heading: 1.25,
      lineHeight_heading_small: 1.5,
      lineHeight_prose: 1.5,

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
      zIndex_1600: 1600
    })
  },
  {
    Headings: {
      h1_color: color.gray_100,
      h1_fontSize: pxToEm(34),
      h1_fontWeight: 800,

      h2_color: color.gray_80,
      h2_fontSize: pxToEm(28),
      h2_fontWeight: 700,

      h3_color: color.gray_80,
      h3_fontSize: pxToEm(22),
      h3_fontWeight: 700,

      h4_color: color.gray_80,
      h4_fontSize: pxToEm(18),
      h4_fontWeight: 700,

      h5_color: color.gray_100,
      h5_fontSize: pxToEm(14),
      h5_fontWeight: 700,

      h6_color: color.gray_80,
      h6_fontSize: pxToEm(14),
      h6_fontWeight: 400
    }
  },
  {
    Icons: (themeRamp: Ramp) => ({
      icon_color: color.gray_80,
      icon_color_danger: color.red_60,
      icon_color_success: color.green_60,
      icon_color_theme: themeRamp.color_theme_60,
      icon_color_warning: color.bronze_60
    })
  },
  {
    Inputs: {
      input_backgroundColor: color.white,
      input_backgroundColor_disabled: color.gray_20
    }
  },
  {
    Panels: {
      panel_backgroundColor: color.white,
      panel_backgroundColor_inverted: color.gray_90,
      panel_borderColor: color.gray_20,
      panel_borderColor_inverted: color.gray_90
    }
  },
  {
    Placeholder: { placeholder_color: color.gray_60 }
  },
  {
    Wells: {
      well_backgroundColor: color.gray_20,
      well_backgroundColor_danger: color.red_20,
      well_backgroundColor_success: color.green_20,
      well_backgroundColor_warning: color.bronze_20,
      well_borderColor_danger: color.red_40,
      well_borderColor_success: color.green_40,
      well_borderColor_warning: color.bronze_40
    }
  },
  {
    Colors: (themeRamp: Ramp) => ({
      ...themeRamp,
      color_white: color.white,
      ...grayRamp,
      color_black: color.black
    })
  }
];

export default tokens;
