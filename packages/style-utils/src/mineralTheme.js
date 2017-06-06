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

  color_border_active: color.blue_50,
  color_border_hover: color.blue_60,
  color_border_focus: color.blue_80,
  color_border_focus_primary: color.blue_100,

  color_buttonBackground_active: color.blue_10,

  color_heading: color.blue_80,

  color_link: color.blue_90,
  color_link_hover: color.blue_70,
  color_link_focus: color.blue_100,

  color_primary: color.blue_60,
  color_text_onPrimary: 'white'
};
