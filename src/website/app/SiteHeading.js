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
import { createStyledComponent } from '../../styles';
import { createThemedComponent } from '../../themes';
import Heading from './Heading';
import Link from './SiteLink';

type siteHeadingProps = {
  anchor?: boolean,
  children: React$Node,
  id?: string
};

// prettier-ignore
const siteComponentTheme = baseTheme => ({
  SiteHeading_fontFamily: baseTheme.fontFamily,
  SiteHeading_lineHeight_1: baseTheme.lineHeight,
  SiteHeading_lineHeight_2: baseTheme.lineHeight,
  SiteHeading_lineHeight_3: baseTheme.lineHeight,
  SiteHeading_lineHeight_4: baseTheme.lineHeight,
  SiteHeading_lineHeight_5: baseTheme.lineHeight,
  SiteHeading_lineHeight_6: baseTheme.lineHeight,

  Heading_color_1: baseTheme.SiteHeading_color_1 || baseTheme.color_text,
  Heading_color_2: baseTheme.SiteHeading_color_2 || baseTheme.color_gray_80,
  Heading_color_3: baseTheme.SiteHeading_color_3 || baseTheme.color_gray_80,
  Heading_color_4: baseTheme.SiteHeading_color_4 || baseTheme.color_gray_80,
  Heading_color_5: baseTheme.SiteHeading_color_5 || baseTheme.color_text,
  Heading_color_6: baseTheme.SiteHeading_color_6 || baseTheme.color_gray_80,
  Heading_fontSize_1: baseTheme.SiteHeading_fontSize_1 || baseTheme.fontSize_h1,
  Heading_fontSize_2: baseTheme.SiteHeading_fontSize_2 || baseTheme.fontSize_h2,
  Heading_fontSize_3: baseTheme.SiteHeading_fontSize_3 || baseTheme.fontSize_h3,
  Heading_fontSize_4: baseTheme.SiteHeading_fontSize_4 || baseTheme.fontSize_h4,
  Heading_fontSize_5: baseTheme.SiteHeading_fontSize_5 || baseTheme.fontSize_h5,
  Heading_fontSize_6: baseTheme.SiteHeading_fontSize_6 || baseTheme.fontSize_h6,
  Heading_fontWeight_1: baseTheme.SiteHeading_fontWeight_1 || baseTheme.fontWeight_extraBold,
  Heading_fontWeight_2: baseTheme.SiteHeading_fontWeight_2 || baseTheme.fontWeight_semiBold,
  Heading_fontWeight_3: baseTheme.SiteHeading_fontWeight_3 || baseTheme.fontWeight_semiBold,
  Heading_fontWeight_4: baseTheme.SiteHeading_fontWeight_4 || baseTheme.fontWeight_bold,
  Heading_fontWeight_5: baseTheme.SiteHeading_fontWeight_5 || baseTheme.fontWeight_bold,
  Heading_fontWeight_6: baseTheme.SiteHeading_fontWeight_6 || baseTheme.fontWeight_regular,
  Heading_marginMultiplier_1: baseTheme.SiteHeading_marginMultiplier_1 || 6,
  Heading_marginMultiplier_2: baseTheme.SiteHeading_marginMultiplier_2 || 5,
  Heading_marginMultiplier_3: baseTheme.SiteHeading_marginMultiplier_3 || 4,
  Heading_marginMultiplier_4: baseTheme.SiteHeading_marginMultiplier_4 || 3,
  Heading_marginMultiplier_5: baseTheme.SiteHeading_marginMultiplier_5 || 3,
  Heading_marginMultiplier_6: baseTheme.SiteHeading_marginMultiplier_6 || 3,

  ...baseTheme
});

const siteHeadingStyles = ({ level, theme }) => ({
  fontFamily: theme.SiteHeading_fontFamily,
  lineHeight: theme[`SiteHeading_lineHeight_${level}`],

  '&:hover,&:focus': {
    '& > a': {
      visibility: 'visible'
    }
  }
});

const SiteThemedHeading = createThemedComponent(Heading, ({ theme }) => ({
  ...siteComponentTheme(theme)
}));

const SiteStyledHeading = createStyledComponent(
  SiteThemedHeading,
  siteHeadingStyles
);

const Anchor = createStyledComponent(Link, ({ theme }) => ({
  color: theme.color_caption,
  fontWeight: 'inherit',
  visibility: 'hidden'
}));

export default function SiteHeading({
  anchor = true,
  children,
  id,
  ...restProps
}: siteHeadingProps) {
  const rootProps = {
    id,
    ...restProps
  };
  return (
    <SiteStyledHeading {...rootProps}>
      {children} {anchor && id && <Anchor href={`#${id}`}>#</Anchor>}
    </SiteStyledHeading>
  );
}
