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
  title: 'Circular Buttons',
  description:
    'Buttons can be made circular. Such Buttons should not have any text.',
  scope: { Button, IconQueue, DemoLayout },
  source: `() => {
  const icon = <IconQueue color="currentColor" />;

  return <DemoLayout>
    <Button iconStart={icon} circular aria-label="Add new" />
    {/* primary */}
    <Button iconStart={icon} circular primary aria-label="Add new" />
    {/* minimal */}
    <Button iconStart={icon} circular minimal aria-label="Add new" />
    {/* small */}
    <Button iconStart={icon} circular size="small" aria-label="Add new" />
    {/* large */}
    <Button iconStart={icon} circular size="large" aria-label="Add new" />
  </DemoLayout>
}`
};
