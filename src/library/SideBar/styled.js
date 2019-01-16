/* @flow */
import { createStyledComponent } from '../styles';
import Box from '../Box';
import { default as Flex, FlexItem } from '../Flex';
import { sideBarTheme, sideBarPanelTheme, sideBarOverlayTheme } from './themes';

export const SideBarRoot = createStyledComponent(
  Flex,
  ({ inline, usePortal, theme: baseTheme }) => {
    const theme = sideBarTheme(baseTheme);

    return usePortal || !inline
      ? {
          bottom: 0,
          left: 0,
          margin: 0,
          position: usePortal ? 'fixed' : 'absolute',
          pointerEvents: 'none',
          right: 0,
          top: 0,
          zIndex: theme.SideBar_zIndex,
          '> div': {
            pointerEvents: 'auto'
          }
        }
      : {};
  },
  {
    displayName: 'SideBar',
    filterProps: ['inline', 'usePortal'],
    withProps: { gutterWidth: 0 }
  }
);

export const SideBarPanelRoot = createStyledComponent(
  Box,
  ({ width, theme: baseTheme }) => {
    const theme = sideBarPanelTheme(baseTheme);

    return {
      backgroundColor: theme.SideBarPanel_backgroundColor,
      height: '100%',
      width: width || theme.SideBarPanel_width
    };
  },
  {
    displayName: 'SideBarPanel',
    filterProps: ['width']
  }
);

export const SideBarPanelCollapse = createStyledComponent(
  Box,
  ({ state, theme: baseTheme, width: customWidth }) => {
    const theme = sideBarPanelTheme(baseTheme);

    const width =
      state === 'entered' || state === 'entering'
        ? theme.SideBarPanel_width_isCollapsed
        : customWidth || theme.SideBarPanel_width;

    return {
      height: '100%',
      width,
      transition: `width ${
        theme.SideBarPanel_transitionDuration
      } cubic-bezier(0.165, 0.84, 0.44, 1)`,
      willChange: 'width'
    };
  },
  {
    displayName: 'SideBarPanelCollapse',
    filterProps: ['state, width']
  }
);

export const SideBarPanelSlider = createStyledComponent(
  FlexItem,
  ({
    hasShadows,
    isCollapsed,
    state,
    theme: baseTheme,
    width: customWidth
  }) => {
    const theme = sideBarPanelTheme(baseTheme);

    const panelWidth = isCollapsed
      ? theme.SideBarPanel_width_isCollapsed
      : customWidth || theme.SideBarPanel_width;

    const width = state === 'entered' ? panelWidth : 0;

    return {
      boxShadow: hasShadows && theme.boxShadow_5,
      display: state === 'exited' ? 'none' : undefined,
      flexShrink: 0,
      overflow: 'hidden',
      position: 'relative',
      transition: `width ${
        theme.SideBarPanel_transitionDuration
      } cubic-bezier(0.165, 0.84, 0.44, 1)`,
      width,
      willChange: 'width',
      zIndex: theme.SideBarPanel_zIndex,
      '> div': {
        left: '50%',
        position: 'absolute',
        transform: 'translateX(-50%)'
      },
      ':last-of-type > div': {
        left: 0,
        right: 'auto',
        transform: 'none'
      },
      ':first-of-type > div': {
        left: 'auto',
        right: 0,
        transform: 'none'
      }
    };
  },
  {
    displayName: 'SideBarPanelSlider',
    filterProps: ['hasShadows', 'isCollapsed', 'state', 'width']
  }
);

export const SideBarOverlay = createStyledComponent(
  'div',
  ({ onClick, state, theme: baseTheme }) => {
    const theme = sideBarOverlayTheme(baseTheme);

    return {
      backgroundColor: theme.SideBarOverlay_backgroundColor,
      bottom: 0,
      cursor: onClick && 'pointer',
      display: state === 'exited' ? 'none' : undefined,
      left: 0,
      opacity: state === 'entered' ? 1 : 0,
      position: 'absolute',
      right: 0,
      top: 0,
      transition: `opacity ${theme.SideBarOverlay_transitionDuration} ease-out`,
      willChange: 'opacity',
      zIndex: theme.SideBarOverlay_zIndex
    };
  },
  {
    displayName: 'SideBarOverlay',
    filterProps: ['state']
  }
);

export const SideBarSpacer = createStyledComponent(
  FlexItem,
  () => ({
    pointerEvents: 'none !important'
  }),
  {
    displayName: 'SideBarSpacer',
    withProps: ({ grow }) => ({ grow: grow || 1 })
  }
);
