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
import { default as shared, color } from './styleVariables';

export default {
  ...shared,

  color_background_disabled: color.gray_30,
  color_background_danger: color.red_60,
  color_background_hover_danger: color.red_50,
  color_background_active_danger: color.red_40,
  color_background_success: color.green_70,
  color_background_hover_success: color.green_60,
  color_background_active_success: color.green_50,
  color_background_warning: color.ochre_60,
  color_background_hover_warning: color.ochre_50,
  color_background_active_warning: color.ochre_40,
  color_background_primary: color.blue_50,
  color_background_hover_primary: color.blue_40,
  color_background_active_primary: color.blue_30,

  color_border: color.gray_50,
  color_border_danger: color.red_80,
  color_border_warning: color.ochre_70,
  color_border_focus_danger: color.red_100,
  color_border_focus_success: color.green_100,
  color_border_focus_warning: color.ochre_100,
  color_border_active: color.blue_50,
  color_border_hover: color.blue_60,
  color_border_focus: color.blue_80,
  color_border_focus_primary: color.blue_100,

  color_helpText_danger: color.red_80,
  color_helpText_warning: color.ochre_90,

  color_icon: color.gray_60,

  color_inputBackground_danger: color.red_10,
  color_inputBackground_warning: color.ochre_10,

  color_linkBackground_focus: color.gray_30,

  color_placeholder: color.gray_60,

  color_text: color.gray_100,
  color_text_caption: color.gray_80,
  color_text_disabled: color.gray_50,
  color_text_primary: color.blue_60,
  color_text_onPrimary: 'white',

  color_heading: color.blue_80,

  color_link: color.blue_90,
  color_link_hover: color.blue_70,
  color_link_focus: color.blue_100,

  color_theme_10: color.blue_10,
  color_theme_20: color.blue_20,
  color_theme_30: color.blue_30,
  color_theme_40: color.blue_40,
  color_theme_50: color.blue_50,
  color_theme_60: color.blue_60,
  color_theme_70: color.blue_70,
  color_theme_80: color.blue_80,
  color_theme_90: color.blue_90,
  color_theme_100: color.blue_100,

  color_gray_10: color.gray_10,
  color_gray_20: color.gray_20,
  color_gray_30: color.gray_30,
  color_gray_40: color.gray_40,
  color_gray_50: color.gray_50,
  color_gray_60: color.gray_60,
  color_gray_70: color.gray_70,
  color_gray_80: color.gray_80,
  color_gray_90: color.gray_90,
  color_gray_100: color.gray_100
};
