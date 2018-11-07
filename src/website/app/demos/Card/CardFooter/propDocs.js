/* @flow */
import CardFooter from '../../../../../library/Card/CardFooter';
import { VARIANT } from '../../../../../library/Card/constants';
import joinQuoted from '../../../utils/joinQuoted';

import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  children: {
    description: 'Content of CardFooter',
    type: 'React$Node',
    required: true
  },
  defaultIsOpen: {
    description:
      'If `expandable`, expand CardFooter immediately upon initialization',
    type: 'boolean'
  },
  expandable: {
    description:
      'Display a trigger to expand/collapse CardFooter contents (`title` is required for this feature)',
    type: 'boolean'
  },
  isOpen: {
    description:
      'For use with controlled components, in which the app manages CardFooter state',
    type: 'boolean'
  },
  onClose: {
    description: 'If `expandable`, called when CardFooter is collapsed',
    type: {
      name: 'function',
      value: '(event: SyntheticEvent<>) => void'
    }
  },
  onOpen: {
    description: 'If `expandable`, called when CardFooter is expanded',
    type: {
      name: 'function',
      value: '(event: SyntheticEvent<>) => void'
    }
  },
  title: {
    description: 'Title of the footer',
    type: 'string | React$Element<*>'
  },
  triggerTitle: {
    description: 'If `expandable`, title for expand/collapse trigger',
    type: {
      name: 'function',
      value: '(isOpen: boolean) => string'
    },
    defaultValue: CardFooter.defaultProps.triggerTitle.toString()
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
