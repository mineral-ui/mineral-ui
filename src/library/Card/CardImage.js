/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';
import { componentTheme as cardComponentTheme } from './Card';

type Props = Object;

const Root = createStyledComponent(
  'img',
  (props) => {
    const theme = cardComponentTheme(props.theme);

    return {
      display: 'block',
      marginBottom: theme.CardRow_marginVertical,
      marginTop: theme.CardRow_marginVertical,
      maxWidth: '100%',

      '&:first-child': {
        borderRadius: `${theme.Card_borderRadius} ${
          theme.Card_borderRadius
        } 0 0`,
        marginTop: 0
      },

      '&:last-child': {
        borderRadius: `0 0 ${theme.Card_borderRadius} ${
          theme.Card_borderRadius
        }`,
        marginBottom: 0
      }
    };
  },
  {
    displayName: 'CardImage',
    rootEl: 'img'
  }
);

/**
 * CardImage renders images full-bleed inside of a [Card](/components/card).
 * Use CardImage to display static media.
 */
export default function CardImage(props: Props) {
  return <Root {...props} />;
}
