/* @flow */
import { createStyledComponent } from '../../../../../library/styles';

export default createStyledComponent(
  'figcaption',
  ({ theme }) => ({
    fontSize: theme.fontSize_mouse,
    marginLeft: theme.space_inline_xs
  }),
  {
    displayName: 'FigCaption',
    includeStyleReset: true
  }
);
