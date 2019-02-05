/* @flow */
import Radio from '../../../../../library/Radio';
import { LABEL_POSITION, SIZE } from '../../../../../library/Radio/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  checked: {
    description:
      'Checked state of the radio. Primarily for use with controlled components. If this prop is specified, an `onChange` handler must also be specified. See also: `defaultChecked`.',
    type: 'boolean'
  },
  defaultChecked: {
    description:
      'Initial checked state of the radio; primarily for use with uncontrolled components',
    type: 'boolean'
  },
  disabled: {
    description: 'Disables the radio button',
    type: 'boolean'
  },
  hideLabel: {
    description:
      'Visually hide label, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology)',
    type: 'boolean'
  },
  inputRef: {
    description: 'Ref for the radio button',
    type: {
      name: 'Function',
      value: '(node: ?HTMLInputElement) => void'
    }
  },
  invalid: {
    description: 'Indicates that the value of the input is invalid',
    type: 'boolean'
  },
  justify: {
    description: 'Maximize the distance between the label and the control',
    type: 'boolean'
  },
  label: {
    description: 'Label associated with the input element',
    type: 'string | React$Element<*>',
    required: true
  },
  labelPosition: {
    description: 'Determines the position of the label relative to the control',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(LABEL_POSITION))
    },
    defaultValue: `'${Radio.defaultProps.labelPosition}'`
  },
  name: {
    description: 'Used to uniquely define a group of radio buttons',
    type: 'string'
  },
  onChange: {
    description: 'Called when a radio is selected',
    type: {
      name: 'Function',
      value: '(event: SyntheticInputEvent<>) => void'
    }
  },
  required: {
    description:
      'Indicates that the user must select an option before submitting a form',
    type: 'boolean'
  },
  rootProps: {
    description:
      'Props to be applied directly to the root element rather than the input',
    type: 'Object'
  },
  size: {
    description: 'Available sizes',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(SIZE))
    },
    defaultValue: `'${Radio.defaultProps.size}'`
  },
  value: {
    description: 'The value of the radio button',
    type: 'string'
  }
};

export default propDocs;
