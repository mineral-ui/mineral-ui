/* @flow */
import { createStyledComponent } from '../styles';
import { componentTheme as cardComponentTheme } from './Card';

export default createStyledComponent(
  'div',
  (props) => {
    const theme = cardComponentTheme(props.theme);

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
