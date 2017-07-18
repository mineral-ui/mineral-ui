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
import Card from '../../../Card';
import CardBlock from '../../../CardBlock';
import CardTitle from '../../../CardTitle';

const Root = createStyledComponent('div', {
  '& > *': {
    width: '33.333%'
  }
});
const CustomContent = createStyledComponent('div', (props, theme) => ({
  backgroundColor: theme.color_gray_10,
  padding: `${theme.spacing_double} 0`
}));

function Example() {
  return (
    <Root>
      <Card>
        <CardTitle>Card title</CardTitle>
        <CardBlock>
          <CustomContent>
            <Button fullWidth>Button</Button>
          </CustomContent>
        </CardBlock>
      </Card>
    </Root>
  );
}

export default {
  title: 'Arbitrary children',
  component: Example,
  description:
    'A CardBlock will render any children. For best results, please make sure your content has no top/bottom margin or left/right padding.',
  source: `const CustomContent = createStyledComponent('div', (props, theme) => ({
  backgroundColor: theme.color_gray_10
}));

function Example() {
  return (
    <Root>
      <Card>
        <CardTitle>Card title</CardTitle>
        <CardBlock>
          <CustomContent>
            <Button fullWidth>Button</Button>
          </CustomContent>
        </CardBlock>
      </Card>
    </Root>
  );
}`
};
