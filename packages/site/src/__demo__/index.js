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
import flatten from 'lodash/flatten';
import createKeyMap from '../utils/createKeyMap';
import button from '../../../button/src/__demo__';
import card from '../../../card/src/__demo__';
import componentUtils from '../../../component-utils/src/__demo__';
import hello from '../../../hello/src/__demo__';
import helloWorld from '../../../hello-world/src/__demo__';
import icon from '../../../icon/src/__demo__';
import world from '../../../world/src/__demo__';

const demos = flatten([
  button,
  card,
  icon,
  hello,
  world,
  helloWorld,
  componentUtils
]);

export default createKeyMap(demos, 'slug');
