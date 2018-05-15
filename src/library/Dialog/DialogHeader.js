/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';

type Props = {
  /** TODO */
  children: React$Node
};

export const componentTheme = (baseTheme: Object) => ({
  DialogHeader_paddingHorizontal: baseTheme.space_inset_lg,
  DialogHeader_marginVertical: baseTheme.space_inset_lg,

  ...baseTheme
});

const styles = {
  root: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      flex: '0 0 auto',
      margin: `${theme.DialogHeader_marginVertical} 0`,
      outline: 0,
      padding: `0 ${theme.DialogHeader_paddingHorizontal}`
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
