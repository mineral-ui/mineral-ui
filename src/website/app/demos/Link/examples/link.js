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
import React from 'react';
import { createStyledComponent } from '../../../../../styles';
import _Link from '../../../../../Link';
import DemoLayout from '../components/DemoLayout';

const Link = (props: {}) => <_Link target="_blank" {...props} />;

const Big = createStyledComponent('p', { fontSize: '1.5em' });
const Bold = createStyledComponent('p', { fontWeight: 700 });
const Serif = createStyledComponent('p', { fontFamily: 'serif' });
const Small = createStyledComponent('p', { fontSize: '0.75em' });

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Use the Link component to ensure that anchors are consistently styled with the rest of your app.
Links inherit font size, weight, and family from context; colors are inherited from the theme.`,
  scope: { Big, Bold, DemoLayout, Link, Serif, Small },
  source: `
    <DemoLayout>
      <Big>
        Lorem ipsum dolor sit amet, <Link href="http://example.com">consectetur</Link> adipiscing elit,
      </Big>

      <Small>
        sed do eiusmod tempor <Link href="http://example.com">incididunt</Link> ut labore et dolore magna aliqua.
      </Small>

      <Bold>
        Ut enim <Link href="http://example.com">ad minim veniam</Link> quis nostrud exercitation
      </Bold>

      <Serif>
        ullamco laboris <Link href="http://example.com">nisi ut</Link> aliquip ex ea commodo consequat.
      </Serif>
    </DemoLayout>`
};
