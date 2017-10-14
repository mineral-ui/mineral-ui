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
import DemoContent from '../../Popover/components/DemoContent';
import ScrollParent from '../../Popover/components/ScrollBox';
import Dropdown from '../../../../../Dropdown';
import data from '../../Menu/components/menuData';

export default {
  id: 'portal',
  title: 'Portal',
  description:
    'Use a portal to render the Dropdown to the body of the page rather than as a sibling of the trigger.  This can be useful to visually "break out" of a bounding container with `overflow` or `z-index` styles. Note that you may have to adjust the `modifiers` to get the exact behavior that you want.',
  scope: { Button, data, DemoContent, ScrollParent, Dropdown },
  source: `
    <ScrollParent>
      <Dropdown
        data={data}
        usePortal
        isOpen
        modifiers={{
          preventOverflow: {
            escapeWithReference: true
          }
        }}>
        <Button>Menu</Button>
      </Dropdown>
    </ScrollParent>`
};
