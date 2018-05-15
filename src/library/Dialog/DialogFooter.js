/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';

type Props = {
  /** TODO */
  children: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
  DialogFooter_paddingHorizontal: baseTheme.space_inset_lg,
  DialogFooter_marginVertical: baseTheme.space_inset_lg,

  DialogFooterItem_margin: baseTheme.space_stack_md,

  ...baseTheme
});

const styles = {
  root: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    const rtl = theme.direction === 'rtl';

    return {
      alignItems: 'center',
      display: 'flex',
      flex: '0 0 auto',
      justifyContent: 'flex-end',
      margin: `${theme.DialogFooter_marginVertical} 0`,
      padding: `0 ${theme.DialogFooter_paddingHorizontal}`,

      '& > *:not(:last-child)': {
        marginLeft: rtl ? theme.DialogFooterItem_margin : null,
        marginRight: rtl ? null : theme.DialogFooterItem_margin
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
