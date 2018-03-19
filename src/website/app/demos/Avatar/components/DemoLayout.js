/* @flow */
import { createStyledComponent } from '../../../../../library/styles';

export default createStyledComponent('div', {
  '& > *': {
    marginRight: '1rem',
    marginBottom: '1rem'
  }
});
