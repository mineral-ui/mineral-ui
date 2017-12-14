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
import { mineralTheme } from '../../../../../../themes';
import Button from '../../../../../../Button';
import Card, { CardBlock, CardActions } from '../../../../../../Card';
import IconCloud from 'mineral-ui-icons/IconCloud';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'basic',
  title: 'Basic Usage',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `Use CardActions to add actions, [Buttons](../button) or
[Links](../link), to your [Card](../card). Buttons will automatically size
themselves appropriately, and can be any variety (primary, minimal, icon-only,
etc.)`,
  scope: {
    Button,
    Card,
    CardActions,
    CardBlock,
    loremIpsum,
    DemoLayout,
    IconCloud
  },
  source: `
    <DemoLayout>
      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardActions>
          <Button>Button 1</Button>
          <Button iconStart={<IconCloud />}>Button 2</Button>
        </CardActions>
      </Card>

      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardActions>
          <Button minimal >Button 1</Button>
          <Button iconStart={<IconCloud />} primary>Button 2</Button>
        </CardActions>
      </Card>

      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardActions>
          <Button iconStart={<IconCloud title="Button label 1" />} minimal />
          <Button iconStart={<IconCloud title="Button label 2" />} minimal />
        </CardActions>
      </Card>
    </DemoLayout>`
};
