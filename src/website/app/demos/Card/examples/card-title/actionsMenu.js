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
import Card, {
  CardBlock,
  CardTitle,
  CardTitleMenu
} from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'actions-menu',
  title: 'With an Actions Menu',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `To display a menu of actions in CardTitle, pass a CardTitleMenu
or [Dropdown](../dropdown) to the \`actions\` prop.

<Callout title="Note">
  To help with styling and using the correct <a href="../icon" key="0">Icon</a>,
  Card provides a CardTitleMenu component, as used in the example below. In
  addition to accepting <a href="../dropdown/#props" key="1">any prop accepted by Dropdown</a>,
  it also accepts <code key="2">triggerTitle</code>, which is used for the
  Icon's title. You can import it like so:
</Callout>

\`\`\`
import { CardTitleMenu } from 'mineral-ui/Card';
\`\`\``,
  scope: {
    Card,
    CardBlock,
    CardTitle,
    CardTitleMenu,
    loremIpsum,
    DemoLayout
  },
  source: `
    () => {
      const menuData = [
        {
          items: [
            { onClick: () => { console.log('Clicked 1') }, text: 'MenuItem 1' },
            { onClick: () => { console.log('Clicked 2') }, text: 'MenuItem 2' },
            { divider: true },
            { onClick: () => { console.log('Clicked 3') }, text: 'MenuItem 3' }
          ]
        }
      ];

      return (
        <DemoLayout>
          <Card>
            <CardTitle actions={<CardTitleMenu data={menuData} />}>Card Title</CardTitle>
            <CardBlock>{loremIpsum}</CardBlock>
          </Card>
        </DemoLayout>
      );
    }`
};
