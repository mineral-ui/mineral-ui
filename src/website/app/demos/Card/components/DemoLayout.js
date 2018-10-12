/* @flow */
import clearFix from 'polished/lib/mixins/clearFix';
import { createStyledComponent } from '../../../../../library/styles';

export default createStyledComponent('div', {
  ...clearFix(),

  '& > *': {
    marginBottom: '1em',

    '@media(min-width: 40em)': {
      float: 'left',
      marginRight: '1em',
      width: '47%'
    }
  },

  // http://quantityqueries.com/
  '& > *:nth-last-child(n+3), & > *:nth-last-child(n+3) ~ *': {
    '@media(min-width: 64em)': {
      width: '30%'
    }
  }
});
