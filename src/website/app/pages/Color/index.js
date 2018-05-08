/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../library/styles';
import { type Color as ColorType } from '../../../../library/themes/generated/palette';
import Markdown from '../../Markdown';
import ColorRamp from './ColorRamp';
import RampLegend from './RampLegend';
import Variants from './Variants';
import content from './color.md';

type Props = {};

// Not generated from palette because of the opinionated order.
const baseColors: Array<ColorType | 'black'> = [
  'red',
  'magenta',
  'purple',
  'indigo',
  'blue',
  'sky',
  'teal',
  'green',
  'bronze',
  'slate',
  'dusk',
  'gray',
  'black'
];

const RampHolder = createStyledComponent('div', {
  display: 'flex',
  flexWrap: 'wrap'
});

export default function Color(props: Props) {
  return (
    <div {...props}>
      <Markdown scope={{ Variants }}>{content}</Markdown>
      <RampLegend />
      <RampHolder>
        {baseColors.map((baseColor) => (
          <ColorRamp key={baseColor} baseColor={baseColor} />
        ))}
      </RampHolder>
    </div>
  );
}
