/* @flow */

import styled from '@emotion/styled';
import { Reference } from 'react-popper';
import Select from '../../../../../../library/Select';
import { basicData as data } from '../../common/selectData';
import renderPropsDescription from '../../../common/renderPropsDescription';

export default {
  id: 'custom-trigger',
  title: 'Custom Trigger',
  description: `Use the \`trigger\` render prop to provide custom rendering
control of the trigger. ${renderPropsDescription}
`,
  scope: {
    styled,
    data,
    Reference,
    Select
  },
  source: `
    () => {
      // Your render function must return a Popper Reference component.
      // import { Reference } from 'react-popper';
      const CustomTrigger = styled('button')();

      const trigger = ({ props, state }) => {
        return (
          <Reference>
            {({ ref: popperRef }) => {
              const { isOpen, selectedItem } = state;
              const text = selectedItem ? selectedItem.text : 'Please select...';
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
                  {text} <span role="img" aria-hidden="true">{isOpen ? '▲' : '▼'}</span>
                </CustomTrigger>
              );
            }}
          </Reference>
        );
      };

      return (
        <Select data={data} trigger={trigger} />
      );
    }`
};
