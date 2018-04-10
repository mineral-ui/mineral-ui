/* @flow */
import React from 'react';
import { createStyledComponent, getNormalizedValue } from '../styles';
import { componentTheme as menuItemComponentTheme } from '../Menu/MenuItem';

type Props = Object;

// [1] Deviation from h5 for optics relative to a MenuItem
export const componentTheme = (baseTheme: Object) => ({
  MenuGroupTitle_fontSize: baseTheme.fontSize_mouse, // [1]
  MenuGroupTitle_fontWeight: baseTheme.h5_fontWeight,
  MenuGroupTitle_paddingTop: baseTheme.space_stack_md,
  MenuGroupTitle_paddingBottom: baseTheme.space_stack_sm,

  ...baseTheme
});

const Root = createStyledComponent(
  'h3',
  (props) => {
    const theme = {
      ...componentTheme(props.theme),
      ...menuItemComponentTheme(props.theme)
    };

    const paddingBottom = getNormalizedValue(
      theme.MenuGroupTitle_paddingBottom,
      theme.MenuGroupTitle_fontSize
    );

    const paddingTop = getNormalizedValue(
      theme.MenuGroupTitle_paddingTop,
      theme.MenuGroupTitle_fontSize
    );

    // We need to use MenuItem's padding, to match
    const paddingHorizontal = getNormalizedValue(
      theme.MenuItem_paddingHorizontal,
      theme.MenuGroupTitle_fontSize
    );

    return {
      fontSize: theme.MenuGroupTitle_fontSize,
      fontWeight: theme.MenuGroupTitle_fontWeight,
      margin: 0,
      padding: `${paddingTop} ${paddingHorizontal} ${paddingBottom}`
    };
  },
  {
    displayName: 'MenuGroupTitle'
  }
);

/**
 * Menu group title component
 */
export default function MenuGroupTitle(props: Props) {
  return <Root {...props} />;
}
