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
import { createStyledComponent } from '../../../../utils';
import Heading from '../../Heading';
import Section from '../../Section';
import DocPractice from './DocPractice';

type Props = {
  practices: Array<Object>
};

const styles = {
  grid: ({ theme }) => ({
    '@media(min-width: 45em)': {
      display: 'grid',
      gridAutoFlow: 'column',
      gridTemplateColumns: '1fr 1fr',
      gridColumnGap: theme.space_inline_xl
    }
  }),
  practice: ({ theme, type }) => ({
    gridColumnStart: type === 'do' ? 1 : 2,
    marginBottom: `${parseFloat(theme.space_stack_xl) * 2}em`
  })
};

const Grid = createStyledComponent('div', styles.grid);
const Practice = createStyledComponent(DocPractice, styles.practice);

export default function DocBestPractices({ practices }: Props) {
  return (
    <Section>
      <Heading level={3} id="best-practices">
        Best Practices
      </Heading>
      <Grid>
        {practices.map((practice, index) => (
          <Practice key={index} {...practice}>
            {practice.description}
          </Practice>
        ))}
      </Grid>
    </Section>
  );
}
