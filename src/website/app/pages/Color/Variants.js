import React from 'react';
import { createStyledComponent } from '../../../../utils';
import Button from '../../../../Button';

const Root = createStyledComponent('div', ({ theme }) => ({
  '& > button': {
    marginRight: theme.spacing_single,
    marginBottom: theme.spacing_single
  }
}));

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
