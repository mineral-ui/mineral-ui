/* @flow */
import React from 'react';
import { ThemeProvider } from '../themes';

import type { TextWithThemeOverrides } from './types';

const textWithThemeOverrides: TextWithThemeOverrides = ({
  appearance,
  as = 'h4',
  children,
  textComponent,
  displayName,
  theme
}) => {
  const Text = textComponent;
  const textProps = {
    appearance,
    as,
    noMargins: true
  };

  let content = <Text {...textProps}>{children}</Text>;

  if (
    theme[`${displayName}_color`] !== undefined ||
    theme[`${displayName}_fontSize`] !== undefined ||
    theme[`${displayName}_fontWeight`] !== undefined
  ) {
    const appliedAppearance = appearance || as;
    // prettier-ignore
    const getOverride = (variable) =>
      theme[`${displayName}_${variable}`] !== undefined
        ? { [`Text_${variable}_${appliedAppearance}`]: theme[`${displayName}_${variable}`] }
        : undefined;
    const textTheme = {
      ...getOverride('color'),
      ...getOverride('fontSize'),
      ...getOverride('fontWeight')
    };

    content = <ThemeProvider theme={textTheme}>{content}</ThemeProvider>;
  }

  return content;
};

export default textWithThemeOverrides;
