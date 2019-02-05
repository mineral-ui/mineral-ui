/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import Tooltip from '../../../../../../library/Tooltip';

const Root = styled('div')(({ theme }) => ({
  fontFamily: theme.fontFamily
}));

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
