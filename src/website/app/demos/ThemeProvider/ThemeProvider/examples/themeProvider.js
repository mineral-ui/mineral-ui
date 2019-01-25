/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '../../../../../../library/themes';
import Sample from '../../common/Sample';

const Root = styled('div')(({ theme }) => ({
  fontFamily: theme.fontFamily,

  '& > *': {
    marginRight: '0.5rem'
  }
}));

const DemoLayout = (props: Object) => <Root {...props} />;

export default {
  id: 'theme-provider',
  title: 'Using Mineral UI Styles',
  description: `Wrap components in a \`ThemeProvider\` to apply the theme to that section of the component tree. That theme will be shallowly merged with the parent theme.`,
  scope: { DemoLayout, ThemeProvider, Sample },
  source: `
    <DemoLayout>
      <ThemeProvider theme={{ color: 'tomato' }}>
        <Sample />
      </ThemeProvider>
    </DemoLayout>
  `
};
