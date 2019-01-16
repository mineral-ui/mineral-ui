/* @flow */
import { Component } from 'react';
import Button from '../../../../../../library/Button';
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
  description: `Use SideBarOverlay as child of [SideBar](/components/side-bar). Use \`show\` to show/hide it.`,
  scope: {
    Button,
    Component,
    DemoContent,
    DemoLayout,
    SideBar,
    SideBarOverlay,
    SideBarPanel
  },
  source: `() => {
    class Demo extends Component {
      constructor(props) {
        super(props);

        this.state = {
          show: true
        };

        this.toggleShow = this.toggleShow.bind(this);
      }

      toggleShow() {
        this.setState(prevState => ({
          show: !prevState.show
        }));
      }

      render() {
        const { show } = this.state;

        return (
          <DemoLayout>
            <SideBar usePortal={false} >
              <SideBarPanel padding="md">
                <Button onClick={this.toggleShow}>{show ? 'Hide Overlay' : 'Show Overlay'}</Button>
              </SideBarPanel>

              <SideBarOverlay show={show} />
            </SideBar>

            <DemoContent />
          </DemoLayout>
        )
      }
    }

    return <Demo />;
  }`
};
