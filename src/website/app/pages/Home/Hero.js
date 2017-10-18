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
import React, { Component } from 'react';
import { createStyledComponent } from '../../../../utils';
import Section from './Section';
import triangles from './triangles';

type Props = {
  children?: React$Node
};

type State = {};

const Root = createStyledComponent(Section, {
  '& > div': {
    paddingTop: 0
  }
});

const Canvas = createStyledComponent('div', {
  bottom: 0,
  left: 'calc(-50vw + 50%)',
  position: 'absolute',
  right: 'calc(-50vw + 50%)',
  top: 0,
  zIndex: '-1'
});

const Triangles = createStyledComponent('div', {
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0
});

export default class Hero extends Component<Props, State> {
  componentDidMount() {
    triangles();
  }

  props: Props;

  render() {
    const { children, ...restProps } = this.props;
    return (
      <Root {...restProps}>
        <Canvas id="canvas">
          <Triangles id="triangles" />
        </Canvas>
        {children}
      </Root>
    );
  }
}
