/* @flow */
import Button from '../../../../../library/Button';

export default {
  Component: Button,
  componentName: 'Button',
  props: [
    {
      name: undefined,
      labels: ['Default', 'Primary', 'Minimal'],
      values: [undefined, 'primary', 'minimal']
    },
    {
      name: 'size',
      labels: ['Small', 'Medium', 'Large', 'Jumbo'],
      values: ['small', 'medium', undefined, 'jumbo']
    },
    {
      name: 'variant',
      labels: ['Regular', 'Danger', 'Success', 'Warning'],
      values: [undefined, 'danger', 'success', 'warning']
    }
  ],
  commonProps: { children: 'Button Text' }
};
