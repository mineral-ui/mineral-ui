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
  id: 'secondary-text',
  title: 'With Secondary Text',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `When you must provide information that doesn't belong to every
Card in a set, supply it as \`secondaryText\` information. The information will
display beside the title. If information is in every card in the set, or if the
\`secondaryText\` information is not brief, consider using the \`subtitle\`
prop. Note that if [\`actions\`](#actions-menu) is provided, it will take
precedence.`,
  scope: { Card, CardBlock, CardTitle, loremIpsum, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle secondaryText="Secondary info">Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>

      <Card>
        <CardTitle secondaryText="Longer secondary info will be truncated">Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    </DemoLayout>`
};
