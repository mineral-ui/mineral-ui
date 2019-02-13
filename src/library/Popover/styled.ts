/* @flow */
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import { componentStyleReset } from '../styles';
import { themed } from '../themes';
import CardBlock from '../Card/CardBlock';
import CardTitle from '../Card/CardTitle';
import { popoverArrowTheme, popoverContentTheme } from './themes';
import { ARROW_SIZE } from './constants';

import { PopoverArrowProps, PopoverTriggerProps } from './types';

export const PopoverRoot = styled('span')({
  color: null,
  display: 'inline-block'
});

export const PopoverContentWrapper = styled('div')(({ theme: baseTheme }) => {
  const theme = popoverContentTheme(baseTheme);

  return {
    ...componentStyleReset(baseTheme),

    backgroundColor: theme.PopoverContent_backgroundColor,
    border: `1px solid ${theme.PopoverContent_borderColor}`,
    borderRadius: theme.PopoverContent_borderRadius,
    boxShadow: theme.PopoverContent_boxShadow,
    color: theme.PopoverContent_color,
    padding: `${theme.PopoverContent_paddingVertical} 0`,
    maxWidth: theme.PopoverContent_maxWidth,
    zIndex: theme.PopoverContent_zIndex,

    '&[data-placement^="top"]': {
      marginBottom: ARROW_SIZE
    },
    '&[data-placement^="bottom"]': {
      marginTop: ARROW_SIZE
    },
    '&[data-placement^="left"]': {
      marginRight: ARROW_SIZE
    },
    '&[data-placement^="right"]': {
      marginLeft: ARROW_SIZE
    },
    '&[data-out-of-boundaries]': {
      visibility: 'hidden'
    }
  };
});

const cardOverrides = ({ theme: baseTheme }) => {
  const theme = popoverContentTheme(baseTheme);
  return {
    CardRow_marginVertical: theme.PopoverContentBlock_marginVertical,
    CardRow_marginVerticalLast: theme.PopoverContentBlock_marginVertical,
    CardRow_paddingHorizontal: theme.PopoverContentBlock_paddingHorizontal
  };
};

export const PopoverBlock = themed(CardBlock)(cardOverrides);

export const PopoverTitle = themed(CardTitle)(cardOverrides);

export const PopoverArrowRoot = styled('span', {
  shouldForwardProp: (prop) => prop !== 'size' && isPropValid(prop)
})<PopoverArrowProps>(({ placement, size, theme: baseTheme }) => {
  const theme = popoverArrowTheme(baseTheme);
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
});

export const PopoverTriggerWrapper = styled('span', {
  shouldForwardProp: (prop) => prop !== 'cursor' && isPropValid(prop)
})<PopoverTriggerProps>(({ cursor }) => ({
  cursor,
  display: 'inline-block'
}));
