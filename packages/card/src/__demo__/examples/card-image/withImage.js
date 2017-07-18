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
import CardTitle from '../../../CardTitle';
import CardImage from '../../../CardImage';

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
  title: 'With an image',
  component: Example,
  description:
    "CardImage should be the first child of your Card. Images should be 16:9 and have an 'alt' attribute.",
  source: `<Card>
  <CardImage src="http://fillmurray.com/1000/563" alt="Bill Murray" />
  <CardTitle minor>Card title</CardTitle>
  <CardBlock>Light years star stuff harvesting star light citizens of distant epochs encyclopaedia galactica vastness is bearable only through love, shores of the cosmic ocean!</CardBlock>
</Card>`
};