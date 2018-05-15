/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';

type Props = {
  /** TODO */
  children: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
  DialogHeader_padding: baseTheme.space_inset_lg,

  ...baseTheme
});

const styles = {
  root: ({ theme: baseTheme }) => {
    let theme = componentTheme(baseTheme);

    return {
      flex: '0 0 auto',
      padding: theme.DialogHeader_padding
    };
  }
};

const Root = createStyledComponent('header', styles.root, {
  displayName: 'DialogHeader'
});

/**
 * DialogHeader - TODO
 */
export default function DialogHeader(props: Props) {
  return <Root {...props} />;
}
