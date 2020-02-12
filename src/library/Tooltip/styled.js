/* @flow */
import styled from '@emotion/styled';
import Popover from '../Popover';
import { mapComponentThemes, themed } from '../themes';
import { tooltipTheme } from './themes';

import type { StyledComponent } from '@emotion/styled-base/src/utils';

export const TooltipRoot = themed(Popover)(({ theme: baseTheme }) =>
  mapComponentThemes(
    {
      name: 'Tooltip',
      theme: tooltipTheme(baseTheme)
    },
    {
      name: 'Popover',
      theme: {}
    },
    baseTheme
  )
);

export const TriggerText: StyledComponent<{ [key: string]: any }> = styled(
  'span'
)(({ theme: baseTheme }) => {
  const theme = tooltipTheme(baseTheme);

  return {
    borderBottomStyle: theme.TooltipTriggerText_borderStyle,
    borderBottomColor: theme.TooltipTriggerText_borderColor,
    borderBottomWidth: theme.TooltipTriggerText_borderWidth
  };
});
