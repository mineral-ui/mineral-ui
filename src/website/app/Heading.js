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
import { createStyledComponent, getNormalizedValue } from '../../utils';
import Link from './Link';

type Props = {
  /** element used when rendering */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  /** rendered children */
  children: React$Node,
  /** if an id is provided, an anchor link will display on hover/focus */
  id?: string,
  /** element will be styled as this level */
  level: 1 | 2 | 3 | 4 | 5 | 6
};

const componentTheme = baseTheme => ({
  Heading_color_1: baseTheme.color_text,
  Heading_color_2: baseTheme.color_gray_80,
  Heading_color_3: baseTheme.color_gray_80,
  Heading_color_4: baseTheme.color_gray_80,
  Heading_color_5: baseTheme.color_text,
  Heading_color_6: baseTheme.color_gray_80,
  Heading_fontSize_1: baseTheme.fontSize_h1,
  Heading_fontSize_2: baseTheme.fontSize_h2,
  Heading_fontSize_3: baseTheme.fontSize_h3,
  Heading_fontSize_4: baseTheme.fontSize_h4,
  Heading_fontSize_5: baseTheme.fontSize_h5,
  Heading_fontSize_6: baseTheme.fontSize_h6,
  Heading_fontWeight_1: baseTheme.fontWeight_extraBold,
  Heading_fontWeight_2: baseTheme.fontWeight_semiBold,
  Heading_fontWeight_3: baseTheme.fontWeight_semiBold,
  Heading_fontWeight_4: baseTheme.fontWeight_bold,
  Heading_fontWeight_5: baseTheme.fontWeight_bold,
  Heading_fontWeight_6: baseTheme.fontWeight_regular,
  Heading_marginMultiplier_1: 6,
  Heading_marginMultiplier_2: 5,
  Heading_marginMultiplier_3: 4,
  Heading_marginMultiplier_4: 3,
  Heading_marginMultiplier_5: 3,
  Heading_marginMultiplier_6: 3,

  ...baseTheme
});

const headingStyles = ({ level, theme: baseTheme }) => {
  let theme = componentTheme(baseTheme);

  return {
    color: theme[`Heading_color_${level}`],
    fontSize: theme[`Heading_fontSize_${level}`],
    fontWeight: theme[`Heading_fontWeight_${level}`],
    margin: `${theme[`Heading_marginMultiplier_${level}`] *
      parseFloat(
        getNormalizedValue(
          theme.space_stack_sm,
          theme[`Heading_fontSize_${level}`]
        )
      )}em 0`,

    '&:hover,&:focus': {
      '& > a': {
        visibility: 'visible'
      }
    }
  };
};
const Anchor = createStyledComponent(Link, ({ theme }) => ({
  color: theme.color_caption,
  visibility: 'hidden'
}));

export default function Heading({
  as,
  children,
  id,
  level,
  ...restProps
}: Props) {
  const rootProps = {
    id,
    level,
    ...restProps
  };
  const useAs = as ? as : `h${level}`;
  const Root = createStyledComponent(useAs, headingStyles);
  return (
    <Root {...rootProps}>
      {children} {id && <Anchor href={`#${id}`}>#</Anchor>}
    </Root>
  );
}
