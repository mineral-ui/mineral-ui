/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';

type Props = {
  /** TODO */
  children: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
  DialogFooter_padding: baseTheme.space_inset_lg,
  DialogFooterItem_marginRight: baseTheme.space_stack_md,

  ...baseTheme
});

const styles = {
  root: ({ theme: baseTheme }) => {
    let theme = componentTheme(baseTheme);

    return {
      alignItems: 'center',
      display: 'flex',
      flex: '0 0 auto',
      justifyContent: 'flex-end',
      padding: theme.DialogFooter_padding,

      '& > *:not(:last-child)': {
        marginRight: theme.DialogFooterItem_marginRight
      }
    };
  }
};

const Root = createStyledComponent('footer', styles.root, {
  displayName: 'DialogFooter'
});

/**
 * DialogFooter - TODO
 */
export default function DialogFooter(props: Props) {
  return <Root {...props} />;
}
