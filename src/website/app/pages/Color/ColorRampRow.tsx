/* @flow */
import React from 'react';
import colorable from 'colorable';
import readableColor from 'polished/lib/color/readableColor';
import { palette } from 'mineral-ui-tokens';
import styled from '@emotion/styled';

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

const Row = styled('div')(styles.row);
const BlackOnBackground = styled('span')(styles.blackonBackground);
const WhiteOnBackground = styled('span')(styles.whiteOnBackground);
const ColorName = styled('span')(styles.colorName);
const AccessibilityInfo = styled('div')(styles.accessibilityInfo);
const HSL = styled('span')(styles.hsl);

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

export default function ColorRampRow(props: Props) {
  const { name } = props;
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
