/* @flow */
import { createStyledComponent } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import Popover from '../Popover';
import { tooltipTheme } from './themes';

export const TooltipRoot = createThemedComponent(
  Popover,
  ({ theme: baseTheme }) =>
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

export const TriggerText = createStyledComponent(
  'span',
  ({ theme: baseTheme }) => {
    const theme = tooltipTheme(baseTheme);

    return {
      borderBottomStyle: theme.TooltipTriggerText_borderStyle,
      borderBottomColor: theme.TooltipTriggerText_borderColor,
      borderBottomWidth: theme.TooltipTriggerText_borderWidth
    };
  }
);
