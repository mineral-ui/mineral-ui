/* @flow */
import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  checked: {
    description:
      'Value of the selected [Radio](/components/radio); primarily for use with controlled components. If this prop is specified, an `onChange` handler must also be specified. See also: `defaultChecked`.',
    type: 'string'
  },
  children: {
    description: 'Mineral [Radio](/components/radio) components',
    type: 'React$Node'
  },
  data: {
    description:
      'Data used to contruct [Radios](/components/radio), see [example](#data)',
    type: {
      name: 'Array',
      value: 'Array<{ label: string | React$Element, value: string }>'
    }
  },
  defaultChecked: {
    description:
      'Value of the selected [Radio](/components/radio); primarily for use with uncontrolled components.',
    type: 'string'
  },
  inline: {
    description:
      'Display the choices inline horizontally rather than stacked vertically.',
    type: 'boolean'
  },
  name: {
    description: 'The name of the group',
    type: 'string',
    required: true
  },
  onChange: {
    description: 'Called when a choice is selected',
    type: {
      name: 'Function',
      value: '(event: SyntheticEvent<>) => void'
    }
  },
  rootProps: {
    description: 'Props to be applied directly to the root element',
    type: 'Object'
  }
};

export default propDocs;
