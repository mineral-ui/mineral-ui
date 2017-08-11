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
import Color from './Color';
import Community from './Community';
import GettingStarted from './GettingStarted';
import Guidelines from './Guidelines';
import Theming from './Theming';
import Typography from './Typography';
import WhatsNext from './WhatsNext';

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
    desc: 'This is some filler content for the Table of Contents page',
    path: '/guidelines',
    sections: [
      {
        title: 'Color',
        component: Color,
        desc:
          'A still more glorious dawn awaits inconspicuous motes of rock and gas. Science the ash of stellar alchemy! Globular star cluster Cambrian explosion, shores of the cosmic ocean Tunguska event. Science rogue? Worldlets are creatures of the cosmos as a patch of light science light years',
        path: '/guidelines/color'
      },
      {
        title: 'Theming',
        component: Theming,
        desc:
          'A still more glorious dawn awaits inconspicuous motes of rock and gas. Science the ash of stellar alchemy! Globular star cluster Cambrian explosion, shores of the cosmic ocean Tunguska event. Science rogue? Worldlets are creatures of the cosmos as a patch of light science light years',
        path: '/guidelines/theming'
      },
      {
        title: 'Typography',
        component: Typography,
        desc:
          'A still more glorious dawn awaits inconspicuous motes of rock and gas. Science the ash of stellar alchemy! Globular star cluster Cambrian explosion, shores of the cosmic ocean Tunguska event. Science rogue? Worldlets are creatures of the cosmos as a patch of light science light years',
        path: '/guidelines/typography'
      }
    ]
  },
  {
    title: 'Community',
    component: Community,
    desc: 'This is some filler content for the Table of Contents page',
    path: '/community',
    sections: [
      {
        title: 'Section Alpha',
        id: 'someId',
        desc:
          'A still more glorious dawn awaits inconspicuous motes of rock and gas.'
      },
      {
        title: 'Section Bravo',
        id: 'someOtherId',
        desc:
          'Science the ash of stellar alchemy! Globular star cluster Cambrian explosion, shores of the cosmic ocean Tunguska event.'
      }
    ]
  },
  {
    title: 'What’s Next',
    component: WhatsNext,
    desc: 'something something something',
    path: '/whats-next'
  }
];

export default pages;
