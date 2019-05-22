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
        TextInput_height_small: baseTheme.input_size_small,
        TextInput_height_medium: baseTheme.input_size_medium,
        TextInput_height_large: baseTheme.input_size_large,
        TextInput_height_jumbo: baseTheme.input_size_jumbo,

        TextInputIcon_color: baseTheme.color_gray_40
      }
    },
    baseTheme
  );
