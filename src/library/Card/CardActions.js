/* @flow */
import React, { Children, cloneElement } from 'react';
import { createStyledComponent } from '../styles';
import Button from '../Button';
import { componentTheme as cardBlockComponentTheme } from './CardBlock';
import { componentTheme as cardRowComponentTheme } from './CardRow';
import CardRow from './CardRow';

type Props = {
  /** Actions associated with Card; see [Button](/components/button), [Link](/components/link) */
  children: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
  CardActionsAction_spaceInline: baseTheme.space_inline_sm,

  ...baseTheme
});

const styles = {
  action: ({ theme: baseTheme }) => {
    const theme = {
      ...componentTheme(baseTheme),
      ...cardBlockComponentTheme(baseTheme)
    };
    const marginProperty =
      theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';

    return {
      alignItems: 'center',
      display: 'flex',
      flex: '0 0 auto',
      fontSize: theme.CardBlock_fontSize,
      marginBottom: theme.CardActionsAction_spaceInline,
      [marginProperty]: theme.CardActionsAction_spaceInline
    };
  },
  root: ({ theme: baseTheme }) => {
    const theme = {
      ...componentTheme(baseTheme),
      ...cardRowComponentTheme(baseTheme)
    };

    return {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      // We subtract `theme.CardActionsAction_spaceInline` because of the marginBottom on Action.
      marginBottom: `${parseFloat(theme.CardRow_marginVertical) -
        parseFloat(theme.CardActionsAction_spaceInline)}rem`
    };
  }
};

const Action = createStyledComponent('span', styles.action);
const Root = createStyledComponent(CardRow, styles.root, {
  displayName: 'CardActions'
});

/**
 * The CardActions component allows you to lay out actions inside your [Card](/components/card).
 */
export default function CardActions(props: Props) {
  const { children, ...restProps } = props;
  const actions = Children.map(children, (child, index) => {
    if (child.type === Button) {
      child = cloneElement(child, { size: 'medium' });
    }
    return <Action key={index}>{child}</Action>;
  });

  return <Root {...restProps}>{actions}</Root>;
}
