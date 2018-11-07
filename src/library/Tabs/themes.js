/* @flow */
import type {
  TabsThemeFn,
  TabThemeFn,
  TabListThemeFn,
  TabPanelThemeFn
} from './types';

export const tabsTheme: TabsThemeFn = (baseTheme) => ({
  ...tabListTheme(baseTheme),
  ...tabPanelTheme(baseTheme),
  ...baseTheme
});

export const tabTheme: TabThemeFn = (baseTheme) => ({
  Tab_backgroundColor_selected: baseTheme.backgroundColor_theme_selected,
  Tab_borderColor_focus: baseTheme.borderColor_theme_focus,
  Tab_borderWidth_focus: 1,
  Tab_color: baseTheme.color_gray_80,
  Tab_color_selected: baseTheme.color_theme_70,
  Tab_color_selectedHover: baseTheme.color_theme,

  TabIndicator_thickness: 2,

  ...baseTheme
});

export const tabListTheme: TabListThemeFn = (baseTheme) => ({
  TabList_gutterHorizontal: baseTheme.space_inline_md,
  TabList_gutterVertical: baseTheme.space_stack_sm,

  TabListArrow_color: baseTheme.color_gray_80,
  TabListArrow_color_hover: baseTheme.color_theme,

  TabListOverflowContainer_boxShadowColor: baseTheme.color_white,

  ...baseTheme
});

export const tabPanelTheme: TabPanelThemeFn = (baseTheme) => ({
  // This TabList theme variable is defined here because the border is visually
  // associated with TabList, but for styling reasons, it is applied to TabPanel
  TabList_border: `1px solid ${baseTheme.borderColor}`,

  TabPanel_gap: baseTheme.space_inline_md,

  ...baseTheme
});
