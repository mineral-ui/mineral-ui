/* @flow */
import { Component } from 'react';
import Button from '../../../../../library/Button';
import Dialog from '../../../../../library/Dialog';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `TODO`,
  scope: { Button, Component, Dialog },
  source: `() => {
    class Demo extends Component {
      constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
      }

      handleClick() {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen
        }));
      }

      handleOpen() {
        this.setState({
          isOpen: true
        })
      }

      handleClose() {
        this.setState({
          isOpen: false
        })
      }

      render() {
        const { isOpen } = this.state;

        return (
          <div>
            <Button onClick={this.handleClick}>{isOpen ? 'Close' : 'Open' } Dialog</Button>
            <Dialog
              isOpen={isOpen}
              onOpen={this.handleOpen}
              onClose={this.handleClose}
              // closeOnClickOutside={false}
              // closeOnEscape={false}
              // showOverlay={false}
            />
          </div>
        )
      }
    }

    return <Demo />;
  }`
};
