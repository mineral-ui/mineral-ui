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
import React, { Children, cloneElement, Component } from 'react';
import { findDOMNode } from 'react-dom';
import { createStyledComponent } from '../../../../../styles';
import Button from '../../../../../Button';

type Props = {
  children: React$Node,
  autoCenter?: boolean,
  /** Height in pixels */
  height?: number
};

const Root = createStyledComponent('div', {
  position: 'relative'
});

const ScrollArea = createStyledComponent('div', ({ height }: Object) => ({
  backgroundColor: 'aliceblue',
  height: `${height}px`,
  overflow: 'auto',
  position: 'relative'
}));

const ScrollContent = createStyledComponent(
  'div',
  ({ scrollAreaHeight }: Object) => ({
    padding: `${parseInt(scrollAreaHeight) + 200}px 200vw`
  })
);

const Recenter = createStyledComponent(Button, {
  left: 0,
  position: 'absolute',
  top: 0
});

export default class ScrollBox extends Component<Props> {
  static defaultProps = {
    autoCenter: true,
    height: 360
  };

  props: Props;

  scrollArea: ?React$Component<*, *>;

  scrollTarget: ?React$Component<*, *>;

  componentDidMount() {
    if (this.props.autoCenter) {
      this.scrollToCenter();
    }
  }

  render() {
    const { children, height } = this.props;
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
          }}
          height={height}>
          <ScrollContent scrollAreaHeight={height}>
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
        scrollTarget.offsetTop +
        scrollTarget.clientHeight / 2 -
        scrollArea.clientHeight / 2;
      scrollArea.scrollLeft =
        scrollTarget.offsetLeft +
        scrollTarget.clientWidth / 2 -
        scrollArea.clientWidth / 2;
    }
  };
}
