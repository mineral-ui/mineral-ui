/* @flow */
import { createStyledComponent } from '../../../../../library/styles';

export default createStyledComponent('div', {
  '&[class] > *:not(:last-child)': {
    marginBottom: '1rem'
  }
});
