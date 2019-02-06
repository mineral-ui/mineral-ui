/* @flow */
import { mapComponentThemes } from '../themes';
import { choiceTheme, choiceGroupTheme } from '../Choice';

import { CheckboxGroupThemeFn, CheckboxThemeFn } from './types';

export const checkboxTheme: CheckboxThemeFn = (baseTheme) =>
  mapComponentThemes(
    {
      name: 'Choice',
      theme: choiceTheme(baseTheme)
    },
    {
      name: 'Checkbox',
      theme: {}
    },
    baseTheme
  );

export const checkboxGroupTheme: CheckboxGroupThemeFn = (baseTheme) =>
  mapComponentThemes(
    {
      name: 'ChoiceGroup',
      theme: choiceGroupTheme(baseTheme)
    },
    {
      name: 'CheckboxGroup',
      theme: {}
    },
    baseTheme
  );
