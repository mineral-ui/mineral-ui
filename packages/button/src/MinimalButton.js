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
import {
  createThemedComponent,
  mineralTheme as theme
} from '@mineral-ui/style-utils';
import ButtonBase from './ButtonBase';

const MinimalButton = createThemedComponent(ButtonBase, {
  Button_color_background: 'transparent',
  Button_color_border: 'transparent',
  Button_color_border_active: 'transparent',
  Button_color_text: theme.color_link,
  Button_shadow: 'none'
});

MinimalButton.displayName = 'MinimalButton';

export default MinimalButton;
