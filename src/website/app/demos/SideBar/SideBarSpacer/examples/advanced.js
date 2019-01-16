/* @flow */
import DemoContent from '../../common/DemoContent';
import DemoLayout from '../../common/DemoLayout';
import {
  default as SideBar,
  SideBarPanel,
  SideBarSpacer
} from '../../../../../../library/SideBar';

export default {
  id: 'advanced',
  title: 'Advanced Usage',
  description: `Use SideBarSpacer with same props like [FlexItem](/components/flex-item) to have more possibilities for display content/panels.`,
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

      <SideBarSpacer grow={4} />

      <SideBarPanel padding="md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </SideBarPanel>
    </SideBar>

    <DemoContent />
  </DemoLayout>`
};
