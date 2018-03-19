/* @flow */
import React from 'react';
import { withRouter } from 'react-router';
import { createStyledComponent } from '../../library/styles';

type Props = {
  fontSize?: number, // px
  lineHeight?: number, // unitless,
  location?: any,
  offset?: number // px
};

const Root = createStyledComponent(
  'div',
  ({ fontSize, lineHeight, offset, theme }) => {
    const rowHeight = fontSize * lineHeight;

    return {
      backgroundImage: `repeating-linear-gradient(
        0deg,
        rgba(0,255,255,0.07),
        rgba(0,255,255,0.07) ${rowHeight / 2}px,
        rgba(0,255,255,0.14) ${rowHeight / 2}px,
        rgba(0,255,255,0.14) ${rowHeight}px,
        rgba(255,0,255,0.07) ${rowHeight}px,
        rgba(255,0,255,0.07) ${rowHeight * 1.5}px,
        rgba(255,0,255,0.14) ${rowHeight * 1.5}px,
        rgba(255,0,255,0.14) ${rowHeight * 2}px
      )`,
      backgroundPosition: `0 ${offset}px`,
      bottom: 0,
      left: 0,
      pointerEvents: 'none',
      position: 'fixed',
      right: 0,
      top: 0,
      zIndex: theme.zIndex_1600
    };
  }
);

function BaselineGrid({
  fontSize = 16,
  lineHeight = 1.5,
  location,
  offset = -8
}: Props) {
  const rootProps = {
    fontSize,
    lineHeight,
    offset
  };

  return location && location.search === '?grid' ? (
    <Root {...rootProps} />
  ) : null;
}

export default withRouter(BaselineGrid);
