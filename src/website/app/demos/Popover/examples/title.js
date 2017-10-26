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
import { createStyledComponent } from '../../../../../styles';
import Button from '../../../../../Button';
import DemoContent from '../components/DemoContent';
import Popover from '../../../../../Popover';

const DemoLayout = createStyledComponent('div', {
  padding: '5em 0'
});

export default {
  id: 'title',
  title: 'Title and Subtitle',
  description: `Formatted titles render above any other content if provided.
Subtitles are only be rendered if the \`title\` attribute is present.`,
  scope: { Button, DemoContent, DemoLayout, Popover },
  source: `
    <DemoLayout>
      <Popover
        content={<DemoContent />}
        placement="right"
        subtitle="Subtitle"
        title="Title"
        isOpen>
        <Button>Open Popover</Button>
      </Popover>
    </DemoLayout>`
};
