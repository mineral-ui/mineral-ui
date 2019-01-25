/* @flow */

import styled from '@emotion/styled';
import { Reference } from 'react-popper';
import Dropdown from '../../../../../../library/Dropdown';
import data from '../../../Menu/common/menuData';
import renderPropsDescription from '../../../common/renderPropsDescription';

export default {
  id: 'custom-trigger',
  title: 'Custom Trigger',
  description: `Use the \`trigger\` render prop to provide custom rendering
control of the trigger. ${renderPropsDescription}`,
  scope: {
    styled,
    data,
    Dropdown,
    Reference
  },
  source: `
    () => {
      // Your render function must return a Popper Reference component.
      // import { Reference } from 'react-popper';
      const CustomTrigger = styled('button')();

      return (
        <Dropdown data={data}>
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
                    };

                    return (
                      <CustomTrigger {...triggerProps}>
                        Menu <span role="img" aria-hidden="true">{state.isOpen ? '▲' : '▼'}</span>
                      </CustomTrigger>
                    );
                  }}
                </Reference>
              );
            }
          }
        </Dropdown>
      );
    }`
};
