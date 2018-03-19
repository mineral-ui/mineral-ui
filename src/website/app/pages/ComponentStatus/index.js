/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../library/styles';
import Markdown from '../../Markdown';
import Legend from './Legend';
import content from './componentStatus.md';

type Props = {};

const Layout = createStyledComponent('div', ({ theme }) => ({
  '& table': {
    maxWidth: '40em'
  },
  '& th:last-child, & td:last-child': {
    textAlign: 'center',
    width: '6em'
  },
  // This will have to be updated if there are more intro paragraphs
  // in the markdown for this page
  '& p:nth-of-type(2)': {
    marginBottom: theme.space_stack_xxl,
    '@media(max-width: 45em)': {
      marginBottom: theme.space_stack_lg
    }
  }
}));

export default function ComponentStatus(props: Props) {
  return (
    <Layout {...props}>
      <Markdown scope={{ Legend }}>{content}</Markdown>
    </Layout>
  );
}
