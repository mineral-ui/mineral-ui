/* @flow */
import DemoContent from '../../common/DemoContent';
import DemoLayout from '../../common/DemoLayout';
import {
  default as SideBar,
  SideBarOverlay,
  SideBarPanel,
  SideBarSpacer
} from '../../../../../../library/SideBar';

export default {
  id: 'order-of-sections',
  title: 'Order Of Sections',
  description: `Use the order of contents to align [SideBarPanel](/components/side-bar-panel). Use [SideBarSpacers](/components/side-bar-spacer) to fill empty spaces. Note that SideBarPanel must be at the first or last position of the children to display the correct animation when [fade](/components/side-bar-panel#trigger).`,
  scope: {
    DemoContent,
    DemoLayout,
    SideBar,
    SideBarOverlay,
    SideBarPanel,
    SideBarSpacer
  },
  source: `
    <DemoLayout>
      <SideBar usePortal={false}>
        <SideBarPanel padding="md">
          Left align
        </SideBarPanel>

        <SideBarOverlay />

        <SideBarSpacer />
        
        <SideBarPanel padding="md">
          Center
        </SideBarPanel>

        <SideBarSpacer />
        
        <SideBarPanel padding="md">
          Right align
        </SideBarPanel>
      </SideBar>

      <DemoContent />
    </DemoLayout>`
};
