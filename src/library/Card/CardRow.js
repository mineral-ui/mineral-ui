/* @flow */
import { createStyledComponent } from '../styles';

export const componentTheme = (baseTheme: Object) => ({
  CardRow_marginVertical: baseTheme.space_stack_md,
  CardRow_marginVerticalLast: baseTheme.space_stack_lg,
  CardRow_paddingHorizontal: baseTheme.space_inset_md,

  ...baseTheme
});

export default createStyledComponent(
  'div',
  ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      marginBottom: theme.CardRow_marginVertical,
      marginTop: theme.CardRow_marginVertical,
      paddingLeft: theme.CardRow_paddingHorizontal,
      paddingRight: theme.CardRow_paddingHorizontal
    };
  },
  {
    displayName: 'CardRow'
  }
);
