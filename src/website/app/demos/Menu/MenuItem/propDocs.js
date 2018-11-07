/* @flow */
import { VARIANT } from '../../../../../library/Menu/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  children: {
    description: 'Rendered content of the component',
    type: 'React$Node'
  },
  disabled: {
    description: 'Disable the menu item',
    type: 'boolean'
  },
  iconEnd: {
    description: 'Icon that goes after the childre',
    type: 'React$Element<*>'
  },
  iconStart: {
    description: 'Icon that goes before the children',
    type: 'React$Element<*>'
  },
  index: {
    description: 'Item index - provided to render callback',
    type: 'number'
  },
  isHighlighted: {
    description: 'Display the item in an active style',
    type: 'boolean'
  },
  item: {
    description: 'Item data - provided to render callback',
    type: 'MenuItem'
  },
  onClick: {
    description: 'Called with the click event',
    type: {
      name: 'function',
      value: '(event: SyntheticEvent<>) => void'
    }
  },
  render: {
    description:
      'Provides custom rendering control. See the [custom item example](/components/menu#custom-item) and our [render props guide](/render-props).',
    type: {
      name: 'function',
      value: '(props?: RenderProps) => React$Node'
    }
  },
  secondaryText: {
    description: 'Secondary text',
    type: 'React$Node'
  },
  variant: {
    description: 'Available variants',
    type: joinQuoted(Object.keys(VARIANT))
  }
};

export default propDocs;
