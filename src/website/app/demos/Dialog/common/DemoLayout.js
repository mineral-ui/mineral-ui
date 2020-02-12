/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled('div')(
  ({ theme }) => ({
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
  })
);

const DemoLayout = (props: Object) => <Root {...props} />;

export default DemoLayout;
