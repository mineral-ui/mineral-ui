/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../library/styles';
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

export default function DocBestPractices(props: Props) {
  const { practices } = props;
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
