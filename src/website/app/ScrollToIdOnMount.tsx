/* @flow */
import { Component } from 'react';
import { canUseDOM } from 'exenv';

type Props = {
  children: React$Node,
  id?: string
};

export default class ScrollToIdOnMount extends Component<Props> {
  componentDidMount() {
    if (canUseDOM) {
      const element = this.props.id && document.getElementById(this.props.id);

      if (element) {
        element.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    }
  }

  render() {
    return this.props.children;
  }
}
