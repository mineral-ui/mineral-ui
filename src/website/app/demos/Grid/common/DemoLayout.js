/* @flow */
import { clearFix } from 'polished';
import { createStyledComponent } from '../../../../../library/styles';

export default createStyledComponent('div', ({ lastRowStartsAt }) => {
  const condition = lastRowStartsAt
    ? `:nth-child(n + ${lastRowStartsAt})`
    : ':last-child';
  return {
    ...clearFix(),

    [`& > *:not(${condition})`]: {
      marginBottom: '1rem'
    }
  };
});
