/* @flow */
import { Component } from 'react';
import { canUseDOM } from 'exenv';

type Props = {
  children?: any,
  id?: string
};

export default class ScrollToIdOnMount extends Component<Props> {
  componentDidMount() {
    const element =
      canUseDOM &&
      this.props.id &&
      global.document.getElementById(this.props.id);

    if (element) {
      element.scrollIntoView();
    }
  }

  render() {
    return this.props.children;
  }
}
