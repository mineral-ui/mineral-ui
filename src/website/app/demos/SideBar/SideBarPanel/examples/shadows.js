/* @flow */
import DemoContent from '../../common/DemoContent';
import DemoLayout from '../../common/DemoLayout';
import {
  default as SideBar,
  SideBarOverlay,
  SideBarPanel
} from '../../../../../../library/SideBar';

export default {
  id: 'shadows',
  title: 'Shadows',
  description: `SideBarPanel has shadows by default, but these can be disabled by setting \`hasShadows\` false.`,
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
          SideBarPanel with shadows
        </SideBarPanel>

        <DemoContent />

        <SideBarPanel hasShadows={false} padding="md">
          SideBarPanel without shadows
        </SideBarPanel>
      </SideBar>
    </DemoLayout>`
};
