/* @flow */
import { ALIGN, POSITION } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';
import { OverflowContainerWithShadowsProps } from '../OverflowContainer/types';
import { ButtonProps } from 'mineral-ui/Button/types';

type Align = keyof typeof ALIGN;
type TabsPosition = keyof typeof POSITION;

export interface TabsProps {
  align?: Align;
  'aria-labelledby'?: string;
  children?: React.ReactElement<any> | React.ReactElement<any>[];
  defaultSelectedTabIndex?: number;
  id?: string;
  label: string;
  height?: number | string;
  maxTabWidth?: number | string;
  onChange?: (selectedTabIndex: number, event: React.SyntheticEvent) => void;
  position?: TabsPosition;
  selectedTabIndex?: number;
  theme: object;
}

export interface TabsStyleProps extends Pick<TabsProps, 'height'> {
  position?: string;
}

export interface TabsDefaultProps {
  align: Align;
  maxTabWidth: number | string;
  position: TabsPosition;
}

export interface TabsState {
  selectedTabIndex: number;
}

export type TabsThemeFn = ComponentThemeFn<TabsTheme>;
export type TabsTheme = ComponentTheme<TabsThemeKeys>;
type TabsThemeKeys = TabListThemeKeys & TabPanelThemeKeys;

export interface TabProps {
  children?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactElement<any>;
  id?: string;
  index?: number;
  maxWidth?: number | string;
  panelId?: string;
  selected?: boolean;
  title: React.ReactNode;
}

export interface TabStyleProps
  extends ButtonProps,
    Pick<TabProps, 'disabled' | 'maxWidth' | 'selected'> {
  position?: string;
}

export type TabThemeFn = ComponentThemeFn<TabTheme>;
export type TabTheme = ComponentTheme<TabThemeKeys>;
interface TabThemeKeys {
  Tab_backgroundColor_selected: ThemeValue;
  Tab_borderColor_focus: ThemeValue;
  Tab_borderWidth_focus: ThemeValue;
  Tab_color: ThemeValue;
  Tab_color_selected: ThemeValue;
  Tab_color_selectedHover: ThemeValue;
  TabIndicator_thickness: ThemeValue;
}

export interface TabListProps {
  align?: Align;
  'aria-label'?: string;
  children?: React.ReactNode;
  height?: number | string;
  onIncrement?: (direction: string, event: React.SyntheticEvent) => void;
  position?: TabsPosition;
  role?: string;
  vertical?: boolean;
}

export interface TabListDefaultProps {
  position: TabsPosition;
}

export interface TabListState {
  scrollable: boolean;
}

export interface TabListStyleProps
  extends Pick<TabListProps, 'height' | 'vertical'> {}

export interface TabListArrowButtonStyleProps extends ButtonProps {}

export interface TabListInnerStyleProps
  extends OverflowContainerWithShadowsProps,
    Pick<TabListProps, 'position' | 'vertical'> {}

export interface TabListListStyleProps
  extends Pick<TabListProps, 'align' | 'vertical'> {
  count: number;
}

export type TabListThemeFn = ComponentThemeFn<TabListTheme>;
export type TabListTheme = ComponentTheme<TabListThemeKeys>;
interface TabListThemeKeys {
  TabList_gutterHorizontal: ThemeValue;
  TabList_gutterVertical: ThemeValue;
  TabListArrow_color: ThemeValue;
  TabListArrow_color_hover: ThemeValue;
  TabListOverflowContainer_boxShadowColor: ThemeValue;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  id?: string;
  tabId?: string;
}

export interface TabPanelStyleProps {
  position?: TabsPosition;
  role: string;
}

export type TabPanelThemeFn = ComponentThemeFn<TabPanelTheme>;
export type TabPanelTheme = ComponentTheme<TabPanelThemeKeys>;
interface TabPanelThemeKeys {
  TabList_border: ThemeValue;
  TabPanel_gap: ThemeValue;
}
