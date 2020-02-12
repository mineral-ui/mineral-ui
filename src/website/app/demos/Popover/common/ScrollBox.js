/* @flow */
import styled from '@emotion/styled';
import React, { Component, createRef } from 'react';
import Button from '../../../../../library/Button';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

type Props = {
  children: React$Node,
  autoCenter?: boolean,
  /** Height in pixels */
  height?: number
};

const Root: StyledComponent<{ [key: string]: any }> = styled('div')({
  position: 'relative'
});

const ScrollArea = styled('div')(({ height }: Object) => ({
  backgroundColor: 'aliceblue',
  height: `${height}px`,
  overflow: 'auto',
  position: 'relative'
}));

const ScrollContent = styled('div')(({ scrollAreaHeight }: Object) => ({
  height: `${parseInt(scrollAreaHeight) + 500}px`,
  width: '300vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const Recenter = styled(Button)({
  left: 0,
  position: 'absolute',
  top: 0
});

export default class ScrollBox extends Component<Props> {
  static defaultProps = {
    autoCenter: true,
    height: 360
  };

  constructor(props: Props) {
    super(props);

    this.scrollArea = createRef();
    this.scrollTarget = createRef();
  }

  props: Props;

  scrollArea: { current: any };

  scrollTarget: { current: any };

  componentDidMount() {
    if (this.props.autoCenter) {
      this.scrollToCenter();
    }
  }

  render() {
    const { children, height } = this.props;

    return (
      <Root>
        <ScrollArea ref={this.scrollArea} height={height}>
          <ScrollContent scrollAreaHeight={height}>
            <span ref={this.scrollTarget}>{children}</span>
          </ScrollContent>
        </ScrollArea>
        <Recenter onClick={this.scrollToCenter} minimal size="small">
          Re-center
        </Recenter>
      </Root>
    );
  }

  scrollToCenter = () => {
    const scrollArea = this.scrollArea.current;
    const scrollTarget = this.scrollTarget.current;

    scrollArea.scrollTop =
      scrollTarget.offsetTop +
      scrollTarget.clientHeight / 2 -
      scrollArea.clientHeight / 2;

    scrollArea.scrollLeft =
      scrollTarget.offsetLeft +
      scrollTarget.clientWidth / 2 -
      scrollArea.clientWidth / 2;
  };
}
