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
import color from '../../../../../utils/color';
import styleVariables from '../../../../../utils/styleVariables';

const themeColor = 'magenta';

function createColorRamp(color: {}, key: string, name: string) {
  const ramp = {};

  for (let i = 10; i <= 100; i += 10) {
    ramp[`color_${name}_${i}`] = color[`${key}_${i}`];
  }

  return ramp;
}

const primaries = createColorRamp(color, themeColor, 'theme');
const grays = createColorRamp(color, 'gray', 'gray');

export default {
  /* Naming convention:
   *
   * property_target_variant_state
   *
   * E.g., to define a variable for the border-color on focused "success" buttons and inputs:
   *
   * borderColor_success_focus
   *
   * Only 'type' is required. Irrelevant parts are simply skipped.
   */

  ...styleVariables,
  ...primaries,
  ...grays,

  color_black: color.black,
  color_white: color.white,

  backgroundColor_disabled: color.gray_20,
  backgroundColor_danger: color.red_60,
  backgroundColor_danger_active: color.red_70,
  backgroundColor_danger_activeMuted: color.red_30,
  backgroundColor_danger_focus: color.red_60,
  backgroundColor_danger_hover: color.red_50,
  backgroundColor_success: color.green_80,
  backgroundColor_success_active: color.green_90,
  backgroundColor_success_activeMuted: color.green_30,
  backgroundColor_success_focus: color.green_80,
  backgroundColor_success_hover: color.green_70,
  backgroundColor_warning: color.orange_60,
  backgroundColor_warning_active: color.orange_70,
  backgroundColor_warning_activeMuted: color.orange_30,
  backgroundColor_warning_focus: color.orange_60,
  backgroundColor_warning_hover: color.orange_50,

  backgroundColor_input_danger: color.red_10,
  backgroundColor_input_success: color.green_10,
  backgroundColor_input_warning: color.yellow_10,

  backgroundColor_link_focus: color.gray_30,

  borderColor: color.gray_40,
  borderColor_active: primaries.color_theme_50,
  borderColor_focus: primaries.color_theme_80,
  borderColor_hover: primaries.color_theme_60,
  borderColor_danger: color.red_80,
  borderColor_danger_active: color.red_100,
  borderColor_danger_focus: color.red_70,
  borderColor_danger_hover: color.red_60,
  borderColor_success: color.green_80,
  borderColor_success_active: color.green_100,
  borderColor_success_focus: color.green_90,
  borderColor_success_hover: color.green_60,
  borderColor_warning: color.yellow_70,
  borderColor_warning_active: color.yellow_100,
  borderColor_warning_focus: color.orange_70,
  borderColor_warning_hover: color.yellow_60,

  color_caption: color.gray_80,

  color_placeholder: color.gray_60,

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
  color_text_onwarning: color.white
};
