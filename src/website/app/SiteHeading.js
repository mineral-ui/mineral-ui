/* @flow */
import React from 'react';
import { createStyledComponent } from '../../library/styles';
import { createThemedComponent } from '../../library/themes';
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
  SiteHeading_lineHeight_1: baseTheme.lineHeight_heading,
  SiteHeading_lineHeight_2: baseTheme.lineHeight_heading,
  SiteHeading_lineHeight_3: baseTheme.lineHeight_heading,
  SiteHeading_lineHeight_4: baseTheme.lineHeight_heading,
  SiteHeading_lineHeight_5: baseTheme.lineHeight_headingSmall,
  SiteHeading_lineHeight_6: baseTheme.lineHeight_headingSmall,

  Heading_color_1: baseTheme.SiteHeading_color_1 || baseTheme.h1_color,
  Heading_color_2: baseTheme.SiteHeading_color_2 || baseTheme.h2_color,
  Heading_color_3: baseTheme.SiteHeading_color_3 || baseTheme.h3_color,
  Heading_color_4: baseTheme.SiteHeading_color_4 || baseTheme.h4_color,
  Heading_color_5: baseTheme.SiteHeading_color_5 || baseTheme.h5_color,
  Heading_color_6: baseTheme.SiteHeading_color_6 || baseTheme.h6_color,
  Heading_fontSize_1: baseTheme.SiteHeading_fontSize_1 || baseTheme.h1_fontSize,
  Heading_fontSize_2: baseTheme.SiteHeading_fontSize_2 || baseTheme.h2_fontSize,
  Heading_fontSize_3: baseTheme.SiteHeading_fontSize_3 || baseTheme.h3_fontSize,
  Heading_fontSize_4: baseTheme.SiteHeading_fontSize_4 || baseTheme.h4_fontSize,
  Heading_fontSize_5: baseTheme.SiteHeading_fontSize_5 || baseTheme.h5_fontSize,
  Heading_fontSize_6: baseTheme.SiteHeading_fontSize_6 || baseTheme.h6_fontSize,
  Heading_fontWeight_1: baseTheme.SiteHeading_fontWeight_1 || baseTheme.h1_fontWeight,
  Heading_fontWeight_2: baseTheme.SiteHeading_fontWeight_2 || baseTheme.h2_fontWeight,
  Heading_fontWeight_3: baseTheme.SiteHeading_fontWeight_3 || baseTheme.h3_fontWeight,
  Heading_fontWeight_4: baseTheme.SiteHeading_fontWeight_4 || baseTheme.h4_fontWeight,
  Heading_fontWeight_5: baseTheme.SiteHeading_fontWeight_5 || baseTheme.h5_fontWeight,
  Heading_fontWeight_6: baseTheme.SiteHeading_fontWeight_6 || baseTheme.h6_fontWeight,
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
  color: theme.color_mouse,
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
