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
import Link from '../../../../../Link';
import { BrowserRouter, Link as ReactRouterLink } from 'react-router-dom';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'other',
  title: 'Other Components',
  description: `Any component that generate an \`<a />\` element may be styled using the \`element\` prop, such as a [ReactRouter Link](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md).`,
  scope: { BrowserRouter, DemoLayout, Link, ReactRouterLink },
  source: `
    <DemoLayout>
      <BrowserRouter>
        <Link element={ReactRouterLink} to="/components/link">ReactRouter Link</Link>
      </BrowserRouter>
    </DemoLayout>
  `
};
