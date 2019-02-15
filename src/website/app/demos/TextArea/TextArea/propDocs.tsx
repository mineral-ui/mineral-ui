/* @flow */
import TextArea from '../../../../../library/TextArea';
import { SIZE, VARIANT } from '../../../../../library/TextArea/constants';
import { joinQuoted } from '../../../utils/propDocs';

import { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  autoSize: {
    description:
      'Automatically adjust the height of the input to fit the content',
    type: 'boolean'
  },
  defaultValue: {
    description:
      'Initial value of the input. Primarily for use with uncontrolled components',
    type: 'string'
  },
  disabled: {
    description: 'Disables the input',
    type: 'boolean'
  },
  inputRef: {
    description: 'ref for the input',
    type: {
      name: 'function',
      value: '(node: ?React$Component<*, *>) => void'
    }
  },
  rootProps: {
    description:
      'Props to be applied directly to the root element, rather than the input',
    type: 'Object'
  },
  invalid: {
    description: 'Indicates that the value of the element is invalid',
    type: 'boolean'
  },
  onChange: {
    description: 'Called when input value changes',
    type: {
      name: 'function',
      value: '(event: SyntheticEvent<>) => void'
    }
  },
  readOnly: {
    description: 'Indicates that the user cannot modify the value of the input',
    type: 'boolean'
  },
  required: {
    description:
      'Indicates that the user must fill in a value before submitting a form',
    type: 'boolean'
  },
  resizeable: {
    description:
      'Indicates whether input is resizable. _Not currently supported in IE/Edge._',
    type: 'boolean'
  },
  rows: {
    description: 'The number of visible text lines in the input',
    type: 'number'
  },
  size: {
    description: 'Available sizes',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(SIZE))
    },
    defaultValue: `'${TextArea.defaultProps.size}'`
  },
  value: {
    description:
      'The initial value of the input. Primarily for use with controlled components.  If this prop is specified, an onChange handler must also be specified.  Also see `defaultValue`.',
    type: 'string'
  },
  variant: {
    description: 'Available variants',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(VARIANT))
    }
  }
};

export default propDocs;
