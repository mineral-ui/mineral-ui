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
import data from './data';
import disabled from './disabled';
import formField from './formField';
import importSyntax from './importSyntax';
import invalid from './invalid';
import overflow from './overflow';
import placeholder from './placeholder';
import placement from './placement';
import portal from './portal';
import readOnly from './readOnly';
import required from './required';
import rtl from './rtl';
import scrolling from './scrolling';
import sizes from './sizes';
import states from './states';
import triggerRef from './triggerRef';
import uncontrolled from './uncontrolled';
import variants from './variants';

export default [
  importSyntax,
  uncontrolled,
  controlled,
  data,
  placeholder,
  disabled,
  readOnly,
  required,
  invalid,
  sizes,
  variants,
  placement,
  overflow,
  scrolling,
  portal,
  triggerRef,
  rtl,
  formField,
  states
];
