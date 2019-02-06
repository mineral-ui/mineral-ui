/* @flow */
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import React from 'react';
import withProps from 'recompose/withProps';
import { componentStyleReset, getNormalizedValue } from '../styles';
import { themed, mapComponentThemes } from '../themes';
import Button from '../Button';
import Text from '../Text';
import IconClose from '../Icon/IconClose';
import _OverflowContainerWithShadows from '../OverflowContainer/OverflowContainerWithShadows';
import {
  dialogTheme,
  dialogActionsTheme,
  dialogBodyTheme,
  dialogRowTheme,
  dialogTitleTheme
} from './themes';
import DialogRow from './DialogRow';

export const DialogRoot = styled('div')(({ modeless, theme }) => ({
  ...componentStyleReset(theme),

  alignItems: 'center',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  position: 'fixed',
  pointerEvents: modeless ? 'none' : undefined,
  right: 0,
  top: 0
}));

export const DialogActionsRoot = styled('div')(({ theme: baseTheme }) => {
  const theme = dialogActionsTheme(baseTheme);
  const marginProperty =
    theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';

  return {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',

    '& > *:not(:last-child)': {
      [marginProperty]: theme.DialogActionsItem_margin
    }
  };
});

export const DialogAnimate = styled('div')(({ state, theme: baseTheme }) => {
  const theme = dialogTheme(baseTheme);
  return {
    opacity: state === 'entered' ? 1 : 0,
    position: 'relative',
    transition: `opacity ${theme.Dialog_transitionDuration} ease`,
    willChange: 'opacity',
    zIndex: theme.Dialog_zIndex
  };
});

export const DialogBodyRoot = styled(DialogRow)(({ theme: baseTheme }) => {
  const theme = dialogRowTheme(baseTheme);
  const fontSize = theme.DialogRow_fontSize;
  const marginVertical = `${getNormalizedValue(
    theme.DialogRow_marginVertical,
    fontSize
  )}`;

  return {
    display: 'flex',
    flex: '1 1 auto',
    fontSize,
    margin: 0,
    minHeight: '0%', // See: https://css-tricks.com/flexbox-truncated-text/#comment-1611744
    padding: 0,

    // Margins when no header or footer
    '&:first-child': {
      marginTop: marginVertical
    },
    '&:last-child': {
      marginBottom: marginVertical
    }
  };
});

const DialogBodyThemedOverflowContainerWithShadows = themed(
  _OverflowContainerWithShadows
)(({ theme: baseTheme }) =>
  mapComponentThemes(
    {
      name: 'DialogBody',
      theme: dialogBodyTheme(baseTheme)
    },
    {
      name: 'OverflowContainerWithShadows',
      theme: {}
    },
    baseTheme
  )
);

export const DialogBodyOverflowContainerWithShadows = withProps({
  scrollY: true
})(
  styled(DialogBodyThemedOverflowContainerWithShadows)(
    ({ theme: baseTheme }) => {
      const theme = dialogRowTheme(baseTheme);
      const fontSize = theme.DialogRow_fontSize;
      const paddingHorizontal = `${getNormalizedValue(
        theme.DialogRow_paddingHorizontal,
        fontSize
      )}`;

      return {
        display: 'flex',
        flex: '1 1 auto',
        width: '100%',

        // OverflowContainerWithShadows > Scroller
        '& > div': {
          paddingLeft: paddingHorizontal,
          paddingRight: paddingHorizontal,

          '& > :first-child': {
            marginTop: 0
          },
          '& > :last-child': {
            marginBottom: 0
          }
        }
      };
    }
  )
);

const DialogThemedButton = themed(Button)(({ theme }) => ({
  ButtonIcon_color: theme.color
}));

export const DialogCloseButton = withProps({
  iconStart: <IconClose />,
  minimal: true,
  size: 'small',
  type: 'button'
})(
  styled(DialogThemedButton)(({ theme: baseTheme }) => {
    const theme = dialogTheme(baseTheme);
    const marginProperty =
      theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';

    return {
      [marginProperty]: theme.DialogCloseButton_margin
    };
  })
);

export const DialogContent = styled('div', {
  shouldForwardProp: (prop) => prop !== 'size' && isPropValid(prop)
})(({ size, theme: baseTheme }) => {
  const theme = dialogTheme(baseTheme);

  const getSizeStyles = (size: string) => {
    const maxWidth = theme[`DialogContent_maxWidth_${size}`];
    const maxHeight = theme[`DialogContent_maxHeight_${size}`];
    const width = theme[`DialogContent_width_${size}`];
    const offsetVertical = theme.DialogContent_offsetVertical;

    const maxHeightNumber = parseFloat(maxHeight);
    const offsetVerticalNumber = parseFloat(offsetVertical);
    const minHeight = `${maxHeightNumber + 2 * offsetVerticalNumber}em`;

    return {
      maxWidth,
      width,

      [`@media(min-height: ${minHeight})`]: {
        maxHeight
      }
    };
  };

  return {
    backgroundColor: theme.DialogContent_backgroundColor,
    border: `1px solid ${theme.DialogContent_borderColor}`,
    borderRadius: theme.DialogContent_borderRadius,
    boxShadow: theme.DialogContent_boxShadow,
    display: 'flex',
    flexDirection: 'column',
    maxHeight: theme.DialogContent_maxHeight,
    minWidth: theme.DialogContent_minWidth,
    pointerEvents: 'all',
    position: 'relative',
    ...getSizeStyles(size)
  };
});

export const DialogFooterRoot = withProps({ as: 'footer' })(
  styled(DialogRow)({
    flex: '0 0 auto'
  })
);

export const DialogHeaderRoot = withProps({ as: 'header' })(
  styled(DialogRow)({
    display: 'flex',
    flex: '0 0 auto',
    justifyContent: 'space-between'
  })
);

export const DialogIEWrapper = styled('div')({
  display: 'flex'
});

export const DialogOverlay = styled('div')(({ theme: baseTheme }) => {
  const theme = dialogTheme(baseTheme);

  return {
    backgroundColor: theme.DialogOverlay_backgroundColor,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0
  };
});

export const DialogRowRoot = styled('div')(({ theme: baseTheme }) => {
  const theme = dialogRowTheme(baseTheme);
  const fontSize = theme.DialogRow_fontSize;

  return {
    ...componentStyleReset(baseTheme),

    fontSize,
    margin: `${getNormalizedValue(theme.DialogRow_marginVertical, fontSize)} 0`,
    outline: 0,
    padding: `0 ${getNormalizedValue(
      theme.DialogRow_paddingHorizontal,
      fontSize
    )}`
  };
});

export const DialogTitleRoot = styled('div')(
  ({ theme: baseTheme, variant }) => {
    const theme = dialogTitleTheme(baseTheme);
    const marginProperty =
      theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';

    return {
      color: variant ? theme[`color_${variant}`] : theme.DialogTitle_color,
      display: 'flex',

      '& > [role="img"]': {
        color: variant ? theme[`icon_color_${variant}`] : null,
        flex: '0 0 auto',
        [marginProperty]: theme.DialogTitleIcon_margin
      }
    };
  }
);

export const DialogTitleTitle = styled(Text)({
  color: 'inherit',
  flex: '1 1 auto'
});
