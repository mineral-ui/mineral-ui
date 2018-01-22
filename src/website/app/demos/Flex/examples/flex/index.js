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
import alignItems from './alignItems';
import boxProps from './boxProps';
import direction from './direction';
import flex from './flex';
import gutters from './gutters';
import importSyntax from './importSyntax';
import justifyContent from './justifyContent';
import responsive from './responsive';
import rtl from './rtl';
import wrap from './wrap';

export default [
  importSyntax,
  flex,
  direction,
  gutters,
  justifyContent,
  alignItems,
  wrap,
  boxProps,
  responsive,
  rtl
];
