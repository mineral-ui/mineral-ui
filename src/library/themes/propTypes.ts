/* @flow */
import { func, node, object, oneOfType } from 'prop-types';

export const themeProviderPropTypes = {
  children: node,
  theme: oneOfType([func, object])
};
