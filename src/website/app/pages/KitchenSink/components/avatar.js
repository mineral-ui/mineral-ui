/* @flow */
import Avatar from '../../../../../library/Avatar';

export default {
  Component: Avatar,
  componentName: 'Avatar',
  props: [
    {
      name: 'size',
      labels: ['Small', 'Medium', 'Large', 'Jumbo'],
      values: ['small', 'medium', undefined, 'jumbo']
    },
    {
      name: 'background',
      labels: [
        'Red',
        'Magenta',
        'Purple',
        'Indigo',
        'Blue',
        'Sky',
        'Teal',
        'Green',
        'Lime',
        'Yellow',
        'Orange',
        'Gray',
        'Slate',
        'Dusk'
      ],
      values: [
        'red',
        'magenta',
        'purple',
        'indigo',
        'blue',
        'sky',
        'teal',
        'green',
        'lime',
        'yellow',
        'orange',
        'gray',
        'slate',
        'dusk'
      ]
    }
  ],
  commonProps: { children: 'Avatar' }
};
