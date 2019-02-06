/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import Button from '../../../../../../library/Button';
import DemoContent from '../../common/DemoContent';
import Popover from '../../../../../../library/Popover';

const Root = styled('div')({
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
