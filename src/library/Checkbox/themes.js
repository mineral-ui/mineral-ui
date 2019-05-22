/* @flow */
import { mapComponentThemes } from '../themes';
import { choiceTheme, choiceGroupTheme } from '../Choice';

import type { CheckboxThemeFn, CheckboxGroupThemeFn } from './types';

import { pxToEm } from '../styles';

// $FlowFixMe - strict theme keys incompatible with mapComponentThemes
export const checkboxTheme: CheckboxThemeFn = (baseTheme) =>
  mapComponentThemes(
    {
      name: 'Choice',
      theme: choiceTheme(baseTheme)
    },
    {
      name: 'Checkbox',
      theme: {
        CheckboxControl_backgroundColor_checked: baseTheme.checkbox_backgroundColor_checked,
        CheckboxControl_backgroundColor_checkedHover: baseTheme.checkbox_backgroundColor_checkedHover,
        CheckboxControl_borderColor: baseTheme.checkbox_borderColor,
        CheckboxControl_borderColor_checked: baseTheme.checkbox_borderColor_checked,
        CheckboxControl_borderColor_checkedHover: baseTheme.checkbox_borderColor_checkedHover,
        CheckboxControl_borderColor_hover: baseTheme.checkbox_borderColor_hover,
        CheckboxControl_borderRadius: baseTheme.borderRadius_2,
        CheckboxControl_borderWidth: `${baseTheme.checkbox_borderWidth}px`,
        CheckboxControl_size: pxToEm(20),
        CheckboxText_marginHorizontal: baseTheme.space_inline_sm
      }
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
