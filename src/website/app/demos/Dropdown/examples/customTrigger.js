/* @flow */

import { createStyledComponent } from '../../../../../library/styles';
import { Target } from 'react-popper';
import Dropdown from '../../../../../library/Dropdown';
import data from '../../Menu/components/menuData';
import renderPropsDescription from '../../shared/renderPropsDescription';

export default {
  id: 'custom-trigger',
  title: 'Custom Trigger',
  description: `Use the \`trigger\` render prop to provide custom rendering
control of the trigger. ${renderPropsDescription}`,
  scope: {
    createStyledComponent,
    data,
    Dropdown,
    Target
  },
  source: `
    () => {
      // Your root element must be a Popper Target component.
      // import { Target } from 'react-popper';
      const CustomTrigger = createStyledComponent(Target, {});

      return (
        <Dropdown data={data}>
          {
            ({ props, state }) => {
              const triggerProps = {
                ...props,
                component: 'button',
                role: undefined
              };

              return (
                <CustomTrigger {...triggerProps}>
                  Menu <span role="img" aria-hidden="true">{state.isOpen ? '▲' : '▼'}</span>
                </CustomTrigger>
              );
            }
          }
        </Dropdown>
      );
    }`
};
