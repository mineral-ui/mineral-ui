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
  Heading_fontWeight_2: baseTheme.fontWeight_bold,
  Heading_fontWeight_3: baseTheme.fontWeight_bold,
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
