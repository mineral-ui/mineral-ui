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
import controlled from './controlled';
import disabled from './disabled';
import importSyntax from './importSyntax';
import inputRef from './inputRef';
import invalid from './invalid';
import labelWrapping from './labelWrapping';
import nextToOtherInputs from './nextToOtherInputs';
import required from './required';
import rtl from './rtl';
import sizes from './sizes';
import states from './states';
import uncontrolled from './uncontrolled';

export default [
  importSyntax,
  uncontrolled,
  controlled,
  disabled,
  required,
  invalid,
  sizes,
  labelWrapping,
  inputRef,
  rtl,
  nextToOtherInputs,
  states
];
