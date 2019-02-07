/* @flow */
import { mapComponentThemes } from '../themes';
import { choiceTheme, choiceGroupTheme } from '../Choice';

import {RadioThemeFn, RadioGroupThemeFn} from './types'

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
