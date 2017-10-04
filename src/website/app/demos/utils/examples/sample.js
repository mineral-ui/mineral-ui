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
import { createStyledComponent } from '../../../../../utils';

export default {
  id: 'sample-component',
  title: 'Sample Component',
  description:
    'Just a simple sample component to demonstrate the styling below.',
  scope: { createStyledComponent },
  source: `
    () => {
      const Sample = createStyledComponent('span', ({ theme }) => ({
        backgroundColor: theme.Sample_backgroundColor || 'lavender',
        color: theme.Sample_color || theme.color_text,
        display: 'inline-block',
        outline: '1px solid' + theme.borderColor,
        padding: theme.space_inset_sm
      }));

      return <Sample>Sample</Sample>
    }`
};
