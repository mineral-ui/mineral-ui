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
import Card from '../../Card';
import CardBlock from '../../CardBlock';
import CardTitle from '../../CardTitle';

const Root = createStyledComponent('div', {
  '& > *': {
    width: '33.333%'
  }
});

const Status = createStyledComponent('span', {
  color: 'red',
  fontSize: '0.5em',

  '&:before': {
    backgroundColor: 'red',
    borderRadius: '1em',
    content: '""',
    display: 'inline-block',
    height: '1em',
    marginRight: '0.5em',
    position: 'relative',
    top: '0.1em',
    width: '1em'
  }
});

function Example() {
  return (
    <Root>
      <Card>
        <CardTitle subtitle={<em>Subtitle</em>}>
          Card title<br />
          <Status>Status label</Status>
        </CardTitle>
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
  title: 'Complex title and subtitle',
  component: Example,
  source: `<Card>
  <CardTitle subtitle={<em>Subtitle</em>}>
    Card title<br />
    <Status>Status label</Status>
  </CardTitle>
  <CardBlock>Light years star stuff harvesting star light citizens of distant epochs encyclopaedia galactica vastness is bearable only through love, shores of the cosmic ocean!</CardBlock>
</Card>`
};
