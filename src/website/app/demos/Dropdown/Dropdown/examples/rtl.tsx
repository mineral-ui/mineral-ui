/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import { pxToEm } from '../../../../../../library/styles';
import Button from '../../../../../../library/Button';
import Dropdown from '../../../../../../library/Dropdown';
import { ThemeProvider } from '../../../../../../library/themes';
import data from '../../../Menu/common/menuData';

const Root = styled('div')({
  paddingBottom: pxToEm(130)
});

const DemoLayout = (props: Object) => <Root {...props} />;

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  description: `Dropdowns support right-to-left (RTL) languages. The placement of
the menu as well as the menu itself will be reversed when the \`direction\`
theme variable is set to \`rtl\`.`,
  scope: { Button, data, DemoLayout, Dropdown, ThemeProvider },
  source: `
    <DemoLayout dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <Dropdown data={data} isOpen>
          <Button>Menu</Button>
        </Dropdown>
      </ThemeProvider>
    </DemoLayout>`
};
