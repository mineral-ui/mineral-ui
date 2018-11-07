/* @flow */
import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  children: {
    description:
      '[MenuDivider](/components/menu-divider), [MenuGroup](/components/menu-group), or [MenuItem](/components/menu-item)',
    type: 'React$Node'
  },
  data: {
    description: 'Data used to contruct Menu. See [example](#data)',
    type: {
      name: 'union',
      value: 'MenuItems | MenuItemGroups'
    }
  },
  item: {
    description:
      'Provides custom rendering control for the items. See the [custom item example](/components/menu#custom-item) and our [render props guide](/render-props).',
    type: {
      name: 'function',
      value: '(props?: RenderProps) => React$Node'
    }
  },
  itemKey: {
    description:
      'Specifies a key in the item data that gives an item its unique identity. See the [React docs](https://reactjs.org/docs/lists-and-keys.html#keys).',
    type: 'string'
  }
};

export default propDocs;
