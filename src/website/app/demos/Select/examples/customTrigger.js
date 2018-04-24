/* @flow */

import { createStyledComponent } from '../../../../../library/styles';
import { Target } from 'react-popper';
import Select from '../../../../../library/Select';
import { basicData as data } from '../components/selectData';
import renderPropDescription from '../../shared/renderPropDescription';

export default {
  id: 'custom-trigger',
  title: 'Custom Trigger',
  description: `Use the \`trigger\`
[render prop](https://reactjs.org/docs/render-props.html) to provide custom
rendering control of the trigger.

${renderPropDescription}
`,
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

      const trigger = ({ props, state }) => {
        const { isOpen, selectedItem } = state;
        const text = selectedItem ? selectedItem.text : 'Please select...';
        const triggerProps = {
          ...props,
          component: 'button',
          role: undefined
        };

        return (
          <CustomTrigger {...triggerProps}>
            {text} <span role="img" aria-hidden="true">{isOpen ? '▲' : '▼'}</span>
          </CustomTrigger>
        );
      };

      return (
        <Select data={data} trigger={trigger} />
      );
    }`
};
