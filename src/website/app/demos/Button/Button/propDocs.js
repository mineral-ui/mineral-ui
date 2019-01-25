/* @flow */
import Button from '../../../../../library/Button';
import { SIZE, VARIANT } from '../../../../../library/Button/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  children: {
    description: 'Rendered content of the component',
    type: 'React$Node'
  },
  circular: {
    description: 'Displays a circular Button',
    type: 'boolean'
  },
  disabled: {
    description: 'Disables the Button',
    type: 'boolean'
  },
  fullWidth: {
    description: 'Stretch Button to fill its container',
    type: 'boolean'
  },
  iconEnd: {
    description: 'Icon that goes after the children',
    type: 'React$Element'
  },
  iconStart: {
    description: 'Icon that goes before the children',
    type: 'React$Element'
  },
  minimal: {
    description: 'Display a minimal Button',
    type: 'boolean'
  },
  onClick: {
    description: 'Called with the click event',
    type: {
      name: 'Function',
      value: '(event: SyntheticEvent<>) => void'
    }
  },
  primary: {
    description: 'Display a primary Button',
    type: 'boolean'
  },
  size: {
    description: 'Available sizes',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(SIZE))
    },
    // $FlowFixMe - defaultProps missing in React.AbstractComponentStatics
    defaultValue: `'${Button.defaultProps.size}'`
  },
  type: {
    description: 'Available types',
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
