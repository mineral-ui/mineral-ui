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
import { createStyledComponent } from '../../../../../utils';
import DemoContent from '../components/DemoContent';
import Popover from '../components/AlwaysOpenPopover';

const OverflowContainer = createStyledComponent('div', {
  backgroundColor: 'aliceblue',
  overflow: 'hidden',
  padding: '25px'
});

export default {
  id: 'overflow',
  title: 'Overflow',
  description: `A Popover can extend beyond its bounding container (the blue area in this example) even if the parent's \`overflow\` is set to \`hidden\`.`,
  scope: { Button, DemoContent, OverflowContainer, Popover },
  source: `
    <OverflowContainer>
      <Popover
        content={<DemoContent />}
        placement="right">
        <Button disabled>Open Popover</Button>
      </Popover>
    </OverflowContainer>`
};
