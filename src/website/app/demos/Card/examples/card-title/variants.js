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
import Card, { CardBlock, CardTitle } from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'variants',
  title: 'Variants',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `CardTitle is available in a few variants. Be sure to use the
[appropriate variant](/color#guidelines-variants) for your intent.`,
  scope: { Card, CardBlock, CardTitle, loremIpsum, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle variant="danger">Danger Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>

      <Card>
        <CardTitle variant="success">Success Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>

      <Card>
        <CardTitle variant="warning" subtitle="Card Subtitle">Warning Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    </DemoLayout>`
};
