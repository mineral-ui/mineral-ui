/* @flow */
import DemoContent from '../../common/DemoContent';
import DemoLayout from '../../common/DemoLayout';
import {
  default as SideBar,
  SideBarOverlay,
  SideBarPanel
} from '../../../../../../library/SideBar';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `SideBar can be used like [Flex](/components/flex) and is positioned as a layer over content by default. There can be any number of [SideBarPanels](/components/side-bar-panel) within a SideBar.`,
  scope: {
    DemoContent,
    DemoLayout,
    SideBar,
    SideBarOverlay,
    SideBarPanel
  },
  source: `
    <DemoLayout>
      <SideBar usePortal={false}>
        <SideBarPanel padding="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </SideBarPanel>
        <SideBarOverlay />
      </SideBar>

      <DemoContent />
    </DemoLayout>`
};
