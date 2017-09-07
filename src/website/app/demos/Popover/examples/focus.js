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
import Button from '../../../../../Button';
import DemoContent from '../components/DemoContent';
import Popover from '../../../../../Popover';
import { createStyledComponent } from '../../../../../utils';

const DemoLayout = createStyledComponent('div', ({ theme }) => ({
  '& > div': {
    marginBottom: '1em'
  },

  '& > div + div': {
    marginLeft: '1em'
  },

  '& [data-placement]:focus': {
    outline: `5px solid ${theme.color_theme_50}`
  }
}));

export default {
  id: 'focus',
  title: 'Focus Management',
  description:
    'There are a couple options available to help manage focus. Note: the focus style on the popover is for illustration purposes only.',
  scope: { Button, DemoContent, DemoLayout, Popover },
  source: `
    <DemoLayout>
      <Popover content={<DemoContent />}>
        <Button>Both autoFocus and restoreFocus</Button>
      </Popover>

      <Popover content={<DemoContent />} autoFocus={false}>
        <Button>No autoFocus</Button>
      </Popover>

      <Popover content={<DemoContent />} restoreFocus={false}>
        <Button>No restoreFocus</Button>
      </Popover>

      <Popover content={<DemoContent />} autoFocus={false} restoreFocus={false}>
        <Button>Neither autoFocus nor restoreFocus</Button>
      </Popover>
    </DemoLayout>
  `
};
