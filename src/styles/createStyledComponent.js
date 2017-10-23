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
import glamorous from 'glamorous';
import componentStyleReset from './componentStyleReset';

export default function createStyledComponent(
  element:
    | React$StatelessFunctionalComponent<*>
    | Class<React$ComponentType<*>>
    | string,
  styles: Object | ((props: Object, context?: Object) => Object),
  options?: Object = {}
) {
  const { includeStyleReset, ...restOptions } = options;
  let outStyles;

  if (includeStyleReset) {
    outStyles = (props: Object, context?: Object): Object => {
      const componentStyles =
        typeof styles === 'function' ? styles(props, context) : styles;

      return {
        ...componentStyleReset(props),
        ...componentStyles
      };
    };
  } else {
    outStyles = styles;
  }

  return glamorous(element, restOptions)(outStyles);
}
