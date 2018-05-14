/* @flow */
import React, { Children, cloneElement, Component, Fragment } from 'react';
import Button from '../../../../../library/Button';

type Props = {
  children: React$Node
};

type State = {
  isOpen: boolean
};

export default class DialogDemo extends Component<Props, State> {
  state = {
    isOpen: false
  };

  handleClick = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleOpen = () => {
    this.setState({
      isOpen: true
    });
  };

  handleClose = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;
    const child = Children.only(children);
    const Dialog = cloneElement(child, {
      isOpen,
      onOpen: this.handleOpen,
      onClose: this.handleClose
    });

    return (
      <Fragment>
        <Button onClick={this.handleClick}>
          {isOpen ? 'Close' : 'Open'} Dialog
        </Button>
        {Dialog}
      </Fragment>
    );
  }
}
