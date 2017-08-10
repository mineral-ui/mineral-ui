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
import { createStyledComponent } from '@mineral-ui/component-utils';
import Link from '../../Link';

const Big = createStyledComponent('p', {
  fontSize: '1.5em'
});
const Bold = createStyledComponent('p', {
  fontWeight: 700
});
const Serif = createStyledComponent('p', {
  fontFamily: 'serif'
});
const Small = createStyledComponent('p', {
  fontSize: '0.75em'
});

export default {
  title: 'Basic link',
  description: 'Links inherit font size, weight, and family.',
  scope: { Big, Bold, Link, Serif, Small },
  source: `<div>
  <Big>
    Light years star stuff <Link href="http://example.com">harvesting</Link> star light
  </Big>

  <Small>
    citizens of distant <Link href="http://example.com">epochs</Link> encyclopaedia galactica
  </Small>

  <Bold>
    vastness is <Link href="http://example.com">bearable</Link> only through love,
  </Bold>

  <Serif>
    shores of the <Link href="http://example.com">cosmic</Link> ocean!
  </Serif>
</div>`
};
