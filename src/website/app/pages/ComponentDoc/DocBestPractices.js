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
import { createStyledComponent } from '../../../../styles';
import DocPractice from './DocPractice';
import Section from './DocSection';
import DocSectionTitle from './DocSectionTitle';

type Props = {
  practices: Array<Object>
};

const styles = {
  grid: ({ theme }) => ({
    marginTop: theme.baseline_3
  }),
  practice: ({ theme }) => ({
    marginBottom: theme.baseline_4
  })
};

const Grid = createStyledComponent('div', styles.grid);
const Practice = createStyledComponent(DocPractice, styles.practice);

export default function DocBestPractices({ practices }: Props) {
  return (
    <Section>
      <DocSectionTitle id="best-practices">Best Practices</DocSectionTitle>
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
