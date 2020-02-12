/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import Button from '../../../../../../library/Button';
import Popover from '../../../../../../library/Popover';
import { pxToEm } from '../../../../../../library/styles';
import { ThemeProvider } from '../../../../../../library/themes';
import DemoContent from '../../common/DemoContent';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled('div')({
  paddingBottom: pxToEm(130)
});

const DemoLayout = (props: Object) => <Root {...props} />;

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Popovers support right-to-left (RTL) languages. The placement of
the content as well as the content itself will be reversed when the
\`direction\` theme variable is set to \`rtl\`.`,
  scope: { Button, DemoContent, DemoLayout, Popover, ThemeProvider },
  source: `
    <DemoLayout dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Popover content={<DemoContent />} isOpen placement="bottom-start">
          <Button>Open Popover</Button>
        </Popover>
      </ThemeProvider>
    </DemoLayout>`
};
