/* @flow */
import DemoContent from '../../common/DemoContent';
import DemoLayout from '../../common/DemoLayout';
import {
  default as SideBar,
  SideBarPanel,
  SideBarSpacer
} from '../../../../../../library/SideBar';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Use SideBarSpacer to fill empty space and push panel/content to the right.`,
  scope: {
    DemoContent,
    DemoLayout,
    SideBar,
    SideBarPanel,
    SideBarSpacer
  },
  source: `
  <DemoLayout>
    <SideBar usePortal={false} >
      <SideBarSpacer />

      <SideBarPanel padding="md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </SideBarPanel>
    </SideBar>

    <DemoContent />
  </DemoLayout>`
};
