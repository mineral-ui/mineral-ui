/* @flow */
import { createStyledComponent } from '../../../../../library/styles';

export default createStyledComponent('div', ({ theme }) => ({
  padding: `${theme.space_inset_md}`,
  position: 'relative',

  '&:not(:last-child)': {
    paddingBottom: 0
  },

  '& > div': {
    position: 'static'
  },

  '& [role="document"]': {
    width: 'auto'
  }
}));
