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
import ScrollParent from '../components/ScrollBox';
import Popover from '../../../../../Popover';

export default {
  id: 'boundaries',
  title: 'Boundaries',
  description:
    "In some cases, it can be helpful to set the `boundariesElement` to 'scrollParent' instead of the 'viewPort' (default).",
  scope: { Button, DemoContent, ScrollParent, Popover },
  source: `
    <ScrollParent>
      <Popover
        content={<DemoContent />}
        boundariesElement="scrollParent"
        placement="left"
        defaultIsOpen
        restoreFocus={false}>
        <Button>Open Popover</Button>
      </Popover>
    </ScrollParent>
  `
};
