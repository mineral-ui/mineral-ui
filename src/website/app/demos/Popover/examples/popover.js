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

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Popovers wrap the triggering component.
Placement is relative to the location of the trigger.
Popovers will change position relative to the trigger automatically depending on viewport constraints.`,
  scope: { Button, DemoContent, Popover },
  source: `
    <Popover content={<DemoContent />}>
      <Button>Open Popover</Button>
    </Popover>`
};
