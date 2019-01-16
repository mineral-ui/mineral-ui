/* @flow */
import React from 'react';
import Transition from 'react-transition-group/Transition';
import { withTheme } from '../themes';
import { SideBarOverlay as Root } from './styled';
import { sideBarOverlayTheme } from './themes';

import { sideBarOverlayPropTypes } from './propTypes';
import type { SideBarOverlayProps } from './types';

const SideBarOverlay = withTheme(
  ({ onClick, show, theme, ...overlayProps }: SideBarOverlayProps) => (
    <Transition
      in={show}
      timeout={{
        enter: 0,
        exit: parseFloat(
          sideBarOverlayTheme(theme).SideBarOverlay_transitionDuration
        )
      }}>
      {(state) => {
        const rootProps = {
          onClick,
          state,
          ...overlayProps
        };

        return <Root {...rootProps} />;
      }}
    </Transition>
  )
);

SideBarOverlay.defaultProps = {
  show: true
};
SideBarOverlay.displayName = 'SideBarOverlay';
SideBarOverlay.propTypes = sideBarOverlayPropTypes;

export default SideBarOverlay;
