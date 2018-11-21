/* @flow */
import { ellipsis } from 'polished';
import { ie10Plus } from '../utils/cssSelectors';
import { createStyledComponent } from '../styles';
import _Tooltip from '../Tooltip';

export const TruncateRoot = createStyledComponent(
  'span',
  ({ showTooltip, theme: baseTheme }) => ({
    ...(showTooltip ? { pointerEvents: 'all' } : undefined), // Necessary because of Button Inner's pointerEvents: none
    ...ellipsis('100%'),

    '&:focus': {
      outline: `1px solid ${baseTheme.borderColor_theme_focus}`,
      outlineOffset: -1,

      [ie10Plus]: {
        outline: 'none'
      }
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
