/* @flow */
import React from 'react';
import { createStyledComponent } from '../styles';

type Props = {
  /** Content of Card; see the [Basic](#basic) example for more details */
  children: React$Node,
  /** Called with the click event */
  onClick?: (event: SyntheticEvent<>) => void
};

// prettier-ignore
export const componentTheme = (baseTheme: Object) => ({
  Card_backgroundColor: baseTheme.panel_backgroundColor,
  Card_borderColor: baseTheme.panel_borderColor,
  Card_borderRadius: baseTheme.borderRadius_1,
  Card_boxShadow: baseTheme.boxShadow_2,
  Card_boxShadow_focus: `0 0 0 2px ${baseTheme.borderColor_theme_focus}, ${baseTheme.boxShadow_1}`,

  CardRow_marginVertical: baseTheme.space_stack_md,
  CardRow_marginVerticalLast: baseTheme.space_stack_lg,
  CardRow_paddingHorizontal: baseTheme.space_inset_md,

  ...baseTheme
});

const Root = createStyledComponent(
  'div',
  (props) => {
    const theme = componentTheme(props.theme);

    return {
      backgroundColor: theme.Card_backgroundColor,
      border: `1px solid ${theme.Card_borderColor}`,
      borderRadius: theme.Card_borderRadius,
      boxShadow: theme.Card_boxShadow,
      cursor: props.onClick && 'pointer',
      paddingBottom: '0.01em', // Necessary to prevent margin collapse of last-child
      paddingTop: '0.01em', // Necessary to prevent margin collapse of first-child

      '&:focus, &[data-simulate-focus]': {
        boxShadow: theme.Card_boxShadow_focus
      }
    };
  },
  {
    displayName: 'Card',
    includeStyleReset: true
  }
);

const onKeyDown = (props: Props, event: SyntheticKeyboardEvent<>) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    props.onClick && props.onClick(event);
  }
};

/**
 * Cards group conceptually related content.
 * Cards represent a gateway to more detailed information in another app view.
 * Use Cards to provide detail about a feature in your app, or to represent data
 * with which your users can interact.
 */
export default function Card(props: Props) {
  const rootProps = {
    onKeyDown: props.onClick ? onKeyDown.bind(null, props) : undefined,
    role: props.onClick ? 'button' : undefined,
    tabIndex: props.onClick ? 0 : undefined,
    ...props
  };
  return <Root {...rootProps} />;
}
