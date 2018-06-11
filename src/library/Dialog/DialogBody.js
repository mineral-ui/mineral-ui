/* @flow */
import React from 'react';
import { createStyledComponent, getNormalizedValue } from '../styles';
import { createThemedComponent } from '../themes';
import DialogRow from './DialogRow';

type Props = {
  /** TODO */
  children: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
  DialogBody_fontSize: baseTheme.fontSize_ui,
  DialogBody_paddingHorizontal: baseTheme.space_inset_lg,

  ...baseTheme
});

const styles = {
  root: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    const fontSize = theme.DialogBody_fontSize;

    return {
      flex: '1 1 auto',
      fontSize,
      overflowX: 'hidden',
      overflowY: 'auto',
      padding: `1px ${getNormalizedValue(
        theme.DialogBody_paddingHorizontal,
        fontSize
      )}`, // 1px to avoid unwanted vertical scrollbar

      '& > :first-child': {
        marginTop: 0
      },

      '& > :last-child': {
        marginBottom: 0
      }
    };
  }
};

const ThemedDialogRow = createThemedComponent(DialogRow, {
  DialogRow_marginVertical: 0
});

const Root = createStyledComponent(ThemedDialogRow, styles.root, {
  displayName: 'DialogBody'
});

/**
 * DialogBody - TODO
 */
export default function DialogBody(props: Props) {
  return <Root {...props} />;
}
