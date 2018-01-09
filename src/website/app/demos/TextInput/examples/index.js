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
import formField from './formField';
import icons from './icons';
import inputRef from './inputRef';
import importSyntax from './importSyntax';
import invalid from './invalid';
import kitchenSink from './kitchenSink';
import nextToButton from './nextToButton';
import placeholder from './placeholder';
import prefixAndSuffix from './prefixAndSuffix';
import readOnly from './readOnly';
import required from './required';
import rtl from './rtl';
import sizes from './sizes';
import states from './states';
import uncontrolled from './uncontrolled';
import variants from './variants';

export default [
  importSyntax,
  uncontrolled,
  controlled,
  placeholder,
  disabled,
  readOnly,
  required,
  invalid,
  sizes,
  variants,
  icons,
  prefixAndSuffix,
  inputRef,
  rtl,
  formField,
  nextToButton,
  kitchenSink,
  states
];
