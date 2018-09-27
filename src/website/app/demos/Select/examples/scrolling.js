/* @flow */
import React, { Component } from 'react';
import { createStyledComponent, pxToRem } from '../../../../../library/styles';
import ScrollParent from '../../Popover/components/ScrollBox';
import _Select from '../../../../../library/Select';
import { basicData as data } from '../components/selectData';

type Props = any;

const Wrapper = createStyledComponent('div', ({ theme }) => ({
  width: pxToRem(224, theme)
}));

// Not a functional component because ScrollParent throws a ref on it
class Select extends Component<Props> {
  render() {
    return (
      <Wrapper>
        <_Select {...this.props} />
      </Wrapper>
    );
  }
}

export default {
  id: 'scrolling-container',
  title: 'Scrolling Container',
  description: `Select will attempt to stay visible in an \`overflow: scroll\` container.`,
  scope: { data, ScrollParent, Select },
  source: `
    <ScrollParent>
      <Select data={data} isOpen />
    </ScrollParent>
  `
};
