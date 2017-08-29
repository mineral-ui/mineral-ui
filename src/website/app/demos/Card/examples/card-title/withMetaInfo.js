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
import { mineralTheme } from '../../../../../../components/Utils';
import Card, { CardBlock, CardTitle } from '../../../../../../components/Card';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'meta',
  title: 'With meta information',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description:
    'If you provide meta information, such as a date or category, it will display above the title, which will automatically display in the minor style.',
  scope: { Card, CardBlock, CardTitle, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle meta="July 24, 2017">Card title</CardTitle>
        <CardBlock>
          Light years star stuff harvesting star light citizens of distant
          epochs encyclopaedia galactica vastness is bearable only through love,
          shores of the cosmic ocean!
        </CardBlock>
      </Card>
    </DemoLayout>`
};
