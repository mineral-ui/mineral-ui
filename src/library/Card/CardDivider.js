/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';
import { componentTheme as cardComponentTheme } from './Card';

type Props = Object;

export const componentTheme = (baseTheme: Object) => ({
  CardDivider_borderColor: baseTheme.borderColor,
  CardDivider_borderWidth: '1px',

  ...baseTheme
});

const Root = createStyledComponent(
  'div',
  (props) => {
    const theme = {
      ...componentTheme(props.theme),
      ...cardComponentTheme(props.theme)
    };

    return {
      backgroundColor: theme.CardDivider_borderColor,
      height: theme.CardDivider_borderWidth,
      margin: `${theme.CardRow_marginVertical} 0`
    };
  },
  {
    displayName: 'CardDivider'
  }
);

/**
 * CardDividers separate content in [Card](/components/card) to establish hierarchy.
 *
 * Too many dividers will add unnecessary weight to your Card.
 */
export default function CardDivider(props: Props) {
  return <Root {...props} role="separator" />;
}
