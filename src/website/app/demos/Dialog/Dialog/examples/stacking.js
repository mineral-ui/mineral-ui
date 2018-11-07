/* @flow */
import { Component } from 'react';
import Button from '../../../../../../library/Button';
import Dialog from '../../../../../../library/Dialog';
import Text from '../../../../../../library/Text';

export default {
  id: 'stacking',
  title: 'Stacking',
  description: `This is broken in at least these ways:

1. Opening the stacked Dialog jumps to the top of the page (because its focusing
  \`body\`?)
1. Only the top-most overlay should display
1. Closing a stacked Dialog turns off focus trapping rather than adjusting its
   target`,
  hideFromProd: true,
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
          isOpen: false,
          isSecondOpen: false,
        };

        this.toggleDialog = this.toggleDialog.bind(this);
        this.toggleSecondDialog = this.toggleSecondDialog.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSecondClose = this.handleSecondClose.bind(this);
      }

      toggleDialog() {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen
        }));
      }

      toggleSecondDialog() {
        this.setState(prevState => ({
          isSecondOpen: !prevState.isSecondOpen
        }));
      }

      handleClose() {
        this.setState(prevState => ({
          isOpen: false
        }));
      }

      handleSecondClose() {
        this.setState(prevState => ({
          isSecondOpen: false
        }));
      }

      render() {
        const { isOpen, isSecondOpen } = this.state;

        return (
          <div>
            <Button onClick={this.toggleDialog}>{isOpen ? 'Close' : 'Open' } Dialog</Button>
            <Dialog
              appSelector="#app"
              title="Lorem ipsum dolor sit amet"
              actions={[
                { onClick: this.toggleDialog, text: 'Cancel' },
                { onClick: this.toggleSecondDialog, text: 'Open Second Dialog' }
              ]}
              isOpen={isOpen}
              onClose={this.handleClose}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </Dialog>
            <Dialog
              appSelector="#app"
              title="Lorem ipsum dolor sit amet"
              actions={[
                { onClick: this.toggleSecondDialog, text: 'Cancel' },
                { onClick: this.toggleSecondDialog, text: 'Action' }
              ]}
              isOpen={isSecondOpen}
              onClose={this.handleSecondClose}>
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
