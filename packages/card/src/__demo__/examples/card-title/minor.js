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
import { createStyledComponent } from '@mineral-ui/component-utils';
import Card from '../../../Card';
import CardBlock from '../../../CardBlock';
import CardImage from '../../../CardImage';
import CardTitle from '../../../CardTitle';

const Root = createStyledComponent('div', {
  '& > *': {
    width: '33.333%'
  }
});

function Example() {
  return (
    <Root>
      <Card>
        <CardImage src="http://fillmurray.com/1000/563" alt="Bill Murray" />
        <CardTitle minor>Card title</CardTitle>
        <CardBlock>
          Light years star stuff harvesting star light citizens of distant
          epochs encyclopaedia galactica vastness is bearable only through love,
          shores of the cosmic ocean!
        </CardBlock>
      </Card>
    </Root>
  );
}

export default {
  title: 'Minor title',
  component: Example,
  description:
    'The Card title can be rendered in a minor style. Use this style whenever placing a CardTitle immediately after a CardImage.',
  source: `<Card>
  <CardImage src="http://fillmurray.com/1000/563" alt="Bill Murray" />
  <CardTitle minor>Card title</CardTitle>
  <CardBlock>
    Light years star stuff harvesting star light citizens of distant
    epochs encyclopaedia galactica vastness is bearable only through love,
    shores of the cosmic ocean!
  </CardBlock>
</Card>`
};
