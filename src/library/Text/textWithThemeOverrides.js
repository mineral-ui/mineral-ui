/* @flow */
import React from 'react';
import { ThemeProvider } from '../themes';

type Arg = {
  appearance?: string,
  children: React$Node,
  displayName: string,
  element?: string,
  textComponent: React$ComponentType<*>,
  theme: Object
};

const textWithThemeOverrides = ({
  appearance,
  children,
  textComponent,
  element = 'h4',
  displayName,
  theme
}: Arg) => {
  const Text = textComponent;
  const textProps = {
    appearance,
    element,
    noMargins: true
  };

  let content = <Text {...textProps}>{children}</Text>;

  if (
    theme[`${displayName}_color`] !== undefined ||
    theme[`${displayName}_fontSize`] !== undefined ||
    theme[`${displayName}_fontWeight`] !== undefined
  ) {
    const appliedAppearance = appearance || element;
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
