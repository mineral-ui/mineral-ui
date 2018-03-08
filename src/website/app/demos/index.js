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
import avatar from './Avatar';
import button from './Button';
import box from './Box';
import card from './Card';
import checkbox from './Checkbox';
import dropdown from './Dropdown';
import form from './Form';
import icon from './Icon';
import flex from './Flex';
import link from './Link';
import menu from './Menu';
import popover from './Popover';
import radio from './Radio';
import select from './Select';
import startEnd from './StartEnd';
import textArea from './TextArea';
import textInput from './TextInput';
import themeProvider from './ThemeProvider';
import tooltip from './Tooltip';

const demos = flatten([
  avatar,
  button,
  box,
  card,
  checkbox,
  dropdown,
  flex,
  form,
  icon,
  link,
  menu,
  popover,
  radio,
  select,
  startEnd,
  textArea,
  textInput,
  themeProvider,
  tooltip
]);

export default createKeyMap(demos, 'slug');
