/* @flow */
import { themed, mapComponentThemes } from '../themes';
import Choice, { ChoiceGroup } from '../Choice';
import { radioTheme, radioGroupTheme } from './themes';

export const RadioRoot = themed(Choice)(({ theme: baseTheme }) =>
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

export const RadioGroupRoot = themed(ChoiceGroup)(({ theme: baseTheme }) =>
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
