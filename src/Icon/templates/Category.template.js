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

import React from 'react';
import { createStyledComponent } from '../../../../../../styles';
import Figure from '../Figure';
import FigCaption from '../FigCaption';
import FigContainer from '../FigContainer';
import Heading from '../../../../Heading';

const CategoryHeading = createStyledComponent(Heading, ({ theme }) => ({
  borderTop: `1px solid ${theme.borderColor}`,
  paddingTop: theme.space_stack_lg,
  position: 'relative',
  textTransform: 'capitalize'
}));

/* eslint-disable prettier/prettier */
{{#components}}
import {{componentName}} from '../../../../../../Icon/{{componentName}}';
{{/components}}

export default function {{componentName}}() {
  return (
    <div>
      <CategoryHeading level={4} as="h5" id="category-{{componentCategory}}">
        {{componentCategory}}
      </CategoryHeading>
      <FigContainer>
      {{#components}}
        <Figure tabIndex={0}>
          <{{componentName}} size="32"/>
          <FigCaption>
            {{componentName}}
          </FigCaption>
        </Figure>
      {{/components}}
      </FigContainer>
    </div>
  );
}
