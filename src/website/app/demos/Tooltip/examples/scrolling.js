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
import ScrollParent from '../../Popover/components/ScrollBox';
import Tooltip from '../../../../../Tooltip';

export default {
  id: 'scrolling-container',
  title: 'Scrolling Container',
  description:
    'Tooltip will attempt to stay visible in an `overflow: scroll` container.',
  scope: { Button, ScrollParent, Tooltip },
  source: `
    <ScrollParent>
      <Tooltip
        content="Light years star stuff"
        placement="left"
        isOpen>
        <Button>Button</Button>
      </Tooltip>
    </ScrollParent>
  `
};
