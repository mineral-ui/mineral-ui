/* @flow */
import DemoContent from '../../common/DemoContent';
import DemoLayout from '../../common/DemoLayout';
import {
  default as SideBar,
  SideBarOverlay,
  SideBarPanel
} from '../../../../../../library/SideBar';

export default {
  id: 'inline',
  title: 'Inline behaviour',
  description: `To prevent Sidebar from being positioned absolutely and to display [SideBarPanel](/components/side-bar-panels) and content side-by-side, the prop \`inline\` is used and content is used as children from SideBar. SideBar can be used like [Flex](/components/flex), so children should be [FlexItems](/components/flex-item)`,
  scope: {
    DemoContent,
    DemoLayout,
    SideBar,
    SideBarOverlay,
    SideBarPanel
  },
  source: `
    <DemoLayout>
      <SideBar inline usePortal={false}>
        <SideBarPanel padding="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </SideBarPanel>
        <SideBarOverlay />

        <DemoContent />
      </SideBar>
    </DemoLayout>`
};
