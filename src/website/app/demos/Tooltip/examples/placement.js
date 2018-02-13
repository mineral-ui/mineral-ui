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
import { createStyledComponent } from '../../../../../styles';
import Tooltip from '../../../../../Tooltip';
import IconDelete from 'mineral-ui-icons/IconDelete';

const DemoLayout = createStyledComponent('div', {
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export default {
  id: 'placement',
  title: 'Placement',
  description: `The \`placement\` prop determines the initial placement of the
Tooltip content relative to the trigger. The Tooltip will still react to
viewport edges and scrolling.`,
  scope: { Button, DemoLayout, IconDelete, Tooltip },
  source: `
    <DemoLayout>
      <Tooltip
        content="Light years star stuff harvesting star light citizens of distant epochs."
        isOpen
        placement="bottom">
        <Button variant="danger" iconStart={<IconDelete title="delete" />}/>
      </Tooltip>
    </DemoLayout>`
};
