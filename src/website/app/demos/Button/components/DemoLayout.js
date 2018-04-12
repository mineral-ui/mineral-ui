/* @flow */
import { createStyledComponent } from '../../../../../library/styles';

export default createStyledComponent('div', {
  '& > *': {
    marginBottom: '0.5rem',
    marginRight: '0.5rem'
  }
});
