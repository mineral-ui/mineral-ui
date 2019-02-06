/* @flow */
import { ALIGN, POSITION } from './constants';

import {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

type Align = keyof typeof ALIGN;
type Position = keyof typeof POSITION;

export type TabsProps = {
  align?: Align,
  'aria-labelledby'?: string,
  children?: React.ReactNode,
  defaultSelectedTabIndex?: number,
  id?: string,
  label: string,
  height?: number | string,
  maxTabWidth?: number | string,
  onChange?: (
    selectedTabIndex: number,
    event: SyntheticEvent<HTMLAnchorElement>
  ) => void,
  position?: Position,
  selectedTabIndex?: number,
  theme: Object
};

export type TabsDefaultProps = {
  align: Align,
  maxTabWidth: number | string,
  position: Position
};

export type TabsState = {
  selectedTabIndex: number
};

export type TabsThemeFn = ComponentThemeFn<TabsTheme>;
export type TabsTheme = ComponentTheme<TabsThemeKeys>;
type TabsThemeKeys = TabListThemeKeys & TabPanelThemeKeys;

export type TabProps = {
  children?: React.ReactNode,
  disabled?: boolean,
  icon?: React$Element<*>,
  id?: string,
  index?: number,
  maxWidth?: number | string,
  panelId?: string,
  selected?: boolean,
  title: React.ReactNode
};

export type TabThemeFn = ComponentThemeFn<TabTheme>;
export type TabTheme = ComponentTheme<TabThemeKeys>;
type TabThemeKeys = {
  Tab_backgroundColor_selected: ThemeValue,
  Tab_borderColor_focus: ThemeValue,
  Tab_borderWidth_focus: ThemeValue,
  Tab_color: ThemeValue,
  Tab_color_selected: ThemeValue,
  Tab_color_selectedHover: ThemeValue,
  TabIndicator_thickness: ThemeValue
};

export type TabListProps = {
  align?: Align,
  'aria-label'?: string,
  children?: React.ReactNode,
  height?: number | string,
  onIncrement?: (direction: string, event: SyntheticEvent<*>) => void,
  position?: Position,
  role?: string,
  vertical?: boolean
};

export type TabListDefaultProps = {
  position: Position
};

export type TabListState = {
  scrollable: boolean
};

export type TabListThemeFn = ComponentThemeFn<TabListTheme>;
export type TabListTheme = ComponentTheme<TabListThemeKeys>;
type TabListThemeKeys = {
  TabList_gutterHorizontal: ThemeValue,
  TabList_gutterVertical: ThemeValue,
  TabListArrow_color: ThemeValue,
  TabListArrow_color_hover: ThemeValue,
  TabListOverflowContainer_boxShadowColor: ThemeValue
};

export type TabPanelProps = {
  children?: React.ReactNode,
  id?: string,
  tabId?: string
};

export type TabPanelThemeFn = ComponentThemeFn<TabPanelTheme>;
export type TabPanelTheme = ComponentTheme<TabPanelThemeKeys>;
type TabPanelThemeKeys = {
  TabList_border: ThemeValue,
  TabPanel_gap: ThemeValue
};
