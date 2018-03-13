/* @flow */
import { createStyledComponent } from '../../../../../styles';

export default createStyledComponent('div', {
  '& > *': {
    marginRight: '1rem',
    marginBottom: '1rem'
  }
});
