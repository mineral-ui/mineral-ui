/* @flow */

import { createStyledComponent } from '../../../../../library/styles';
import { Target } from 'react-popper';
import Select from '../../../../../library/Select';
import { basicData as data } from '../components/selectData';

export default {
  id: 'render-trigger',
  title: 'Custom Rendering - renderTrigger',
  description: `Use the \`renderTrigger\`
[render prop](https://reactjs.org/docs/render-props.html) to provide custom
rendering control of the trigger.

_Prior to reaching for this functionality, please consider whether the
desired outcome could be achieved using a simpler means, such as with
Mineral's robust [styling](/styling) and/or [theming](/theming) capabilities._`,
  scope: {
    createStyledComponent,
    data,
    Select,
    Target
  },
  source: `
    () => {
      // Your root element must be a Popper Target component.
      // import { Target } from 'react-popper';
      const CustomTrigger = createStyledComponent(
        Target,
        {},
        {
          filterProps: ['isOpen', 'item', 'variant']
        }
      );

      const renderTrigger = ({ triggerProps, isOpen, selectedItem }) => {
        const text = selectedItem ? selectedItem.text : 'Please select...';
        const arrow = isOpen ? '▲' : '▼';
        const customTriggerProps = {
          ...triggerProps,
          component: 'button',
          role: undefined
        };

        return (
          <CustomTrigger {...customTriggerProps}>
            {text} {arrow}
          </CustomTrigger>
        );
      };

      return (
        <Select data={data} renderTrigger={renderTrigger} />
      );
    }`
};
