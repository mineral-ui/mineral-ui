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
import Button from '@mineral-ui/button';
import Card from '../../Card';
import CardActions from '../../CardActions';
import CardBlock from '../../CardBlock';
import CardTitle from '../../CardTitle';
import CardImage from '../../CardImage';

const Root = createStyledComponent('div', {
  alignItems: 'flex-start',
  display: 'flex',

  '& > *': {
    flex: '1 1 25%'
  },

  '& > *:not(:first-child)': {
    marginLeft: '2em'
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
        <CardActions>
          <Button minimal>Button Text</Button>
        </CardActions>
      </Card>

      <Card>
        <CardTitle>Card title</CardTitle>
        <CardImage src="http://fillmurray.com/1001/563" alt="Bill Murray" />
        <CardBlock>
          Light years star stuff harvesting star light citizens of distant
          epochs encyclopaedia galactica vastness is bearable only through love,
          shores of the cosmic ocean!
        </CardBlock>
        <CardActions>
          <Button minimal>Button Text</Button>
        </CardActions>
      </Card>

      <Card>
        <CardTitle>Card title</CardTitle>
        <CardActions>
          <Button minimal>Button Text</Button>
        </CardActions>
        <CardImage src="http://fillmurray.com/1002/563" alt="Bill Murray" />
        <CardBlock>
          Light years star stuff harvesting star light citizens of distant
          epochs encyclopaedia galactica vastness is bearable only through love,
          shores of the cosmic ocean!
        </CardBlock>
      </Card>

      <Card>
        <CardTitle>Card title</CardTitle>
        <CardActions>
          <Button minimal>Button Text</Button>
        </CardActions>
        <CardBlock>
          Light years star stuff harvesting star light citizens of distant
          epochs encyclopaedia galactica vastness is bearable only through love,
          shores of the cosmic ocean!
        </CardBlock>
        <CardImage src="http://fillmurray.com/1003/563" alt="Bill Murray" />
      </Card>
    </Root>
  );
}

export default {
  title: 'Order of sections',
  component: Example,
  description: 'The sections of Card are designed to work in any order.',
  source: `<Card>
  <CardImage src="http://fillmurray.com/1000/563" alt="Bill Murray" />
  <CardTitle minor>Card title</CardTitle>
  <CardBlock>
    Light years star stuff harvesting star light citizens of distant
    epochs encyclopaedia galactica vastness is bearable only through love,
    shores of the cosmic ocean!
  </CardBlock>
  <CardActions>
    <Button minimal>Button Text</Button>
  </CardActions>
</Card>

<Card>
  <CardTitle>Card title</CardTitle>
  <CardImage src="http://fillmurray.com/1000/563" alt="Bill Murray" />
  <CardBlock>
    Light years star stuff harvesting star light citizens of distant
    epochs encyclopaedia galactica vastness is bearable only through love,
    shores of the cosmic ocean!
  </CardBlock>
  <CardActions>
    <Button minimal>Button Text</Button>
  </CardActions>
</Card>

<Card>
  <CardTitle>Card title</CardTitle>
  <CardActions>
    <Button minimal>Button Text</Button>
  </CardActions>
  <CardImage src="http://fillmurray.com/1000/563" alt="Bill Murray" />
  <CardBlock>
    Light years star stuff harvesting star light citizens of distant
    epochs encyclopaedia galactica vastness is bearable only through love,
    shores of the cosmic ocean!
  </CardBlock>
</Card>

<Card>
  <CardTitle>Card title</CardTitle>
  <CardActions>
    <Button minimal>Button Text</Button>
  </CardActions>
  <CardBlock>
    Light years star stuff harvesting star light citizens of distant
    epochs encyclopaedia galactica vastness is bearable only through love,
    shores of the cosmic ocean!
  </CardBlock>
  <CardImage src="http://fillmurray.com/1000/563" alt="Bill Murray" />
</Card>`
};
