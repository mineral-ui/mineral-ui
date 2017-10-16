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
import triangles from './triangles';

type Props = {};

type State = {};

const Container = createStyledComponent('div', {
  position: 'relative'
});

const Output = createStyledComponent('div', {
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0
});

function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);

  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
    h = Math.round(h * 360);

    s = Math.round(s * 100);
    l = Math.round(l * 100);
  }

  return [h, s, l];
}

const shiny = () => {
  const transition = 1;

  // triangle.style.fill = newTriangleFillHSL;
  // const triangleStyle = triangle.getAttribute('style');
  // console.log('triangleStyle', triangleStyle);
  // const toReplace = triangleStyle.match(/fill:\s?(#[\S]{1,6})/)[1];
  // const newTriangleStyle = triangleStyle.replace(toReplace, newTriangleFillHSL);
  // console.log('newTriangleStyle', newTriangleStyle);

  const styles = document.createElement('style');
  document.body.append(styles);

  // styles.innerHTML = `
  //   #${triangle.getAttribute('id')} {
  //     fill: ${newTriangleFillHSL} !important;
  //   }
  // `;

  // debugger;

  setInterval(() => {
    const triangles = document.querySelectorAll('#output polygon');
    const triangleCount = triangles.length;
    console.log('count', triangleCount);
    const triangle = triangles[Math.floor(Math.random() * triangles.length)];
    console.log('triangle', triangle);
    const triangleFill = triangle.style.fill;
    console.log('triangleFill', triangleFill);
    const triangleFillHSL = rgbToHsl(
      parseFloat(triangleFill.split(',')[0].split('(')[1]),
      parseFloat(triangleFill.split(',')[1]),
      parseFloat(triangleFill.split(',')[2].split(')')[0])
    );
    console.log('triangleFillHSL', triangleFillHSL);
    const h = triangleFillHSL[0];
    const s = `${triangleFillHSL[1]}%`;
    const l = `${Math.min(Math.round(triangleFillHSL[2] + 10), 100)}%`;
    const newTriangleFillHSL = `hsl(${h}, ${s}, ${l})`;
    console.log('newTriangleFillHSL', newTriangleFillHSL);

    styles.innerHTML = `
      #${triangle.getAttribute('id')} {
        fill: ${newTriangleFillHSL} !important;
        transition: fill ${transition}s;
      }
    `;
    setTimeout(() => {
      styles.innerHTML = `
        #${triangle.getAttribute('id')} {
          transition: fill ${transition}s;
        }
      `;
    }, transition * 1000);
  }, transition * 2 * 1000);
};

export default class Background extends Component<Props, State> {
  componentDidMount() {
    triangles();
    shiny();
  }

  props: Props;

  render() {
    console.log('Background render');
    return (
      <Container id="container" {...this.props}>
        <Output id="output" />
      </Container>
    );
  }
}
