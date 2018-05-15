/* @flow */
import { Component } from 'react';
import Button from '../../../../../library/Button';
import Dialog, {
  DialogHeader,
  DialogBody,
  DialogFooter
} from '../../../../../library/Dialog';

export default {
  id: 'trigger',
  title: 'Trigger',
  description: `TODO`,
  scope: { Button, Component, Dialog, DialogBody, DialogFooter, DialogHeader },
  source: `() => {
    class Demo extends Component {
      constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };

        this.toggleDialog = this.toggleDialog.bind(this);
      }

      toggleDialog() {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen
        }));
      }

      render() {
        const { isOpen } = this.state;

        return (
          <div>
            <Button onClick={this.toggleDialog}>{isOpen ? 'Close' : 'Open' } Dialog</Button>
            <Dialog isOpen={isOpen}>
              <DialogHeader>Lorem Ipsum</DialogHeader>
              <DialogBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Viverra nam libero justo laoreet sit amet. Vitae sapien
                  pellentesque habitant morbi tristique. Posuere lorem ipsum dolor
                  sit. Vel risus commodo viverra maecenas accumsan. Id cursus
                  metus aliquam eleifend mi in nulla posuere sollicitudin. Lectus
                  mauris ultrices eros in cursus turpis. Natoque penatibus et
                  magnis dis. Eget aliquet nibh praesent tristique magna sit amet.
                  Pellentesque elit eget gravida cum sociis natoque penatibus.
                  Luctus accumsan tortor posuere ac ut consequat semper viverra.
                  Sed vulputate odio ut enim. Vivamus at augue eget arcu.
                </p>
              </DialogBody>
              <DialogFooter>
                <Button minimal size="medium" onClick={this.toggleDialog}>Cancel</Button>
                <Button primary size="medium" onClick={this.toggleDialog}>Action</Button>
              </DialogFooter>
            </Dialog>
          </div>
        )
      }
    }

    return <Demo />;
  }`
};
