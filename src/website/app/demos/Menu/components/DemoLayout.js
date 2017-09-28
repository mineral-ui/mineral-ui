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
import { createStyledComponent, pxToEm } from '../../../../../utils';

export default createStyledComponent('div', ({ theme, width }) => ({
  overflow: 'hidden',

  '& > div': {
    backgroundColor: theme.color_white,
    float: 'left',
    margin: '0 0.5rem 0.5rem 0',
    // Default width is width of DropdownContent
    width: width || pxToEm(224)
  }
}));
