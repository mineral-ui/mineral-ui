/* @flow */
import { ALIGN } from '../../../../../library/Navigation/constants';
import formatObject from '../../../utils/formatObject';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

type NavPropDocs = (
  component: $FlowFixMe, // Should be React$ComponentType<*>, I think
  componentName: string
) => ComponentPropDocs;

const messagesObjectType = {
  moreLabel: 'string',
  moreText: 'string'
};

const navPropDocs: NavPropDocs = (component, componentName) => ({
  align: {
    description: 'Horizontal alignment of items',
    type: {
      name: 'union',
      value: joinQuoted(Object.values(ALIGN))
    },
    defaultValue: `'${component.defaultProps.align}'`
  },
  children: {
    description: `[NavItems](/components/nav-item) [(see example)](#basic)`,
    type: 'React$Node'
  },
  itemAs: {
    description: 'React element used for items [(see example)](#item-as)',
    type: {
      name: 'union',
      value: 'React$Element<*> | string'
    },
    defaultValue: `'${component.defaultProps.itemAs}'`
  },
  items: {
    description: 'Navigational items [(see example)](#data)',
    type: 'Items'
  },
  maxItemWidth: {
    description: 'Maximum width of each item',
    type: {
      name: 'union',
      value: 'number | string'
    },
    defaultValue: `'${component.defaultProps.maxItemWidth}'`
  },
  messages: {
    description: `Various messages and labels used by ${componentName}
([see example for more details](#rtl))`,
    type: {
      name: 'object',
      value: formatObject(messagesObjectType)
    },
    defaultValue: formatObject(component.defaultProps.messages, true)
  },
  onChange: {
    description: 'Called when an item is selected',
    type: {
      name: 'function',
      value: `(
  selectedIndex: number,
  event: SyntheticEvent<HTMLAnchorElement>
) => void`
    }
  },
  overflowAtIndex: {
    description: 'Index at which NavItems overflow into a "More" Dropdown menu',
    type: 'number'
  },
  selectedIndex: {
    description: 'Index of the selected item',
    type: 'number'
  }
});

export default navPropDocs;
