/* @flow */
import { createStyledComponent } from '../../../../../styles';

export default createStyledComponent('div', {
  '&[class] > *:not(:last-child)': {
    marginBottom: '1rem'
  }
});
