/* @flow */
import { Component } from 'react';
import Button from '../../../../../../library/Button';
import Dialog from '../../../../../../library/Dialog';
import Dropdown from '../../../../../../library/Dropdown';
import Flex, { FlexItem } from '../../../../../../library/Flex';
import Popover from '../../../../../../library/Popover';
import Select from '../../../../../../library/Select';
import Text from '../../../../../../library/Text';
import Tooltip from '../../../../../../library/Tooltip';
import { statesData as data } from '../../../Select/components/selectData';

export default {
  id: 'composition',
  title: 'Composition',
  hideFromProd: true,
  scope: {
    Button,
    Component,
    data,
    Dialog,
    Dropdown,
    Flex,
    FlexItem,
    Popover,
    Select,
    Text,
    Tooltip
  },
  source: `() => {
    class Demo extends Component {
      constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };

        this.toggleDialog = this.toggleDialog.bind(this);
        this.handleClose = this.handleClose.bind(this);
      }

      toggleDialog() {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen
        }));
      }

      handleClose() {
        this.setState(prevState => ({
          isOpen: false
        }));
      }

      render() {
        const { isOpen } = this.state;

        return (
          <div>
            <Button onClick={this.toggleDialog}>{isOpen ? 'Close' : 'Open' } Dialog</Button>
            <Dialog
              appSelector="#app"
              title="Lorem ipsum dolor sit amet"
              actions={[
                { onClick: this.toggleDialog, text: 'Cancel' },
                { onClick: this.toggleDialog, text: 'Action' }
              ]}
              isOpen={isOpen}
              onClose={this.handleClose}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>

              <Flex>
                <FlexItem>
                  <Popover content="Popover"><Button>Popover</Button></Popover>
                </FlexItem>
                <FlexItem>
                  <Tooltip content="Tooltip"><Button>Tooltip</Button></Tooltip>
                </FlexItem>
                <FlexItem>
                  <Dropdown data={[{ text: 'Dropdown' }]}><Button>Dropdown</Button></Dropdown>
                </FlexItem>
                <FlexItem>
                  <Select data={data} name="state" />
                </FlexItem>
              </Flex>

            </Dialog>
          </div>
        )
      }
    }

    return <Demo />;
  }`
};
