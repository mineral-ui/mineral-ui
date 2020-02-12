/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import Tooltip from '../../../../../../library/Tooltip';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled('div')(
  ({ theme }) => ({
    fontFamily: theme.fontFamily
  })
);

const DemoLayout = (props: Object) => <Root {...props} />;

export default {
  id: 'prose',
  title: 'In Prose',
  description: `Tooltips can add information to prose.`,
  scope: { DemoLayout, Tooltip },
  source: `
    <DemoLayout>
      <p>
        Here's some prose with a <Tooltip content="Light years star stuff" isOpen usePortal>Tooltip</Tooltip> in the middle of it.
      </p>
    </DemoLayout>`
};
