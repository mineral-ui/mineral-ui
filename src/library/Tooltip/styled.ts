/* @flow */
import styled from '@emotion/styled';
import { themed, mapComponentThemes } from '../themes';
import Popover from '../Popover';
import { tooltipTheme } from './themes';

export const TooltipRoot = themed(Popover)((props) =>
  mapComponentThemes(
    {
      name: 'Tooltip',
      theme: tooltipTheme(props['theme'])
    },
    {
      name: 'Popover',
      theme: {}
    },
    props['theme']
  )
);

export const TriggerText = styled('span')(({ theme: baseTheme }) => {
  const theme = tooltipTheme(baseTheme);

  return {
    borderBottomStyle: theme.TooltipTriggerText_borderStyle,
    borderBottomColor: theme.TooltipTriggerText_borderColor,
    borderBottomWidth: theme.TooltipTriggerText_borderWidth
  };
});
