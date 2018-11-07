/* @flow */
import { ellipsis } from 'polished';
import { createStyledComponent } from '../styles';
import _Tooltip from '../Tooltip';

export const TruncateRoot = createStyledComponent(
  'span',
  ({ theme: baseTheme }) => ({
    pointerEvents: 'all', // Necessary because of Button Inner's pointerEvents: none
    ...ellipsis('100%'),

    '&:focus': {
      outline: `1px solid ${baseTheme.color_theme}`,
      outlineOffset: -1
    }
  }),
  {
    displayName: 'Truncate'
  }
);

export const Tooltip = createStyledComponent(_Tooltip, {
  // This style is only necessary because we're using Truncate as a Button child
  whiteSpace: 'normal'
});
