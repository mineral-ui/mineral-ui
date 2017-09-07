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
import { componentTheme as menuComponentTheme } from '../../../../Menu/Menu';
import { componentTheme as menuItemComponentTheme } from '../../../../Menu/MenuItem';
import menuExamples from './examples/menu';
import menuItemExamples from './examples/menu-item';

const menuDoc = require('!!react-docgen-loader!../../../../Menu/Menu');
const menuItemDoc = require('!!react-docgen-loader!../../../../Menu/MenuItem');

export default [
  {
    componentTheme: menuComponentTheme,
    doc: menuDoc,
    examples: menuExamples,
    slug: 'menu',
    title: 'Menu'
  },
  {
    componentTheme: menuItemComponentTheme,
    doc: menuItemDoc,
    examples: menuItemExamples,
    slug: 'menu-item',
    subcomponent: true,
    title: 'Menu Item'
  }
];
