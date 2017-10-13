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
import { ParallaxProvider } from 'react-scroll-parallax';
import { createStyledComponent } from '../../../../styles';
import Rock from './Rock';

type Props = {
  showRockPile?: boolean
};

const Root = createStyledComponent('div', {
  position: 'relative'
});

export default class Rocks extends Component<Props> {
  render() {
    const { showRockPile, ...restProps } = this.props;
    return (
      <ParallaxProvider>
        <Root {...restProps}>
          {showRockPile && <Rock type="rockpile" size={300} />}
          <Rock
            offsetYMax={showRockPile ? 420 : 270}
            type="ruby"
            size={75}
            float
            position={{ left: 25, bottom: showRockPile ? 360 : 150 }}
          />
          <Rock
            offsetYMax={showRockPile ? 360 : 100}
            type="gold"
            size={75}
            float
            position={{ left: 105, bottom: showRockPile ? 330 : 50 }}
          />
          <Rock
            offsetYMax={showRockPile ? 500 : 130}
            type="tourmaline"
            size={75}
            float
            position={{ left: 190, bottom: showRockPile ? 400 : 110 }}
          />
        </Root>
      </ParallaxProvider>
    );
  }
}
