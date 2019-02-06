/* @flow */
import Choice from '../Choice/Choice';
import ChoiceGroup from '../Choice/ChoiceGroup';
import { themed, mapComponentThemes } from '../themes';
import { checkboxTheme, checkboxGroupTheme } from './themes';

export const CheckboxRoot = themed(Choice)(({ theme: baseTheme }) =>
  mapComponentThemes(
    {
      name: 'Checkbox',
      theme: checkboxTheme(baseTheme)
    },
    {
      name: 'Choice',
      theme: {}
    },
    baseTheme
  )
);

export const CheckboxGroupRoot = themed(ChoiceGroup)(({ theme: baseTheme }) =>
  mapComponentThemes(
    {
      name: 'CheckboxGroup',
      theme: checkboxGroupTheme(baseTheme)
    },
    {
      name: 'ChoiceGroup',
      theme: {}
    },
    baseTheme
  )
);
