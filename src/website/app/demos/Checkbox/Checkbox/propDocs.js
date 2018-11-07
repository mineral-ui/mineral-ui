/* @flow */
import Checkbox from '../../../../../library/Checkbox';
import {
  LABEL_POSITION,
  SIZE
} from '../../../../../library/Checkbox/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  checked: {
    description:
      'Checked state of the checkbox. Primarily for use with controlled components. If this prop is specified, an `onChange` handler must also be specified. See also: `defaultChecked`.',
    type: 'boolean'
  },
  defaultChecked: {
    description:
      'Initial checked state of the checkbox; primarily for use with uncontrolled components',
    type: 'boolean'
  },
  defaultIndeterminate: {
    description:
      'Initial indeterminate state of the checkbox; primarily for use with uncontrolled components',
    type: 'boolean'
  },
  disabled: {
    description: 'Disables the checkbox',
    type: 'boolean'
  },
  hideLabel: {
    description:
      'Visually hide label, but keep available for [assistive technologies](https://webaccess.berkeley.edu/resources/assistive-technology)',
    type: 'boolean'
  },
  indeterminate: {
    description:
      'Partially checked state. Primarily for use with controlled components. If this prop is specified, an `onChange` handler must also be specified. See also: `defaultIndeterminate`.',
    type: 'boolean'
  },
  inputRef: {
    description: 'Ref for the checkbox',
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
    defaultValue: `'${Checkbox.defaultProps.labelPosition}'`
  },
  name: {
    description: 'Used to uniquely define a group of checkboxes',
    type: 'string'
  },
  onChange: {
    description: 'Function called when a checkbox is selected',
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
    defaultValue: `'${Checkbox.defaultProps.size}'`
  },
  value: {
    description: 'The value of the checkbox',
    type: 'string'
  }
};

export default propDocs;
