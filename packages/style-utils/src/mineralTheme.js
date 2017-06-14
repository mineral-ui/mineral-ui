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

const themeColor = 'blue';

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
  ...shared,
  ...primaries,
  ...grays,

  /* Naming convention:
   *
   * type_target_variant_state
   *
   * E.g., to define a variable for the border-color on focused "success" buttons and inputs:
   *
   * color_border_success_focus
   *
   * Only 'type' is required. Irrelevant parts are simply skipped.
   */

  color_background_disabled: color.gray_30,

  color_background_danger: color.red_60,
  color_background_danger_active: color.red_40,
  color_background_danger_focus: color.red_60,
  color_background_danger_hover: color.red_50,

  color_background_success: color.green_70,
  color_background_success_active: color.green_50,
  color_background_success_focus: color.green_70,
  color_background_success_hover: color.green_60,

  color_background_warning: color.ochre_60,
  color_background_warning_active: color.ochre_40,
  color_background_warning_focus: color.ochre_60,
  color_background_warning_hover: color.ochre_50,

  // -----

  color_border: color.gray_50,
  color_border_active: primaries.color_theme_50,
  color_border_focus: primaries.color_theme_80,
  color_border_hover: primaries.color_theme_60,

  color_border_danger: color.red_80,
  color_border_danger_active: color.red_100,
  color_border_danger_focus: color.red_100,
  color_border_danger_hover: color.red_60,

  color_border_success: color.green_80,
  color_border_success_active: color.green_100,
  color_border_success_focus: color.green_100,
  color_border_success_hover: color.green_60,

  color_border_warning: color.ochre_70,
  color_border_warning_active: color.ochre_100,
  color_border_warning_focus: color.ochre_100,
  color_border_warning_hover: color.ochre_60,

  // -----

  color_helpText_danger: color.red_80,

  color_helpText_success: color.green_80,

  color_helpText_warning: color.ochre_90,

  // -----

  color_icon: color.gray_60,

  // -----

  color_inputBackground_danger: color.red_10,

  color_inputBackground_success: color.green_10,

  color_inputBackground_warning: color.ochre_10,

  // -----

  color_linkBackground_focus: color.gray_30,

  // -----

  color_placeholder: color.gray_60,

  // -----

  color_text: color.gray_100,
  color_text_disabled: color.gray_50,

  color_text_danger: color.red_90,
  color_text_onDanger: 'white',

  color_text_primary: primaries.color_theme_90,
  color_text_onPrimary: 'white',

  color_text_success: color.green_90,
  color_text_onSuccess: 'white',

  color_text_warning: color.ochre_90,
  color_text_onWarning: 'white',

  // -----

  color_caption: color.gray_80,

  // -----

  color_heading: primaries.color_theme_80,

  // -----

  color_link: primaries.color_theme_90,
  color_link_active: primaries.color_theme_100,
  color_link_hover: primaries.color_theme_70,
  color_link_focus: primaries.color_theme_100
};
