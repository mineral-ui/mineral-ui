/* @flow */
import Choice from '../Choice/Choice';
import ChoiceGroup from '../Choice/ChoiceGroup';
import { themed, mapComponentThemes } from '../themes';
import { checkboxTheme, checkboxGroupTheme } from './themes';

export const CheckboxRoot = themed(Choice)((props) =>
  mapComponentThemes(
    {
      name: 'Checkbox',
      theme: checkboxTheme(props['theme'])
    },
    {
      name: 'Choice',
      theme: {}
    },
    props['theme']
  )
);

export const CheckboxGroupRoot = themed(ChoiceGroup)((props) =>
  mapComponentThemes(
    {
      name: 'CheckboxGroup',
      theme: checkboxGroupTheme(props['theme'])
    },
    {
      name: 'ChoiceGroup',
      theme: {}
    },
    props['theme']
  )
);
