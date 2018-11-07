/* @flow */
import { createStyledComponent } from '../../../../../library/styles';

export default createStyledComponent(
  'div',
  ({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: `-${theme.space_inline_xs}`
  }),
  {
    displayName: 'FigContainer',
    includeStyleReset: true
  }
);
