/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import Select from '../../../../../../library/Select';
import renderPropsDescription from '../../../common/renderPropsDescription';
import item from '../../../Menu/common/customItem';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const _DemoLayout: StyledComponent<{ [key: string]: any }> = styled('div')({
  marginBottom: 160
});

const DemoLayout = (props: {}) => <_DemoLayout {...props} />;

export default {
  id: 'custom-item',
  title: 'Custom Item',
  description: `Use the \`item\` render prop to provide custom rendering control
of all [MenuItems](/components/menu-item) in the Menu. ${renderPropsDescription}

The implementation of \`item\` used in the following example can be seen
in full in the [Menu](/components/menu/#custom-item) example.
`,
  scope: { DemoLayout, item, Select },
  source: `
    () => {
      const data = [
        {
          avatar: '/images/avatar.svg',
          text: 'Newton',
          value: 'newton',
          work: 'Principia Mathematica'
        },
        {
          avatar: '/images/avatar.svg',
          text: 'Descartes',
          value: 'descartes',
          work: 'La Géométrie'
        },
        {
          avatar: '/images/avatar.svg',
          text: 'Euclid',
          value: 'euclid',
          work: 'Elements'
        }
      ];

      return (
        <DemoLayout>
          <Select data={data} item={item} isOpen />
        </DemoLayout>
      );
    }`
};
