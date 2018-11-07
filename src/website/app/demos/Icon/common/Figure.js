/* @flow */
import { createStyledComponent } from '../../../../../library/styles';

export default createStyledComponent(
  'figure',
  ({ theme }) => ({
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    padding: theme.space_inset_xs,
    width: '18em',

    '&:focus': {
      outline: '1px dotted currentColor'
    },

    '& > [role="img"]': {
      marginRight: theme.space_inline_xs
    }
  }),
  {
    displayName: 'Figure',
    includeStyleReset: true
  }
);
