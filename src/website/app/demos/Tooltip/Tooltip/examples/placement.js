/* @flow */
import styled from '@emotion/styled';
import IconDelete from 'mineral-ui-icons/IconDelete';
import React from 'react';
import Button from '../../../../../../library/Button';
import Tooltip from '../../../../../../library/Tooltip';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled('div')({
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const DemoLayout = (props: Object) => <Root {...props} />;

export default {
  id: 'placement',
  title: 'Placement',
  description: `The \`placement\` prop determines the initial placement of the
Tooltip content relative to the trigger. The Tooltip will still react to
viewport edges and scrolling.`,
  scope: { Button, DemoLayout, IconDelete, Tooltip },
  source: `
    <DemoLayout>
      <Tooltip
        content="Light years star stuff harvesting star light citizens of distant epochs."
        isOpen
        placement="bottom">
        <Button variant="danger" iconStart={<IconDelete title="delete" />}/>
      </Tooltip>
    </DemoLayout>`
};
