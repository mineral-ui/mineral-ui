/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import { ellipsis } from 'polished';
import withProps from 'recompose/withProps';
import { componentStyleReset, getNormalizedValue, pxToEm } from '../styles';
import { themed } from '../themes';
import Button from '../Button';

import {
  cardActionsTheme,
  cardBlockTheme,
  cardDividerTheme,
  cardFooterTheme,
  cardStatusTheme,
  cardTitleTheme,
  cardTheme
} from './themes';

export const CardRoot = styled('div')((props) => {
  const theme = cardTheme(props.theme);

  return {
    ...componentStyleReset(props.theme),

    backgroundColor: theme.Card_backgroundColor,
    border: `1px solid ${theme.Card_borderColor}`,
    borderRadius: theme.Card_borderRadius,
    boxShadow: theme.Card_boxShadow,
    cursor: props.onClick && 'pointer',
    paddingBottom: '0.01em', // Necessary to prevent margin collapse of last-child
    paddingTop: '0.01em', // Necessary to prevent margin collapse of first-child

    '&:focus': {
      boxShadow: theme.Card_boxShadow_focus
    }
  };
});

export const CardRow = styled('div')((props) => {
  const theme = cardTheme(props.theme);

  return {
    marginBottom: theme.CardRow_marginVertical,
    marginTop: theme.CardRow_marginVertical,
    paddingLeft: theme.CardRow_paddingHorizontal,
    paddingRight: theme.CardRow_paddingHorizontal
  };
}, {});

export const CardActionsRoot = styled(CardRow)((props) => {
  const theme = {
    ...cardActionsTheme(props.theme),
    ...cardTheme(props.theme)
  };

  return {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    // We subtract `theme.CardActionsAction_spaceInline` because of the marginBottom on Action.
    marginBottom: `${parseFloat(theme.CardRow_marginVertical) -
      parseFloat(theme.CardActionsAction_spaceInline)}em`
  };
});

export const CardAction = styled('span')((props) => {
  const theme = {
    ...cardActionsTheme(props.theme),
    ...cardBlockTheme(props.theme)
  };
  const rtl = theme.direction === 'rtl';
  const fontSize = theme.CardBlock_fontSize;
  const actionsGap = getNormalizedValue(
    theme.CardActionsAction_spaceInline,
    fontSize
  );

  return {
    alignItems: 'center',
    display: 'flex',
    flex: '0 0 auto',
    fontSize,
    marginBottom: actionsGap,
    marginLeft: rtl ? null : actionsGap,
    marginRight: rtl ? actionsGap : null
  };
});

export const CardBlockRoot = styled(CardRow)((props) => {
  const theme = cardTheme(props.theme);

  return {
    '&:last-child': {
      marginBottom: theme.CardRow_marginVerticalLast
    }
  };
});

export const CardBlockInner = styled('div')((props) => {
  const theme = cardBlockTheme(props.theme);

  return {
    fontSize: theme.CardBlock_fontSize,
    lineHeight: theme.CardBlock_lineHeight
  };
});

export const CardDividerRoot = styled('div')((props) => {
  const theme = {
    ...cardDividerTheme(props.theme),
    ...cardTheme(props.theme)
  };

  return {
    backgroundColor: theme.CardDivider_borderColor,
    height: theme.CardDivider_borderWidth,
    margin: `${theme.CardRow_marginVertical} 0`
  };
});

export const CardFooterRoot = styled('div')(({ variant, theme: baseTheme }) => {
  let theme = {
    ...cardFooterTheme(baseTheme),
    ...cardTheme(baseTheme)
  };

  if (variant) {
    theme = {
      ...theme,
      CardFooter_backgroundColor: theme[`well_backgroundColor_${variant}`],
      CardFooter_borderColor: theme[`well_borderColor_${variant}`]
    };
  }

  // [1] Making the footer overlap the Card border. The `calc` bit accounts
  //     for the paddingBottom on Card to prevent margin collapse.
  return {
    backgroundColor: theme.CardFooter_backgroundColor,
    border: `1px solid ${theme.CardFooter_borderColor}`,
    borderRadius: `0 0 ${theme.Card_borderRadius} ${theme.Card_borderRadius}`,
    margin: '0 -1px calc(-1px - 0.01em) -1px', // [1]
    paddingBottom: '0.01em', // Necessary to prevent margin collapse of last-child
    paddingTop: '0.01em' // Necessary to prevent margin collapse of first-child
  };
});

/*
 * CardFooter can have children like CardBlock and CardActions. When those
 * components are used directly inside Card they have a specific top/bottom
 * margin, but when they're used within CardFooter, they have a different
 * top/bottom margin. This technique accomplishes that without writing a bunch
 * of descendant selectors.
 */
const footerTheme = ({ theme }) => ({
  CardRow_marginVertical: cardFooterTheme(theme).CardFooterRow_marginVertical,
  CardRow_marginVerticalLast: cardFooterTheme(theme)
    .CardFooterRow_marginVerticalLast
});

/*
 * We shouldn't just create a themed 'div', because it won't be able to apply
 * the provided theme to itself, which breaks the expectation of
 * themed. So, we theme a simple functional component that
 * returns a 'div' instead.
 */
export const CardFooterContent = themed((props) => <div {...props} />)(
  footerTheme
);

export const CardFooterTitle = styled('div')((props) => {
  const theme = {
    ...cardFooterTheme(props.theme),
    ...cardTheme(props.theme)
  };
  return {
    alignItems: 'flex-start',
    display: 'flex',
    marginBottom: theme.CardFooterRow_marginVertical,
    marginTop: theme.CardFooterRow_marginVertical,
    paddingLeft: theme.CardRow_paddingHorizontal,
    paddingRight: theme.CardRow_paddingHorizontal
  };
});

export const CardFooterTitleContent = styled('h4')((props) => {
  const theme = cardFooterTheme(props.theme);

  return {
    color: theme.CardFooterTitle_color,
    flex: '1 1 auto',
    fontSize: theme.CardFooterTitle_fontSize,
    fontWeight: theme.CardFooterTitle_fontWeight,
    margin: 0
  };
});

export const CardFooterToggleButton = withProps({ type: 'button' })(
  styled(Button)(
    /*
     * A large Button, even with zero'd padding, is still a bit too large in this
     * context. These styles allow the Button to shrink, but the Icon remains the
     * same size.
     */
    ({ theme, variant }) => ({
      flex: '0 0 auto',
      height: 'auto',
      minWidth: 0,
      overflow: 'hidden',
      padding: 0,
      transform: `translateY(-${pxToEm(1)})`, // Optical alignment

      ...(variant
        ? {
            '&:hover': {
              backgroundColor: theme[`backgroundColor_${variant}_hover`]
            }
          }
        : undefined),

      // Inner
      '& > span': {
        display: 'block',
        margin: `-${pxToEm(4)}`
      },

      // Icon
      '& [role="img"]': {
        color: theme.icon_color
      }
    })
  )
);

export const CardImageRoot = styled('img')((props) => {
  const theme = cardTheme(props.theme);

  return {
    display: 'block',
    marginBottom: theme.CardRow_marginVertical,
    marginTop: theme.CardRow_marginVertical,
    maxWidth: '100%',

    '&:first-child': {
      borderRadius: `${theme.Card_borderRadius} ${theme.Card_borderRadius} 0 0`,
      marginTop: 0
    },

    '&:last-child': {
      borderRadius: `0 0 ${theme.Card_borderRadius} ${theme.Card_borderRadius}`,
      marginBottom: 0
    }
  };
});

export const CardStatusRoot = styled(CardRow)(
  ({ theme: baseTheme, variant }) => {
    const theme = cardStatusTheme(baseTheme);
    const rtl = theme.direction === 'rtl';

    return {
      alignItems: 'center',
      color: theme[`color_${variant}`],
      display: 'flex',
      fontSize: theme.CardStatus_fontSize,
      fontWeight: theme.CardStatus_fontWeight,

      '& > [role="img"]': {
        height: theme.CardStatusIcon_size,
        marginRight: rtl ? null : theme.CardStatusIcon_margin,
        marginLeft: rtl ? theme.CardStatusIcon_margin : null,
        width: theme.CardStatusIcon_size
      }
    };
  }
);

export const CardTitleRoot = styled(CardRow)({
  display: 'flex'
});

export const CardTitleAvatar = styled('span')(
  ({ subtitle, theme: baseTheme }) => {
    const theme = cardTitleTheme(baseTheme);
    const rtl = theme.direction === 'rtl';
    const width = subtitle
      ? theme.CardTitleAvatarSize_large
      : theme.CardTitleAvatarSize;

    return {
      flex: '0 0 auto',
      marginLeft: rtl ? theme.CardTitleAvatar_margin : null,
      marginRight: rtl ? null : theme.CardTitleAvatar_margin,
      width,

      '&[class] > *': {
        height: 'auto',
        width: '100%'
      }
    };
  }
);

export const CardTitleInner = styled('div')({
  flex: '1 1 auto'
});

export const CardTitleSecondaryText = styled('span')((props) => {
  const theme = cardTitleTheme(props.theme);
  const fontSize = theme.CardTitleSecondaryText_fontSize;

  return {
    color: theme.CardTitleSecondaryText_color,
    flex: '0 0 auto',
    fontSize,
    fontWeight: theme.CardTitleSecondaryText_fontWeight,
    transform: `translateY(${getNormalizedValue(pxToEm(5), fontSize)})`, // Optical alignment
    ...ellipsis('33%')
  };
});

export const CardTitleSubtitle = styled('h4')(
  ({ avatar, theme: baseTheme }) => {
    const theme = cardTitleTheme(baseTheme);
    const fontSize = theme.CardSubtitle_fontSize;

    return {
      color: theme.CardSubtitle_color,
      fontSize,
      fontWeight: theme.CardSubtitle_fontWeight,
      margin: 0,
      marginTop: avatar
        ? null
        : getNormalizedValue(theme.CardSubtitle_marginTop, fontSize)
    };
  }
);

export const CardTitleTitle = styled('div')(({ theme: baseTheme, variant }) => {
  const theme = cardTitleTheme(baseTheme);
  const rtl = theme.direction === 'rtl';

  return {
    alignItems: 'flex-start',
    display: 'flex',

    '& > [role="img"]': {
      color: variant ? theme[`icon_color_${variant}`] : null,
      flex: '0 0 auto',
      marginLeft: rtl ? theme.CardTitleIcon_margin : null,
      marginRight: rtl ? null : theme.CardTitleIcon_margin,
      position: 'relative',
      top: pxToEm(4) // optical alignment
    }
  };
});

export const CardTitleTitleContent = styled('h3')(
  ({ actions, theme: baseTheme }) => {
    const theme = cardTitleTheme(baseTheme);
    const rtl = theme.direction === 'rtl';
    const fontSize = theme.CardTitle_fontSize;
    const actionsMargin = getNormalizedValue(
      theme.CardTitleIcon_margin,
      fontSize
    );

    return {
      color: theme.CardTitle_color,
      flex: '1 1 auto',
      fontSize,
      fontWeight: theme.CardTitle_fontWeight,
      margin: 0,
      marginLeft: actions && rtl ? actionsMargin : null,
      marginRight: actions && !rtl ? actionsMargin : null
    };
  }
);

export const CardTitleMenuButton = withProps({ type: 'button' })(
  styled(Button)(
    /*
     * A large Button, even with zero'd padding, is still a bit too large in this
     * context. These styles allow the Button to shrink, but the Icon remains the
     * same size.
     */
    ({ theme }) => ({
      height: 'auto',
      minWidth: 0,
      overflow: 'hidden',
      padding: 0,

      // Inner
      '& > span': {
        display: 'block',
        margin: `-${pxToEm(2)}`
      },

      // Icon
      '& [role="img"]': {
        color: theme.icon_color
      }
    })
  )
);
