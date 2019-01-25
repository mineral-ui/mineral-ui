/* @flow */
import React from 'react';
import styled from '@emotion/styled';

const Root = styled('div')(({ theme }) => ({
  padding: `${theme.space_inset_md}`,
  position: 'relative',

  '&:not(:last-child)': {
    paddingBottom: 0
  },

  '& > div': {
    position: 'static'
  },

  '& [role="document"]': {
    width: 'auto'
  }
}));

const DemoLayout = (props: Object) => <Root {...props} />;

export default DemoLayout;
