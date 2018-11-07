/* @flow */
import { mapComponentThemes } from '../themes';
import { choiceTheme, choiceGroupTheme } from '../Choice';

import type { CheckboxThemeFn, CheckboxGroupThemeFn } from './types';

// $FlowFixMe - strict theme keys incompatible with mapComponentThemes
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

// $FlowFixMe - strict theme keys incompatible with mapComponentThemes
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
