/* @flow */
import { createStyledComponent, pxToEm } from '../../../../../library/styles';

export default createStyledComponent('div', ({ theme, width }) => ({
  overflow: 'hidden',

  '& > div': {
    backgroundColor: theme.color_white,
    float: 'left',
    margin: '0 0.5rem 0.5rem 0',
    // Default width is width of DropdownContent
    width: width || pxToEm(224)
  }
}));
