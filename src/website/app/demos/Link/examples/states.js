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
import { simulate } from 'glamor';
import { createStyledComponent } from '../../../../../styles';
import _Link from '../../../../../Link';
import _DemoLayout from '../components/DemoLayout';

const Link = (props: {}) => <_Link target="_blank" {...props} />;

const DemoLayout = createStyledComponent(_DemoLayout, {
  '& > a': {
    marginRight: '0.5rem'
  }
});

export default {
  id: 'states',
  title: 'States',
  hideFromProd: true,
  hideSource: true,
  scope: { Link, DemoLayout, simulate },
  source: `
    <DemoLayout>
      <Link href="http://example.com">Regular</Link>
      <Link {...simulate('hover')} href="http://example.com">Hover</Link>
      <Link {...simulate('focus')} href="http://example.com">Focus</Link>
      <Link {...simulate('focus', 'hover')} href="http://example.com">Focus & Hover</Link>
      <Link {...simulate('focus', 'active')} href="http://example.com">Focus & Active</Link>
      <Link {...simulate('active')} href="http://example.com">Active</Link>
      <br /><br />
      <Link variant="danger" href="http://example.com">Danger</Link>
      <Link {...simulate('hover')} variant="danger" href="http://example.com">Hover</Link>
      <Link {...simulate('focus')} variant="danger" href="http://example.com">Focus</Link>
      <Link {...simulate('focus', 'hover')} variant="danger" href="http://example.com">Focus & Hover</Link>
      <Link {...simulate('focus', 'active')} variant="danger" href="http://example.com">Focus & Active</Link>
      <Link  {...simulate('active')} variant="danger" href="http://example.com">Active</Link>
      <br /><br />
      <Link variant="success" href="http://example.com">Success</Link>
      <Link {...simulate('hover')} variant="success" href="http://example.com">Hover</Link>
      <Link {...simulate('focus')} variant="success" href="http://example.com">Focus</Link>
      <Link {...simulate('focus', 'hover')} variant="success" href="http://example.com">Focus & Hover</Link>
      <Link {...simulate('focus', 'active')} variant="success" href="http://example.com">Focus & Active</Link>
      <Link {...simulate('active')} variant="success" href="http://example.com">Active</Link>
      <br /><br />
      <Link variant="warning" href="http://example.com">Warning</Link>
      <Link {...simulate('hover')} variant="warning" href="http://example.com">Hover</Link>
      <Link {...simulate('focus')} variant="warning" href="http://example.com">Focus</Link>
      <Link {...simulate('focus', 'hover')} variant="warning" href="http://example.com">Focus & Hover</Link>
      <Link {...simulate('focus', 'active')} variant="warning" href="http://example.com">Focus & Active</Link>
      <Link {...simulate('active')} variant="warning" href="http://example.com">Active</Link>
    </DemoLayout>`
};
