/* @flow */

import { createStyledComponent } from '../../../../../library/styles';
import { Target } from 'react-popper';
import Popover from '../../../../../library/Popover';
import DemoContent from '../components/DemoContent';
import renderPropDescription from '../../shared/renderPropDescription';

export default {
  id: 'custom-trigger',
  title: 'Custom Trigger',
  description: `Use the \`children\`
[render prop](https://reactjs.org/docs/render-props.html) to provide custom
rendering control of the trigger.

${renderPropDescription}`,
  scope: {
    createStyledComponent,
    DemoContent,
    Popover,
    Target
  },
  source: `
    () => {
      // Your root element must be a Popper Target component.
      // import { Target } from 'react-popper';
      const CustomTrigger = createStyledComponent(Target, {});

      return (
        <Popover content={<DemoContent />}>
          {
            ({ props, state }) => {
              const customTriggerProps = {
                ...props,
                component: 'button',
                role: undefined
              }
              return (
                <CustomTrigger {...customTriggerProps}>
                  Popover <span role="img" aria-hidden="true">{state.isOpen ? '▲' : '▼'}</span>
                </CustomTrigger>
              );
            }
          }
        </Popover>
      );
    }`
};
