/* @flow */
import { Tabs } from '../../../../../library/Tabs/Tabs';
import { ALIGN, POSITION } from '../../../../../library/Tabs/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  align: {
    description: 'Horizontal or vertical alignment of Tabs in the tab list',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(ALIGN))
    },
    defaultValue: `'${Tabs.defaultProps.align}'`
  },
  children: {
    description: 'Content of Tabs; must be Tab components',
    type: 'React$Node'
  },
  defaultSelectedTabIndex: {
    description:
      'Index of the selected Tab; primarily for use with uncontrolled components',
    type: 'number'
  },
  id: {
    description: 'Id of Tabs',
    type: 'string'
  },
  label: {
    description: 'Accessible label for Tabs',
    type: 'string',
    required: true
  },
  height: {
    description: 'Height of Tabs',
    type: 'number | string'
  },
  maxTabWidth: {
    description: 'Maximum width of each Tab',
    type: 'number | string',
    defaultValue: `'${Tabs.defaultProps.maxTabWidth}'`
  },
  onChange: {
    description: 'Called when a Tab is selected',
    type: {
      name: 'Function',
      value:
        '(selectedTabIndex: number, event: SyntheticEvent<HTMLAnchorElement>) => void'
    }
  },
  position: {
    description: 'Position of the tab list in relation to the tab panel',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(POSITION))
    },
    defaultValue: `'${Tabs.defaultProps.position}'`
  },
  selectedTabIndex: {
    description:
      'Index of the selected Tab; primarily for use with controlled components. If this prop is specified, an `onChange` handler must also be specified. See also: `defaultSelectedTabIndex`',
    type: 'number'
  }
};

export default propDocs;
