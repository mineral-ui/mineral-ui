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
import Dropdown from '../../../../../Dropdown';
import ScrollParent from '../../Popover/components/ScrollBox';
import data from '../../Menu/components/menuData';

export default {
  id: 'scrolling-container',
  title: 'Scrolling container',
  description: `Dropdown will attempt to keep its menu visible in an \`overflow: scroll\` container.`,
  scope: { Button, data, Dropdown, ScrollParent },
  source: `
    <ScrollParent height={430}>
      <Dropdown
        data={data}
        isOpen
        placement="bottom-start">
        <Button>Menu</Button>
      </Dropdown>
    </ScrollParent>
  `
};
