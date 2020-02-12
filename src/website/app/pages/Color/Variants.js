/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import Button from '../../../../library/Button';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled('div')(
  ({ theme }) => ({
    '& > button': {
      marginRight: theme.space_inline_sm,
      marginBottom: theme.space_stack_sm
    }
  })
);

export default function Variants() {
  return (
    <Root>
      <Button variant="success" primary>
        Success
      </Button>
      <Button variant="warning" primary>
        Warning
      </Button>
      <Button variant="danger" primary>
        Danger
      </Button>
    </Root>
  );
}
