/* @flow */
import { createStyledComponent } from '../../../../../library/styles';

export default createStyledComponent('div', {
  '& > *:not(:last-child)': {
    marginBottom: '1rem'
  }
});
