/* @flow */
import TextInput from '../../../../../library/TextInput';
import {
  SIZE,
  TYPE,
  VARIANT
} from '../../../../../library/TextInput/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  defaultValue: {
    description:
      'Initial value of the input. Primarily for use with uncontrolled components',
    type: 'string'
  },
  disabled: {
    description: 'Disables the input',
    type: 'boolean'
  },
  htmlSize: {
    description: 'HTML `size` attribute',
    type: 'number | string'
  },
  iconStart: {
    description: 'Icon located at the start of the input',
    type: 'React$Element<*>'
  },
  iconEnd: {
    description: 'Icon located at the end of the input',
    type: 'React$Element<*>'
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
  prefix: {
    description: 'Text to display before input value',
    type: 'string | React$Element<*>'
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
  size: {
    description: 'Available sizes',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(SIZE))
    },
    defaultValue: `'${TextInput.defaultProps.size}'`
  },
  suffix: {
    description: 'Text to display after input value',
    type: 'string | React$Element<*>'
  },
  type: {
    description:
      'Type of input. Not all types are equally supported across browsers.',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(TYPE))
    },
    defaultValue: `'${TextInput.defaultProps.type}'`
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
