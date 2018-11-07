/* @flow */
import {
  MODE,
  SIZE,
  VARIANT
} from '../../../../../library/ButtonGroup/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  'aria-label': {
    description: 'Accessible label',
    type: 'string',
    required: true
  },
  checked: {
    description:
      'Index or array of indices of the selected [Button(s)](/components/button). Primarily for use with controlled components with a `mode` prop defined. If this prop is specified, an `onClick` handler must also be specified. See also: `defaultChecked`',
    type: 'number | Array<number>'
  },
  children: {
    description: 'Mineral [Button](/components/button) components',
    type: 'React$Node',
    required: true
  },
  defaultChecked: {
    description:
      'Index or array of indices of the selected [Button(s)](/components/button); primarily for use with uncontrolled components with a `mode` prop defined.',
    type: 'number | Array<number>'
  },
  disabled: {
    description: 'Disable all [Button](/components/button) children',
    type: 'boolean'
  },
  fullWidth: {
    description: 'Stretch ButtonGroup to fill its container',
    type: 'boolean'
  },
  mode: {
    description:
      'Behavioral mode of [Button](/components/button) children: either [Radio](/components/radio) or [Checkbox](/components/checkbox)',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(MODE))
    }
  },
  onChange: {
    description: 'Called when a toggleable Button is selected',
    type: {
      name: 'Function',
      value: '(event: SyntheticEvent<HTMLButtonElement>) => void'
    }
  },
  onClick: {
    description: 'Called with the click event',
    type: {
      name: 'Function',
      value: '(event: SyntheticEvent<HTMLButtonElement>) => void'
    }
  },
  size: {
    description: 'Available sizes',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(SIZE))
    }
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
