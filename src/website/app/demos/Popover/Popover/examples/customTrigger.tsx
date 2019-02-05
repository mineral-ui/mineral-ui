/* @flow */

import styled from '@emotion/styled';
import { Reference } from 'react-popper';
import Popover from '../../../../../../library/Popover';
import DemoContent from '../../common/DemoContent';
import renderPropsDescription from '../../../common/renderPropsDescription';

export default {
  id: 'custom-trigger',
  title: 'Custom Trigger',
  description: `Use the \`children\` render prop to provide custom rendering
control of the trigger. ${renderPropsDescription}`,
  scope: {
    styled,
    DemoContent,
    Popover,
    Reference
  },
  source: `
    () => {
      // Your render function must return a Popper Reference component.
      // import { Reference } from 'react-popper';
      const CustomTrigger = styled('button')();      

      return (
        <Popover content={<DemoContent />}>
          {
            ({ props, state }) => {
              return (
                <Reference>
                  {({ ref: popperRef }) => {
                    const triggerProps = {
                      ...props,
                      ref: (node) => {
                        popperRef(node);
                        props.ref(node);
                      },
                      role: undefined
                    }

                    return (
                      <CustomTrigger {...triggerProps}>
                        Popover <span role="img" aria-hidden="true">{state.isOpen ? '▲' : '▼'}</span>
                      </CustomTrigger>
                    );
                  }}
                </Reference>
              );
            }
          }
        </Popover>
      );
    }`
};
