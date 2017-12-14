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
  id: 'avatar',
  title: 'With an Avatar',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `To help communicate ownership or categorization of a Card, add
an \`avatar\` to CardTitle. The image will automatically size itself correctly
whether a \`subtitle\` is also provided or not.`,
  scope: { Card, CardBlock, CardTitle, loremIpsum, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle
          avatar={<img src="/images/215x210_avatar.png" alt="Alt text" />}>
          Card Title
        </CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>

      <Card>
        <CardTitle
          avatar={<img src="/images/215x210_avatar.png" alt="Alt text" />}
          subtitle="Card Subtitle">
          Card Title
        </CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    </DemoLayout>`
};
