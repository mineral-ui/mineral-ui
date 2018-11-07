/* @flow */
import Choice from '../Choice/Choice';
import ChoiceGroup from '../Choice/ChoiceGroup';
import { createThemedComponent, mapComponentThemes } from '../themes';
import { checkboxTheme, checkboxGroupTheme } from './themes';

export const CheckboxRoot = createThemedComponent(
  Choice,
  ({ theme: baseTheme }) =>
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

export const CheckboxGroupRoot = createThemedComponent(
  ChoiceGroup,
  ({ theme: baseTheme }) =>
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
