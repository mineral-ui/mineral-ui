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
import {
  createStyledComponent,
  getNormalizedValue,
  mineralTheme
} from '../../../../../../utils';
import Card, {
  CardBlock as _CardBlock,
  CardTitle
} from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';

const CardBlock = createStyledComponent(_CardBlock, ({ theme }) => ({
  position: 'relative',

  '&::before': {
    borderColor: theme.color_theme_10,
    borderStyle: 'solid',
    borderWidth: `${getNormalizedValue(
      theme.space_inset_md,
      theme.fontSize_prose
    )} ${getNormalizedValue(theme.space_inset_lg, theme.fontSize_prose)}`,
    bottom: `-${getNormalizedValue(
      theme.space_inset_md,
      theme.fontSize_prose
    )}`,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: `-${getNormalizedValue(theme.space_inset_md, theme.fontSize_prose)}`
  }
}));

export default {
  id: 'consistent-spacing',
  title: 'Example',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description:
    'CardBlock provides uniform top/bottom margin & left/right padding (highlighted here in light blue).',
  scope: { Card, CardBlock, CardTitle, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
          interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        </CardBlock>
      </Card>
    </DemoLayout>`
};
