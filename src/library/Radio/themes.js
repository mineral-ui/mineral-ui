/* @flow */
import { mapComponentThemes } from '../themes';
import { choiceTheme, choiceGroupTheme } from '../Choice';

// $FlowFixMe - strict theme keys incompatible with mapComponentThemes
export const radioTheme: RadioThemeFn = (baseTheme) =>
  mapComponentThemes(
    {
      name: 'Choice',
      theme: choiceTheme(baseTheme)
    },
    {
      name: 'Radio',
      theme: {
        RadioControl_borderRadius: '100%'
      }
    },
    baseTheme
  );

// $FlowFixMe - strict theme keys incompatible with mapComponentThemes
export const radioGroupTheme: RadioGroupThemeFn = (baseTheme) =>
  mapComponentThemes(
    {
      name: 'ChoiceGroup',
      theme: choiceGroupTheme(baseTheme)
    },
    {
      name: 'RadioGroup',
      theme: {}
    },
    baseTheme
  );
