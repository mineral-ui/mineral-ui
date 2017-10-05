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
export default function composeEventHandlers(...handlers: Array<any>) {
  const fns = handlers.filter(fn => Boolean(fn));

  if (fns.length === 0) {
    return undefined;
  } else if (fns.length === 1) {
    return fns[0];
  } else {
    return (event: Object, ...args: Array<any>) =>
      fns.some(fn => {
        fn(event, ...args);
        return event.defaultPrevented;
      });
  }
}
