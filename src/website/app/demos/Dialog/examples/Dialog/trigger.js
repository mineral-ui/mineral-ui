/* @flow */
import { Component } from 'react';
import Button from '../../../../../../library/Button';
import Dialog from '../../../../../../library/Dialog';
import Text from '../../../../../../library/Text';

export default {
  id: 'trigger',
  title: 'Trigger',
  description: `Toggle the display of a Dialog with the \`isOpen\` prop.`,
  scope: {
    Button,
    Component,
    Dialog,
    Text
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
            </Dialog>
          </div>
        )
      }
    }

    return <Demo />;
  }`
};
