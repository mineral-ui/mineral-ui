/* @flow */
import { createStyledComponent } from '../../../../../styles';

export default createStyledComponent('div', {
  '& > *:not(:last-child)': {
    marginBottom: '1rem'
  }
});
