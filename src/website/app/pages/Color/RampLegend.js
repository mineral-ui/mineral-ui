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
import ColorRampRow from './ColorRampRow';
import { createStyledComponent, pxToEm } from '../../../../utils';

const getBadges = () => {
  return [1, 2, 3, 4].map(num => {
    const Badge = createStyledComponent('span', ({ theme }) => ({
      backgroundColor: theme.color_gray_30,
      borderRadius: theme.size_small,
      fontSize: theme.fontSize_mouse,
      height: theme.size_small,
      lineHeight: theme.fontSize_mouse,
      paddingTop: pxToEm(6),
      position: 'absolute',
      textAlign: 'center',
      width: theme.size_small,
      top: num === 1 || num === 2 ? 'calc(50% - 50px)' : undefined,
      right: num === 2 || num === 3 ? 0 : undefined,
      bottom: num === 3 || num === 4 ? 'calc(50% - 50px)' : undefined,
      left: num === 1 || num === 4 ? 0 : undefined,
      '@media(min-width: 60em)': {
        display: 'none'
      }
    }));

    return <Badge key={num}>{num}</Badge>;
  });
};

const legendBackground = 'blue_60';

const styles = {
  root: ({ theme }) => ({
    display: 'flex',
    marginBottom: theme.space_stack_xl,
    '@media(max-width: 60em)': {
      flexDirection: 'column',
      marginTop: `${parseFloat(theme.space_stack_sm) * 6}em`
    }
  }),
  black: {
    '&::after': {
      left: 0,
      top: 15
    }
  },
  centerColumn: {
    alignItems: 'center',
    display: 'flex',
    flex: '1 0 auto',
    position: 'relative'
  },
  column: ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(50% - 6em)',
    '& > *': {
      minHeight: 100,
      height: '50%',
      margin: 0,
      fontSize: theme.fontSize_mouse,
      padding: `${theme.space_inset_md} ${parseFloat(theme.space_inset_md) *
        2}em`,
      position: 'relative'
    },
    '& > *::after': {
      borderBottom: `1px solid ${theme.borderColor_danger_hover}`,
      content: `''`,
      position: 'absolute',
      width: theme.space_inline_lg
    },
    '@media(max-width: 60em)': {
      display: 'none'
    }
  }),
  hsl: {
    textAlign: 'right',
    '&::after': {
      top: 15,
      right: 0
    }
  },
  mobileList: ({ theme }) => ({
    fontSize: theme.fontSize_mouse,
    marginTop: `${parseFloat(theme.space_stack_sm) * 6}em`,
    paddingLeft: theme.space_inline_sm,
    ' li': {
      marginBottom: theme.space_stack_sm
    },
    '@media(min-width: 60em)': {
      display: 'none'
    }
  }),
  name: ({ theme }) => ({
    textAlign: 'right',
    '&::after': {
      right: 0,
      bottom: 15
    },
    '& > p': {
      position: 'absolute',
      bottom: 0,
      right: theme.space_inline_xl
    }
  }),
  white: ({ theme }) => ({
    '&::after': {
      bottom: 15,
      left: 0
    },
    '& > p': {
      position: 'absolute',
      bottom: 0,
      left: theme.space_inline_xl
    }
  })
};

const Root = createStyledComponent('div', styles.root);
const Black = createStyledComponent('p', styles.black);
const Column = createStyledComponent('div', styles.column);
const CenterColumn = createStyledComponent('div', styles.centerColumn);
const HSL = createStyledComponent('p', styles.hsl);
const MobileList = createStyledComponent('ol', styles.mobileList);
const Name = createStyledComponent('div', styles.name);
const White = createStyledComponent('div', styles.white);

export default function RampLegend() {
  const themeName = 'The name of the hue in the Mineral UI theme.';
  const hslDefinition =
    'The CSS Hue, Saturation & Lightness value. Hue is set by the wavelength of light, saturation is how gray the color is, and lightness is the light/dark value.';
  const whiteAccessibilityDefinition =
    'The a11y rating of white on top of this color. AA and AAA denote the minimum contrast ratio.';
  const blackAccessibilityDefinition =
    'The a11y rating of black on top of this color';

  return (
    <Root>
      <Column>
        <Name>
          <p>{themeName}</p>
        </Name>
        <HSL>{hslDefinition}</HSL>
      </Column>
      <CenterColumn>
        <ColorRampRow name={legendBackground} />
        {getBadges()}
      </CenterColumn>
      <Column>
        <White>
          <p>{whiteAccessibilityDefinition}</p>
        </White>
        <Black>{blackAccessibilityDefinition}</Black>
      </Column>
      <MobileList>
        <li>
          <strong>{'<theme>_<value>'}</strong> {themeName}
        </li>
        <li>
          <strong>White Accessibility Rating</strong>{' '}
          {whiteAccessibilityDefinition}
        </li>
        <li>
          <strong>Black Accessibility Rating</strong>{' '}
          {blackAccessibilityDefinition}
        </li>
        <li>
          <strong>hsl(H, S%, L%)</strong> {hslDefinition}
        </li>
      </MobileList>
    </Root>
  );
}
