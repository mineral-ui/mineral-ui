/* @flow */
import type {
  SideBarThemeFn,
  SideBarPanelThemeFn,
  SideBarOverlayThemeFn
} from './types';

export const sideBarTheme: SideBarThemeFn = (baseTheme) => ({
  SideBar_zIndex: baseTheme.zIndex_1600,

  ...baseTheme
});

export const sideBarPanelTheme: SideBarPanelThemeFn = (baseTheme) => ({
  SideBarPanel_backgroundColor: baseTheme.panel_backgroundColor,
  SideBarPanel_transitionDuration: '400ms',
  SideBarPanel_width: 250,
  SideBarPanel_width_isCollapsed: 72,
  SideBarPanel_zIndex: baseTheme.zIndex_800,

  ...baseTheme
});

export const sideBarOverlayTheme: SideBarOverlayThemeFn = (baseTheme) => ({
  SideBarOverlay_backgroundColor: 'rgba(0, 0, 0, 0.6)',
  SideBarOverlay_transitionDuration: '350ms',
  SideBarOverlay_zIndex: baseTheme.zIndex_400,

  ...baseTheme
});
