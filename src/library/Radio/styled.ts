/* @flow */
import { themed, mapComponentThemes } from '../themes';
import Choice, { ChoiceGroup } from '../Choice';
import { radioTheme, radioGroupTheme } from './themes';

export const RadioRoot = themed(Choice)((props) =>
  mapComponentThemes(
    {
      name: 'Radio',
      theme: radioTheme(props['theme'])
    },
    {
      name: 'Choice',
      theme: {}
    },
    props['theme']
  )
);

export const RadioGroupRoot = themed(ChoiceGroup)((props) =>
  mapComponentThemes(
    {
      name: 'RadioGroup',
      theme: radioGroupTheme(props['theme'])
    },
    {
      name: 'ChoiceGroup',
      theme: {}
    },
    props['theme']
  )
);
