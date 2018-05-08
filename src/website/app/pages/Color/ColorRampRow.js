/* @flow */
import React from 'react';
import colorable from 'colorable';
import readableColor from 'polished/lib/color/readableColor';
import { palette } from 'mineral-ui-tokens';
import { createStyledComponent } from '../../../../library/styles';

type Props = {
  name: string
};

const styles = {
  row: ({ color, theme }) => ({
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
  blackonBackground: { color: palette.black, display: 'block' },
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
  const main = palette[name];
  const readable = readableColor(main);
  const accessibility = colorable({
    main,
    black: palette.black,
    white: palette.white
  });

  const hsl = accessibility.find((result) => result.name === 'main').values.hsl;
  const blackonBackground = accessibility
    .find((result) => result.name === 'black')
    .combinations.find((combo) => combo.name === 'main');
  const whiteOnBackground = accessibility
    .find((result) => result.name === 'white')
    .combinations.find((combo) => combo.name === 'main');

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
