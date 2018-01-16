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
import keyedColors from './keyedColors';
import common from './common';

export default (key: string, level: number) => {
  if (keyedColors[key]) {
    return keyedColors[key].a11y_text_light.indexOf(level) != -1
      ? common.white
      : common.black;
  }
  return undefined;
};
