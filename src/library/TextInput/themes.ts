/* @flow */
import { mapComponentThemes } from '../themes';
import { fauxControlTheme } from '../FauxControl';

import type { TextInputThemeFn } from './types';

// $FlowFixMe - strict theme keys incompatible with mapComponentThemes
export const textInputTheme: TextInputThemeFn = (baseTheme) =>
  mapComponentThemes(
    {
      name: 'FauxControl',
      theme: fauxControlTheme(baseTheme)
    },
    {
      name: 'TextInput',
      theme: {
        TextInput_height_small: baseTheme.size_small,
        TextInput_height_medium: baseTheme.size_medium,
        TextInput_height_large: baseTheme.size_large,
        TextInput_height_jumbo: baseTheme.size_jumbo,

        TextInputIcon_color: baseTheme.color_gray_40
      }
    },
    baseTheme
  );
