/* @flow */
import React from 'react';
import Transition from 'react-transition-group/Transition';
import { withTheme } from '../themes';
import {
  SideBarPanelRoot as Root,
  SideBarPanelSlider,
  SideBarPanelCollapse
} from './styled';
import { sideBarPanelTheme } from './themes';

import { sideBarPanelPropTypes } from './propTypes';
import type {
  SideBarPanelProps,
  SideBarPanelAnimationCollapseProps,
  SideBarPanelAnimationSliderProps
} from './types';

const AnimationCollapse = withTheme(
  ({
    children,
    isCollapsed,
    theme,
    width
  }: SideBarPanelAnimationCollapseProps) => (
    <Transition
      in={isCollapsed}
      timeout={{
        enter: 0,
        exit: parseFloat(
          sideBarPanelTheme(theme).SideBarPanel_transitionDuration
        )
      }}>
      {(state) => {
        const collapseProps = {
          state,
          width
        };

        return (
          <SideBarPanelCollapse {...collapseProps}>
            {children}
          </SideBarPanelCollapse>
        );
      }}
    </Transition>
  )
);

const AnimationSlider = withTheme(
  ({
    children,
    hasShadows,
    isCollapsed,
    isOpen,
    theme,
    width
  }: SideBarPanelAnimationSliderProps) => (
    <Transition
      in={isOpen}
      timeout={{
        enter: 0,
        exit: parseFloat(
          sideBarPanelTheme(theme).SideBarPanel_transitionDuration
        )
      }}>
      {(state) => {
        const sliderProps = {
          hasShadows,
          isCollapsed,
          state,
          width
        };

        return (
          <SideBarPanelSlider {...sliderProps}>{children}</SideBarPanelSlider>
        );
      }}
    </Transition>
  )
);

const SideBarPanel = ({
  children,
  hasShadows,
  isCollapsed,
  isOpen,
  width,
  ...restProps
}: SideBarPanelProps) => {
  const sliderProps = {
    hasShadows,
    isCollapsed,
    isOpen,
    width
  };

  const collapseProps = {
    isCollapsed,
    width
  };

  const rootProps = {
    width,
    ...restProps
  };

  let output = <Root {...rootProps}>{children}</Root>;

  if (isCollapsed !== undefined) {
    output = <AnimationCollapse {...collapseProps}>{output}</AnimationCollapse>;
  }

  return <AnimationSlider {...sliderProps}>{output}</AnimationSlider>;
};

SideBarPanel.defaultProps = {
  hasShadows: true,
  isCollapsed: false,
  isOpen: true
};
SideBarPanel.displayName = 'SideBarPanel';
SideBarPanel.propTypes = sideBarPanelPropTypes;

export default SideBarPanel;
