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
import React from 'react';
import colorable from 'colorable';
import readableColor from 'polished/lib/color/readableColor';
import { createStyledComponent, color } from '../../../../utils';

type Props = {
  name: string
};

const styles = {
  row: ({ theme, color }) => ({
    backgroundColor: color,
    display: 'flex',
    fontSize: theme.fontSize_mouse,
    justifyContent: 'space-between',
    padding: theme.space_inset_md,
    width: '100%'
  }),
  colorName: ({ color, theme }) => ({
    color,
    display: 'block',
    fontWeight: 'bold',
    marginBottom: theme.space_stack_sm
  }),
  hsl: ({ color }) => ({
    color,
    display: 'block',
    fontWeight: 100,
    whiteSpace: 'nowrap'
  }),
  whiteOnBackground: ({ theme }) => ({
    color: 'white',
    display: 'block',
    marginBottom: theme.space_stack_sm
  }),
  blackonBackground: { color: color.black, display: 'block' },
  accessibilityInfo: {
    display: 'block',
    textAlign: 'right',
    whiteSpace: 'nowrap'
  }
};

const Row = createStyledComponent('div', styles.row);
const BlackOnBackground = createStyledComponent(
  'span',
  styles.blackonBackground
);
const WhiteOnBackground = createStyledComponent(
  'span',
  styles.whiteOnBackground
);
const ColorName = createStyledComponent('span', styles.colorName);
const AccessibilityInfo = createStyledComponent(
  'div',
  styles.accessibilityInfo
);
const HSL = createStyledComponent('span', styles.hsl);

function getBestAccessibility(access) {
  if (access.aaa) {
    return 'AAA';
  } else if (access.aa) {
    return 'AA';
  } else if (access.aaaLarge) {
    return 'AAA Large';
  } else if (access.aaLarge) {
    return 'AA Large';
  }

  // this character is a non-breaking space.
  return ' '; // should this be an explicit DNP?
}

export default function ColorRampRow({ name }: Props) {
  // the black here is the color from our theme.
  const main = color[name];
  const readable = readableColor(main);
  const accessibility = colorable({
    main,
    black: color.black,
    white: '#fff'
  });

  const hsl = accessibility.find(result => result.name === 'main').values.hsl;
  const blackonBackground = accessibility
    .find(result => result.name === 'black')
    .combinations.find(combo => combo.name === 'main');
  const whiteOnBackground = accessibility
    .find(result => result.name === 'white')
    .combinations.find(combo => combo.name === 'main');

  return (
    <Row color={main}>
      <div>
        <ColorName color={readable}>{name}</ColorName>
        <HSL color={readable}>{`hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`}</HSL>
      </div>
      <AccessibilityInfo>
        <WhiteOnBackground>
          {getBestAccessibility(whiteOnBackground.accessibility)}
        </WhiteOnBackground>
        <BlackOnBackground>
          {getBestAccessibility(blackonBackground.accessibility)}
        </BlackOnBackground>
      </AccessibilityInfo>
    </Row>
  );
}
