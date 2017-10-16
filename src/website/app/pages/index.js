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
import Theming from './Theming';
import Color from './Color';
import Typography from './Typography';
import ComponentStatus from './ComponentStatus';

type Page = {
  component: React$ComponentType<*>,
  id?: string,
  path: string,
  hiddenInNav?: boolean,
  title: string
};

type Pages = Array<Page>;

type Section = {
  heading: string,
  pages: Pages
};

const sections: Array<Section> = [
  {
    heading: 'Guidelines',
    pages: [
      {
        component: GettingStarted,
        path: '/getting-started',
        title: 'Getting Started'
      },
      {
        component: Color,
        path: '/color',
        title: 'Color'
      },
      {
        component: Typography,
        path: '/typography',
        title: 'Typography'
      },
      {
        component: Theming,
        path: '/theming',
        title: 'Theming'
      }
    ]
  },
  {
    heading: 'What’s New',
    pages: [
      {
        component: ComponentStatus,
        path: '/component-status',
        title: 'Component Status'
      }
    ]
  }
];

export default sections;
