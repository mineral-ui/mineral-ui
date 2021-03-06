/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import Tooltip from '../../../../../../library/Tooltip';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled('div')(
  ({ theme }) => ({
    fontFamily: theme.fontFamily,

    '& > *': {
      marginRight: theme.space_inline_lg
    }
  })
);

const DemoLayout = (props: Object) => <Root {...props} />;

export default {
  id: 'cursor',
  title: 'Cursor',
  description: `Tooltips can apply any of the
[valid CSS cursor values](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor). `,
  scope: { DemoLayout, Tooltip },
  source: `
    <DemoLayout>
      <Tooltip cursor="help" content="Help">Help</Tooltip>
      <Tooltip cursor="not-allowed" content="Not Allowed">Not Allowed</Tooltip>
      <Tooltip cursor="move" content="Move">Move</Tooltip>
    </DemoLayout>`
};
