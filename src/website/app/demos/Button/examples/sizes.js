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
import { createStyledComponent } from '../../../../../utils';
import Button from '../../../../../Button';

const DemoLayout = createStyledComponent('div', ({ theme }) => ({
  '& > button': {
    marginRight: '0.5rem'
  },
  ' button:last-of-type': {
    marginTop: theme.space_stack_md
  }
}));

export default {
  id: 'sizes',
  description: `To provide hierarchy to actions on your page, change Button impact with the \`size\` attribute.

For a Button whose width is defined by its container, use \`fullWidth\`.`,
  title: 'Sizes',
  scope: { Button, DemoLayout },
  source: `
    <DemoLayout>
      <Button size="small">Small</Button>
      <Button>Medium</Button>
      <Button size="large">Large</Button>
      <Button size="jumbo">Jumbo</Button>
      <Button fullWidth>Full Width</Button>
    </DemoLayout>`
};
