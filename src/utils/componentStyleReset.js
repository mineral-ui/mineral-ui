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
export default ({ theme }: Object) => {
  return {
    boxSizing: 'border-box',
    color: theme.color_text,
    fontFamily: theme.fontFamily
      ? `${theme.fontFamily}, ${theme.fontFamily_system}`
      : `${theme.fontFamily_system}`,
    fontSize: `${theme.fontSize_base}px`,
    lineHeight: theme.lineHeight,
    outline: 0,
    '& *,& *::before,& *::after': {
      boxSizing: 'inherit'
    }
  };
};
