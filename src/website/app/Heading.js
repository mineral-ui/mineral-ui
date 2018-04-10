/* @flow */
import React from 'react';
import {
  createStyledComponent,
  getNormalizedValue
} from '../../library/styles';

type Props = {
  /** element used when rendering */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  /** rendered children */
  children: React$Node,
  /** element will be styled as this level */
  level: 1 | 2 | 3 | 4 | 5 | 6
};

const componentTheme = (baseTheme: Object) => ({
  Heading_color_1: baseTheme.h1_color,
  Heading_color_2: baseTheme.h2_color,
  Heading_color_3: baseTheme.h3_color,
  Heading_color_4: baseTheme.h4_color,
  Heading_color_5: baseTheme.h5_color,
  Heading_color_6: baseTheme.h6_color,
  Heading_fontSize_1: baseTheme.h1_fontSize,
  Heading_fontSize_2: baseTheme.h2_fontSize,
  Heading_fontSize_3: baseTheme.h3_fontSize,
  Heading_fontSize_4: baseTheme.h4_fontSize,
  Heading_fontSize_5: baseTheme.h5_fontSize,
  Heading_fontSize_6: baseTheme.h6_fontSize,
  Heading_fontWeight_1: baseTheme.h1_fontWeight,
  Heading_fontWeight_2: baseTheme.h2_fontWeight,
  Heading_fontWeight_3: baseTheme.h3_fontWeight,
  Heading_fontWeight_4: baseTheme.h4_fontWeight,
  Heading_fontWeight_5: baseTheme.h5_fontWeight,
  Heading_fontWeight_6: baseTheme.h6_fontWeight,
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
    margin: `0 0 ${theme[`Heading_marginMultiplier_${level}`] *
      parseFloat(
        getNormalizedValue(
          theme.space_stack_sm,
          theme[`Heading_fontSize_${level}`]
        )
      )}em`
  };
};

export default function Heading({ as, children, level, ...restProps }: Props) {
  const rootProps = {
    level,
    ...restProps
  };
  const useAs = as ? as : `h${level}`;
  const Root = createStyledComponent(useAs, headingStyles);
  return <Root {...rootProps}>{children}</Root>;
}
