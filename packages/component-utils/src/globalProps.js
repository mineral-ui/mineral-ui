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
import kebabCase from 'lodash.kebabcase';

const whitelistedProps = ['className', 'id', 'role', 'tabIndex'];

function customProperties(data: { [string]: any }, prefix: string) {
  const props = {};

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      props[`${prefix}-${kebabCase(key)}`] = data[key];
    }
  }

  return props;
}

export default function globalProps(
  props: { [string]: any },
  whitelist: Array<string> = whitelistedProps
): {} {
  let passthroughProps = {};

  if (props.dataset) {
    passthroughProps = {
      ...customProperties(props.dataset, 'data')
    };
  }

  if (props.ariaset) {
    passthroughProps = {
      ...passthroughProps,
      ...customProperties(props.ariaset, 'aria')
    };
  }

  passthroughProps = Object.keys(props).reduce((acc, prop) => {
    if (whitelist.indexOf(prop) !== -1) {
      acc[prop] = props[prop];
    }

    return acc;
  }, passthroughProps);

  return passthroughProps;
}
