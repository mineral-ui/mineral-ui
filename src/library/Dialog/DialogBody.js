/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';

type Props = {
  /** TODO */
  children: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
  DialogBody_paddingHorizontal: baseTheme.space_inset_lg,

  ...baseTheme
});

const styles = {
  root: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      flex: '1 1 auto',
      overflowX: 'hidden',
      overflowY: 'auto',
      padding: `1px ${theme.DialogBody_paddingHorizontal}`, // 1px to avoid unwanted vertical scrollbar

      '& > :first-child': {
        marginTop: 0
      },

      '& > :last-child': {
        marginBottom: 0
      }
    };
  }
};

const Root = createStyledComponent('div', styles.root, {
  displayName: 'DialogBody'
});

/**
 * DialogBody - TODO
 */
export default function DialogBody(props: Props) {
  return <Root {...props} />;
}
