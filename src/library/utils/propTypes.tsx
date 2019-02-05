/* @flow */
import { func, string, oneOfType, shape } from 'prop-types';

export const component = oneOfType([
  func,
  string,
  shape({ render: func.isRequired })
]);
