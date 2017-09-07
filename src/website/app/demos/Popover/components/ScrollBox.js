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
import React, { Children, cloneElement, PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import { createStyledComponent } from '../../../../../utils';
import Button from '../../../../../Button';

type Props = {
  children: MnrlReactNode,
  autoCenter?: boolean
};

const Root = createStyledComponent('div', {
  position: 'relative'
});

const ScrollArea = createStyledComponent('div', {
  backgroundColor: 'aliceblue',
  height: '360px',
  overflow: 'auto',
  position: 'relative'
});

const ScrollContent = createStyledComponent('div', {
  padding: '1000px 200vw'
});

const Recenter = createStyledComponent(Button, {
  left: 0,
  position: 'absolute',
  top: 0
});

export default class ScrollBox extends PureComponent {
  static defaultProps = {
    autoCenter: true
  };

  props: Props;

  scrollArea: React$Component<*, *, *>;

  scrollTarget: React$Component<*, *, *>;

  componentDidMount() {
    if (this.props.autoCenter) {
      this.scrollToCenter();
    }
  }

  render() {
    const { children } = this.props;
    const scrollTarget = cloneElement(Children.only(children), {
      ref: node => {
        this.scrollTarget = node;
      }
    });
    return (
      <Root>
        <ScrollArea
          ref={node => {
            this.scrollArea = node;
          }}>
          <ScrollContent>
            {scrollTarget}
          </ScrollContent>
        </ScrollArea>
        <Recenter onClick={this.scrollToCenter} minimal size="small">
          Re-center
        </Recenter>
      </Root>
    );
  }

  scrollToCenter = () => {
    /* eslint-disable react/no-find-dom-node */
    const scrollArea = findDOMNode(this.scrollArea);
    const scrollTarget = findDOMNode(this.scrollTarget);
    if (
      scrollArea &&
      scrollTarget &&
      scrollArea instanceof HTMLElement &&
      scrollTarget instanceof HTMLElement
    ) {
      scrollArea.scrollTop =
        scrollTarget.offsetTop - scrollArea.clientHeight / 2;
      scrollArea.scrollLeft =
        scrollTarget.offsetLeft - scrollArea.clientWidth / 2;
    }
  };
}
