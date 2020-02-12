/* @flow */
import styled from '@emotion/styled';
import { ellipsis } from 'polished';
import _Tooltip from '../Tooltip';
import { ie10Plus } from '../utils/cssSelectors';

import type { StyledComponent } from '@emotion/styled-base/src/utils';

export const TruncateRoot: StyledComponent<{ [key: string]: any }> = styled(
  'span'
)(({ showTooltip, theme: baseTheme }) => ({
  ...(showTooltip ? { pointerEvents: 'all' } : undefined), // Necessary because of Button Inner's pointerEvents: none
  ...ellipsis('100%'),

  '&:focus': {
    outline: `1px solid ${baseTheme.borderColor_theme_focus}`,
    outlineOffset: -1,

    [ie10Plus]: {
      outline: 'none'
    }
  }
}));

export const Tooltip: StyledComponent<{ [key: string]: any }> = styled(
  _Tooltip
)({
  // This style is only necessary because we're using Truncate as a Button child
  whiteSpace: 'normal'
});
