/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';
import { componentTheme as cardComponentTheme } from './Card';
import CardRow from './CardRow';

type Props = {
  /** Contents of CardBlock */
  children: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
  CardBlock_fontSize: baseTheme.fontSize_ui,
  CardBlock_lineHeight: baseTheme.lineHeight_prose,

  ...baseTheme
});

const styles = {
  inner: (props) => {
    const theme = componentTheme(props.theme);

    return {
      fontSize: theme.CardBlock_fontSize,
      lineHeight: theme.CardBlock_lineHeight
    };
  },
  root: (props) => {
    const theme = cardComponentTheme(props.theme);

    return {
      '&:last-child': {
        marginBottom: theme.CardRow_marginVerticalLast
      }
    };
  }
};

const Root = createStyledComponent(CardRow, styles.root, {
  displayName: 'CardBlock'
});
const Inner = createStyledComponent('div', styles.inner);

/**
 * CardBlock is used to normalize font sizes for content and to provide
 * consistent margins and padding.
 */
export default function CardBlock({ children, ...restProps }: Props) {
  return (
    <Root {...restProps}>
      <Inner>{children}</Inner>
    </Root>
  );
}
