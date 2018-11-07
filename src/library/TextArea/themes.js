/* @flow */
import { pxToEm } from '../styles';
import { mapComponentThemes } from '../themes';
import { fauxControlTheme } from '../FauxControl';

import type { TextAreaThemeFn } from './types';

// $FlowFixMe - strict theme keys incompatible with mapComponentThemes
export const textAreaTheme: TextAreaThemeFn = (baseTheme) =>
  mapComponentThemes(
    {
      name: 'FauxControl',
      theme: fauxControlTheme(baseTheme)
    },
    {
      name: 'TextArea',
      theme: {
        // The following padding values make appearances equivalent to TextInputs of same size when rows=1.
        // This enables usage of a TextArea as a single line input that can accept multiple lines of text.
        TextArea_paddingVertical_jumbo: pxToEm(14.5),
        TextArea_paddingVertical_large: pxToEm(8.5),
        TextArea_paddingVertical_medium: pxToEm(4.5),
        TextArea_paddingVertical_small: pxToEm(2)
      }
    },
    baseTheme
  );
