/* @flow */
import { mapComponentThemes } from '../themes';
import { dropdownTheme } from '../Dropdown';
import { textInputTheme } from '../TextInput';

import type { SelectThemeFn, SelectTriggerThemeFn } from './types';

// $FlowFixMe - strict theme keys incompatible with mapComponentThemes
export const selectTheme: SelectThemeFn = (baseTheme) =>
  mapComponentThemes(
    {
      name: 'Dropdown',
      theme: dropdownTheme(baseTheme)
    },
    {
      name: 'Select',
      theme: {}
    },
    {
      ...selectTriggerTheme(baseTheme),
      ...baseTheme
    }
  );

// $FlowFixMe - strict theme keys incompatible with mapComponentThemes
export const selectTriggerTheme: SelectTriggerThemeFn = (baseTheme) =>
  mapComponentThemes(
    {
      name: 'TextInput',
      theme: textInputTheme(baseTheme)
    },
    {
      name: 'Select',
      theme: {
        Select_height_small: baseTheme.size_small,
        Select_height_medium: baseTheme.size_medium,
        Select_height_large: baseTheme.size_large,
        Select_height_jumbo: baseTheme.size_jumbo,

        SelectIcon_color: baseTheme.icon_color_theme
      }
    },
    baseTheme
  );
