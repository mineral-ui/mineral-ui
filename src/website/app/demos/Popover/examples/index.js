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
import scrolling from './scrolling';
import controlled from './controlled';
import disabled from './disabled';
import importSyntax from './importSyntax';
import onOpenClose from './onOpenClose';
import overflow from './overflow';
import placement from './placement';
import popover from './popover';
import portal from './portal';
import title from './title';

export default [
  importSyntax,
  popover,
  title,
  placement,
  overflow,
  scrolling,
  portal,
  onOpenClose,
  disabled,
  controlled
];
