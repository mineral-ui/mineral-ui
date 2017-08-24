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
import { mineralTheme } from '@mineral-ui/component-utils';
import Card from '../../../Card';
import CardBlock from '../../../CardBlock';
import CardTitle from '../../../CardTitle';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'clickable',
  title: 'Clickable',
  backgroundColor: mineralTheme.color_gray_10,
  description:
    'If an onClick function is provided, the entire card becomes clickable and keyboard actionable.',
  scope: { Card, CardBlock, CardTitle, DemoLayout },
  source: `
    <DemoLayout>
      <Card onClick={event => console.log(event)}>
        <CardTitle>Card title</CardTitle>
        <CardBlock>
          Light years star stuff harvesting star light citizens of distant
          epochs encyclopaedia galactica vastness is bearable only through love,
          shores of the cosmic ocean!
        </CardBlock>
      </Card>
    </DemoLayout>`
};
