/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
  props: Props;

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
