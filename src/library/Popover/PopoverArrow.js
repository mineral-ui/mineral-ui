/* @flow */
import React from 'react';
import { Arrow } from 'react-popper';
import { createStyledComponent } from '../styles';

type Props = {
  /** Size of arrow */
  size: string,
  /** Placement of the popper */
  placement?:
    | 'auto'
    | 'auto-end'
    | 'auto-start'
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'left'
    | 'left-end'
    | 'left-start'
    | 'right'
    | 'right-end'
    | 'right-start'
    | 'top'
    | 'top-end'
    | 'top-start'
};

export const componentTheme = (baseTheme: Object) => ({
  PopoverArrow_backgroundColor: baseTheme.panel_backgroundColor,
  PopoverArrow_borderColor: baseTheme.panel_borderColor,
  ...baseTheme
});

const Root = createStyledComponent(
  Arrow,
  ({ placement, size, theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    let arrowShadow = ', 0 3px 1px rgba(0, 0, 0, 0.3)';
    const horizontalOffset = `-${parseFloat(size) - 4}px`;
    let directionalStyles;
    let rotation = 0;

    switch (true) {
      case placement && placement.startsWith('top'):
        // Magic numbers to optically match theme.boxShadow_2
        arrowShadow = ', 0 4px 2px rgba(0, 0, 0, 0.3)';
        directionalStyles = {
          bottom: `-${parseFloat(size) - 2}px`,
          left: `calc(50% - ${size})`,
          marginBottom: 0,
          marginTop: 0
        };
        break;
      case placement && placement.startsWith('bottom'):
        arrowShadow = '';
        directionalStyles = {
          top: `-${parseFloat(size) - 3}px`,
          left: `calc(50% - ${size})`,
          marginBottom: 0,
          marginTop: 0
        };
        rotation = 180;
        break;
      case placement && placement.startsWith('left'):
        directionalStyles = {
          right: horizontalOffset,
          top: `calc(50% - ${size})`,
          marginLeft: 0,
          marginRight: 0
        };
        rotation = -90;
        break;
      case placement && placement.startsWith('right'):
        directionalStyles = {
          left: horizontalOffset,
          top: `calc(50% - ${size})`,
          marginLeft: 0,
          marginRight: 0
        };
        rotation = 90;
        break;
      default:
        directionalStyles = {
          display: 'none'
        };
    }

    return {
      color: theme.PopoverArrow_backgroundColor,
      display: 'inline-block',
      fontSize: size,
      margin: size,
      position: 'absolute',
      textShadow: `0 2px 0 ${theme.PopoverArrow_borderColor}${arrowShadow}`,
      transform: `rotate(${rotation}deg) scaleX(2)`,
      ...directionalStyles
    };
  },
  {
    displayName: 'PopoverArrow',
    rootEl: 'span'
  }
);

/**
 * PopoverArrow component
 */
export default function PopoverArrow(props: Props) {
  return (
    <Root {...props} aria-hidden>
      ▼
    </Root>
  );
}
