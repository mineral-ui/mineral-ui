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
import { createStyledComponent, mineralTheme } from '../../../../../../utils';
import Card, { CardBlock, CardTitle } from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'complex-title',
  title: 'Complex Title and Subtitle',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description:
    'Both the title and subtitle can contain a simple string or any HTML/React elements.',
  scope: { Card, CardTitle, CardBlock, createStyledComponent, DemoLayout },
  source: `
    () => {
      const Status = createStyledComponent('span', {
        color: 'red',
        fontSize: '0.6em',

        '&:before': {
          backgroundColor: 'red',
          borderRadius: '0.8em',
          content: '""',
          display: 'inline-block',
          height: '0.8em',
          marginRight: '0.5em',
          position: 'relative',
          top: '0.1em',
          width: '0.8em'
        }
      });

      return (
        <DemoLayout>
          <Card>
            <CardTitle subtitle={<em>Subtitle here</em>}>
              Card Title<br />
              <Status>Status alert</Status>
            </CardTitle>
            <CardBlock>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
              pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
              interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            </CardBlock>
          </Card>
        </DemoLayout>
      );
    }`
};
