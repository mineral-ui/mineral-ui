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
import button from './Button';
import card from './Card';
import dropdown from './Dropdown';
import form from './Form';
import icon from './Icon';
import link from './Link';
import menu from './Menu';
import popover from './Popover';
import textArea from './TextArea';
import textInput from './TextInput';
import themeProvider from './ThemeProvider';

const demos = flatten([
  button,
  card,
  dropdown,
  form,
  icon,
  link,
  menu,
  popover,
  textArea,
  textInput,
  themeProvider
]);

export default createKeyMap(demos, 'slug');
