/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';
import { componentTheme as cardRowComponentTheme } from './CardRow';
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
  inner: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      fontSize: theme.CardBlock_fontSize,
      lineHeight: theme.CardBlock_lineHeight
    };
  },
  root: ({ theme: baseTheme }) => {
    const theme = cardRowComponentTheme(baseTheme);

    return {
      '&:last-child': {
        marginBottom: theme.CardRow_marginVerticalLast
      }
    };
  }
};

const Inner = createStyledComponent('div', styles.inner);
const Root = createStyledComponent(CardRow, styles.root, {
  displayName: 'CardBlock'
});

/**
 * CardBlock is used to normalize font sizes for content and to provide
 * consistent margins and padding.
 */
export default function CardBlock(props: Props) {
  const { children, ...restProps } = props;
  return (
    <Root {...restProps}>
      <Inner>{children}</Inner>
    </Root>
  );
}
