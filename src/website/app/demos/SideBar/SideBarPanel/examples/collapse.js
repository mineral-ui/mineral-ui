/* @flow */
import { Component } from 'react';
import DemoContent from '../../common/DemoContent';
import DemoLayout from '../../common/DemoLayout';
import {
  default as SideBar,
  SideBarPanel
} from '../../../../../../library/SideBar';

export default {
  id: 'collapse',
  title: 'Collapsing',
  description: `SideBarPanel can collapse to smaller width.`,
  scope: {
    DemoContent,
    DemoLayout,
    Component,
    SideBar,
    SideBarPanel
  },
  source: `() => {
    class Demo extends Component {
      constructor(props) {
        super(props);

        this.state = {
          isCollapsed: true
        };

        this.toggleCollapse = this.toggleCollapse.bind(this);
      }

      toggleCollapse() {
        this.setState(prevState => ({
          isCollapsed: !prevState.isCollapsed
        }));
      }

      render() {
        const { isCollapsed } = this.state;

        return (
          <DemoLayout>
            <SideBar usePortal={false} >
              <SideBarPanel
                isCollapsed={isCollapsed}
                onMouseEnter={this.toggleCollapse}
                onMouseLeave={this.toggleCollapse}
                padding="md"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </SideBarPanel>
            </SideBar>

            <DemoContent />
          </DemoLayout>
        )
      }
    }

    return <Demo />;
  }`
};
