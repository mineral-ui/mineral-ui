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
import { createStyledComponent } from '../../styles';
// import triangles from './triangles';

type Props = {
  className?: string,
  triangles?: boolean
};

/*
 * [1] 875 is the maximum height of the home page hero. To avoid regenerating
 *     the triangles while also having those triangles be tall enough for all
 *     use cases, we must force a height on all. See also: triangles.js
 */

const Root = createStyledComponent('div', {
  bottom: 0,
  left: 'calc(-50vw + 50%)',
  position: 'absolute',
  right: 'calc(-50vw + 50%)',
  top: 0,
  zIndex: '-1',

  '& > svg': {
    height: 875, // [1]
    mixBlendMode: 'hard-light',
    width: '100%'
  }
});

let trianglesExist = false;

export default class Canvas extends Component<Props> {
  rootNode: any;
  svgNode: any;
  svgUseNode: any;

  componentDidMount() {
    if (!trianglesExist) {
      // triangles();
      // trianglesExist = true;
    }
  }

  render() {
    const { className, triangles = true, ...restProps } = this.props;
    const classes = className ? className : '';
    return (
      <Root className={`canvas ${classes}`} {...restProps}>
        {triangles && (
          <svg className="triangles">
            <use href="#triangles" />
          </svg>
        )}
      </Root>
    );
  }
}
