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
import { createStyledComponent } from '@mineral-ui/component-utils';
import Button from '../../Button';
import { IconQueue } from '@mineral-ui/icon';

const DemoLayout = createStyledComponent('div', {
  '& > button': {
    marginRight: '0.5rem'
  }
});

export default {
  title: 'Buttons with Icons',
  description:
    'Buttons can contain Icons at their start, end, or both. Small and medium Buttons use small Icons; Large Buttons use medium Icons.',
  scope: { Button, IconQueue, DemoLayout },
  source: `() => {
  const icon = <IconQueue color="currentColor" />;

  return <DemoLayout>
    <Button iconStart={icon}>Start icon</Button>
    <Button iconEnd={icon}>End icon</Button>
    <Button iconStart={icon} iconEnd={icon}>Both icons</Button>
    <br /><br />
    <Button iconStart={icon} primary>Primary</Button>
    <Button iconStart={icon} minimal>Minimal</Button>
    <Button iconStart={icon} size="small">Small</Button>
    <Button iconStart={icon} size="large">Large</Button>
  </DemoLayout>
}`
};
