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
import * as Icons from 'mineral-ui-icons';
import { createStyledComponent } from '../../../../../styles';
import Figure from '../components/Figure';
import FigCaption from '../components/FigCaption';
import FigContainer from '../components/FigContainer';
import Heading from '../../../SiteHeading';

const CategoryHeading = createStyledComponent(Heading, ({ theme }) => ({
  borderTop: `1px solid ${theme.borderColor}`,
  paddingTop: theme.space_stack_lg,
  position: 'relative',
  textTransform: 'capitalize'
})).withProps({ as: 'h5', level: 4 });

const componentsByCategory: {
  [string]: Array<React$Component<*, *, *>>
} = Object.values(Icons)
  .sort()
  .reduce((acc, component) => {
    // $FlowFixMe - Flow bug: https://github.com/facebook/flow/issues/2221
    const { category } = component;
    acc[category] = (acc[category] || []).concat(component);
    return acc;
  }, {});

export default function ComponentsByCategory() {
  return (
    <div>
      {Object.entries(
        componentsByCategory
      ).map(([category, components], index) => {
        return (
          <div key={index}>
            <CategoryHeading id={`category-${category}`}>
              {category}
            </CategoryHeading>
            <FigContainer>
              {// $FlowFixMe - Flow bug: https://github.com/facebook/flow/issues/2221
              components.map((IconComponent, index) => {
                return (
                  <Figure tabIndex={0} key={index}>
                    <IconComponent size="32" />
                    <FigCaption>{IconComponent.name}</FigCaption>
                  </Figure>
                );
              })}
            </FigContainer>
          </div>
        );
      })}
    </div>
  );
}
