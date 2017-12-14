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
import { createStyledComponent } from '../../../../../../styles';
import { mineralTheme } from '../../../../../../themes';
import Button from '../../../../../../Button';
import Card, {
  CardActions,
  CardBlock,
  CardFooter,
  CardImage,
  CardTitle
} from '../../../../../../Card';
import _DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

const DemoLayout = createStyledComponent(_DemoLayout, {
  '& img': {
    width: '100%'
  }
});

export default {
  id: 'order',
  title: 'Order of Sections',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `There is no "one true way" to lay out children in Card; it is
flexible enough to accept different component arrangements. The one exception is
[CardFooter](../card-footer), which must be last in Card.`,
  scope: {
    Button,
    Card,
    CardActions,
    CardBlock,
    CardFooter,
    CardImage,
    CardTitle,
    loremIpsum,
    DemoLayout
  },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardImage src="/images/500x500.png" alt="gradient image" />
        <CardBlock>{loremIpsum}</CardBlock>
        <CardActions>
          <Button minimal>Button 1</Button>
          <Button primary>Button 2</Button>
        </CardActions>
        <CardFooter title="Card Footer" />
      </Card>

      <Card>
        <CardImage src="/images/500x500.png" alt="gradient image" />
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardActions>
          <Button minimal>Button 1</Button>
          <Button primary>Button 2</Button>
        </CardActions>
        <CardFooter title="Card Footer" />
      </Card>

      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardImage src="/images/500x500.png" alt="gradient image" />
        <CardActions>
          <Button minimal>Button 1</Button>
          <Button primary>Button 2</Button>
        </CardActions>
        <CardFooter title="Card Footer" />
      </Card>
    </DemoLayout>`
};
