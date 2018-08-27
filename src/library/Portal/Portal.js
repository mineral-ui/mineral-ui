/* @flow */
import { Children, Component } from 'react';
import { canUseDOM } from 'exenv';
import {
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer
} from 'react-dom';

type Props = {
  children: React$Node,
  callback?: () => void
};

export default class Portal extends Component<Props> {
  content: React$Element<*>;

  node: ?HTMLElement;

  componentDidMount() {
    this.createPortal();
    this.renderIntoPortal();
  }

  componentDidUpdate() {
    this.renderIntoPortal();
  }

  componentWillUnmount() {
    this.closePortal();
  }

  render() {
    return null;
  }

  renderIntoPortal() {
    if (canUseDOM) {
      const { children, callback } = this.props;
      const content = Children.only(children);

      this.content = unstable_renderSubtreeIntoContainer(
        this,
        content,
        this.node,
        callback
      );
    }
  }

  createPortal() {
    if (canUseDOM) {
      this.node = global.document.createElement('div');
      global.document.body.appendChild(this.node);
    }
  }

  closePortal() {
    if (canUseDOM) {
      unmountComponentAtNode(this.node);
      if (
        global.document.body.contains &&
        global.document.body.contains(this.node)
      ) {
        global.document.body.removeChild(this.node);
      }
    }
  }
}
