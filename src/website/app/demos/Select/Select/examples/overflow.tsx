/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import Select from '../../../../../../library/Select';
import { basicData as data } from '../../common/selectData';

const _OverflowContainer = styled('div')({
  backgroundColor: 'aliceblue',
  margin: '0 0 105px 0',
  overflow: 'hidden',
  padding: '25px'
});

const OverflowContainer = (props: {}) => <_OverflowContainer {...props} />;

export default {
  id: 'overflow',
  title: 'Overflow',
  description: `A Select can extend beyond its bounding container (the blue area
in this example) even if the container has an \`overflow: hidden\` style. See
the [portal example](#portal) for even greater control.`,
  scope: { data, OverflowContainer, Select },
  source: `
    <OverflowContainer>
      <Select data={data} isOpen />
    </OverflowContainer>`
};
