/* @flow */
import { Component } from 'react';
import Button from '../../../../../../library/Button';
import ButtonGroup from '../../../../../../library/ButtonGroup';
import DemoContent from '../../common/DemoContent';
import DemoLayout from '../../common/DemoLayout';
import { FlexItem } from '../../../../../../library/Flex';
import {
  default as SideBar,
  SideBarOverlay,
  SideBarPanel,
  SideBarSpacer
} from '../../../../../../library/SideBar';

export default {
  id: 'trigger',
  title: 'Trigger',
  description: `Toggle the display of a SideBarPanel with the \`isOpen\` prop. Depending on the position, the fade-in animation is different: If SideBarPanel is the first or last child of [SideBar](/components/side-bar), the panel moves into the image from the left or right, otherwise it fades in in the middle.`,
  scope: {
    Button,
    ButtonGroup,
    Component,
    DemoContent,
    DemoLayout,
    FlexItem,
    SideBar,
    SideBarOverlay,
    SideBarPanel,
    SideBarSpacer
  },
  source: `() => {
    class Demo extends Component {
      constructor(props) {
        super(props);

        this.state = {
          isOpenLeft: false,
          isOpenCenter: false,
          isOpenRight: false
        };

        this.toggleSideBarLeft = this.toggleSideBarLeft.bind(this);
        this.toggleSideBarCenter = this.toggleSideBarCenter.bind(this);
        this.toggleSideBarRight = this.toggleSideBarRight.bind(this);
      }

      toggleSideBarLeft() {
        this.setState(prevState => ({
          isOpenLeft: !prevState.isOpenLeft
        }));
      }

      toggleSideBarCenter() {
        this.setState(prevState => ({
          isOpenCenter: !prevState.isOpenCenter
        }));
      }

      toggleSideBarRight() {
        this.setState(prevState => ({
          isOpenRight: !prevState.isOpenRight
        }));
      }

      render() {
        const { isOpenLeft, isOpenCenter, isOpenRight } = this.state;

        return (
          <DemoLayout>
            <SideBar usePortal={false}>
              <SideBarPanel isOpen={isOpenLeft} padding="md">
                <Button fullWidth onClick={this.toggleSideBarLeft}>Close</Button>
              </SideBarPanel>

              <SideBarOverlay show={isOpenLeft || isOpenCenter || isOpenRight} />

              <SideBarSpacer />
              
              <SideBarPanel isOpen={isOpenCenter} padding="md">
                <Button fullWidth onClick={this.toggleSideBarCenter}>Close</Button>
              </SideBarPanel>

              <SideBarSpacer />
              
              <SideBarPanel isOpen={isOpenRight} padding="md">
                <Button fullWidth onClick={this.toggleSideBarRight}>Close</Button>
              </SideBarPanel>
            </SideBar>

            <FlexItem grow={1} padding="md">
              <ButtonGroup fullWidth aria-label="buttons">
                <Button onClick={this.toggleSideBarLeft}>Left</Button>
                <Button onClick={this.toggleSideBarCenter}>Center</Button>
                <Button onClick={this.toggleSideBarRight}>Right</Button>
              </ButtonGroup>
            </FlexItem>
          </DemoLayout>
        )
      }
    }

    return <Demo />;
  }`
};
