/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import Markdown from '../../Markdown';
import content from './componentStatus.md';
import Legend from './Legend';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

type Props = {};

const Layout: StyledComponent<{ [key: string]: any }> = styled('div')(
  ({ theme }) => ({
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
  })
);

export default function ComponentStatus(props: Props) {
  return (
    <Layout {...props}>
      <Markdown scope={{ Legend }}>{content}</Markdown>
    </Layout>
  );
}
