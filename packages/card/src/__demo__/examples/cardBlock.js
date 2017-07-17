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
import {
  createStyledComponent,
  getNormalizedValue
} from '@mineral-ui/component-utils';
import Card from '../../Card';
import _CardBlock from '../../CardBlock';
import CardTitle from '../../CardTitle';

const Root = createStyledComponent('div', {
  '& > *': {
    width: '33.333%'
  }
});
const CardBlock = createStyledComponent(_CardBlock, (props, theme) => ({
  position: 'relative',

  // prettier-ignore
  '&::before': {
    borderColor: theme.color_theme_10,
    borderStyle: 'solid',
    borderWidth: `${getNormalizedValue(theme.spacing_double, theme.fontSize_prose)} ${getNormalizedValue(theme.spacing_triple, theme.fontSize_prose)}`,
    bottom: `-${getNormalizedValue(theme.spacing_double, theme.fontSize_prose)}`,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: `-${getNormalizedValue(theme.spacing_double, theme.fontSize_prose)}`,
  }
}));

function Example() {
  return (
    <Root>
      <Card>
        <CardTitle>Card title</CardTitle>
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
  title: 'Consistent spacing',
  component: Example,
  description:
    'CardBlock provides uniform top/bottom margin & left/right padding (highlighted here in light blue).',
  source: `<Root>
  <Card>
    <CardTitle>Card title</CardTitle>
    <CardBlock>
      Light years star stuff harvesting star light citizens of distant
      epochs encyclopaedia galactica vastness is bearable only through love,
      shores of the cosmic ocean!
    </CardBlock>
  </Card>
</Root>`
};
