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
import GettingStarted from './GettingStarted';
import Guidelines from './Guidelines';
import Theming from './Theming';

type Page = {
  component?: MnrlReactNode,
  desc: string,
  id?: string,
  path?: string,
  sections?: Array<Object>,
  title: string
};

type Pages = Array<Page>;

const pages: Pages = [
  {
    title: 'Getting Started',
    component: GettingStarted,
    desc:
      'A still more glorious dawn awaits inconspicuous motes of rock and gas. Science the ash of stellar alchemy! Globular star cluster Cambrian explosion, shores of the cosmic ocean Tunguska event. Science rogue? Worldlets are creatures of the cosmos as a patch of light science light years',
    path: '/getting-started'
  },
  {
    title: 'Guidelines',
    component: Guidelines,
    desc: 'These guidelines are the foundation of Mineral UI',
    path: '/guidelines',
    sections: [
      {
        title: 'Theming',
        component: Theming,
        desc: 'Theming is very important in Mineral UI',
        path: '/guidelines/theming'
      }
    ]
  }
];

export default pages;
