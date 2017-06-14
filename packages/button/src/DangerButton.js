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
import { createThemedComponent } from '@mineral-ui/style-utils';
import Button from './Button';

const DangerButton = createThemedComponent(Button, (props, theme) => ({
  Button_color_background_active: theme.color_inputBackground_danger,

  Button_color_background_minimal_active: theme.color_inputBackground_danger,

  Button_color_background_primary: theme.color_background_danger,
  Button_color_background_primary_active: theme.color_background_danger_active,
  Button_color_background_primary_focus: theme.color_background_danger_focus,
  Button_color_background_primary_hover: theme.color_background_danger_hover,

  // -----

  Button_color_border_active: theme.color_border_danger,
  Button_color_border_focus: theme.color_border_danger_focus,

  Button_color_border_minimal_focus: theme.color_border_danger_focus,

  Button_color_border_primary_focus: theme.color_border_danger_focus,

  // -----

  Button_color_text: theme.color_background_danger,

  Button_color_text_minimal: theme.color_text_danger,

  Button_color_text_primary: theme.color_text_onDanger
}));

DangerButton.displayName = 'DangerButton';

export default DangerButton;
