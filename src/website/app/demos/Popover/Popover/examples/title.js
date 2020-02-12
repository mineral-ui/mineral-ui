/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import Button from '../../../../../../library/Button';
import Popover from '../../../../../../library/Popover';
import DemoContent from '../../common/DemoContent';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled('div')({
  padding: '5em 0'
});

const DemoLayout = (props: Object) => <Root {...props} />;

export default {
  id: 'title',
  title: 'Title and Subtitle',
  description: `Formatted titles render above any other content if provided.
Subtitles are only be rendered if the \`title\` attribute is present.`,
  scope: { Button, DemoContent, DemoLayout, Popover },
  source: `
    <DemoLayout>
      <Popover
        content={<DemoContent />}
        placement="right"
        subtitle="Subtitle"
        title="Title"
        isOpen>
        <Button>Open Popover</Button>
      </Popover>
    </DemoLayout>`
};
