/* @flow */
import { createThemedComponent, mapComponentThemes } from '../themes';
import Choice, { ChoiceGroup } from '../Choice';
import { radioTheme, radioGroupTheme } from './themes';

export const RadioRoot = createThemedComponent(Choice, ({ theme: baseTheme }) =>
  mapComponentThemes(
    {
      name: 'Radio',
      theme: radioTheme(baseTheme)
    },
    {
      name: 'Choice',
      theme: {}
    },
    baseTheme
  )
);

export const RadioGroupRoot = createThemedComponent(
  ChoiceGroup,
  ({ theme: baseTheme }) =>
    mapComponentThemes(
      {
        name: 'RadioGroup',
        theme: radioGroupTheme(baseTheme)
      },
      {
        name: 'ChoiceGroup',
        theme: {}
      },
      baseTheme
    )
);
