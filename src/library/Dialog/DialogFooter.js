/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';
import DialogRow from './DialogRow';

type Props = {
  /** TODO */
  children: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
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
      justifyContent: 'flex-end',

      '& > *:not(:last-child)': {
        marginLeft: rtl ? theme.DialogFooterItem_margin : null,
        marginRight: rtl ? null : theme.DialogFooterItem_margin
      }
    };
  }
};

const Root = createStyledComponent(DialogRow, styles.root, {
  displayName: 'DialogFooter',
  withProps: { element: 'footer' }
});

/**
 * DialogFooter - TODO
 */
export default function DialogFooter(props: Props) {
  return <Root {...props} />;
}
