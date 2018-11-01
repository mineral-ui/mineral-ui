/* @flow */
import { NavItem } from '../../../../../library/Navigation';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  children: {
    description: 'Content of NavItem',
    type: 'React$Node'
  },
  disabled: {
    description: 'Disables NavItem',
    type: 'boolean'
  },
  element: {
    description: 'React element used for NavItem [(see example)](#element)',
    type: {
      name: 'union',
      value: 'React$Element<*> | string'
    },
    defaultValue: `'${NavItem.defaultProps.element}'`
  },
  icon: {
    description: 'Icon placed before the text',
    type: 'React$Element<*>'
  },
  maxWidth: {
    description: 'Maximum width of NavItem',
    type: {
      name: 'union',
      value: 'number | string'
    }
  },
  selected: {
    description: 'Selected state of NavItem',
    type: 'boolean'
  }
};

export default propDocs;
