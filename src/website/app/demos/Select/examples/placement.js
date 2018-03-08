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
import Select from '../../../../../Select';
import { basicData as data } from '../components/selectData';

const DemoLayout = createStyledComponent('div', {
  height: '175px',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center'
});

export default {
  id: 'placement',
  title: 'Placement',
  description: `The \`placement\` prop determines the initial placement of the
Select content relative to the trigger. The Select will still react to viewport
edges and scrolling.`,
  scope: { data, DemoLayout, Select },
  source: `
    <DemoLayout>
      <Select data={data} placement="bottom-start" isOpen />
    </DemoLayout>`
};
