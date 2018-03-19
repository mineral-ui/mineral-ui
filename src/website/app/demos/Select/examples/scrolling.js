/* @flow */
import React, { Component } from 'react';
import { pxToEm } from '../../../../../library/styles';
import ScrollParent from '../../Popover/components/ScrollBox';
import _Select from '../../../../../library/Select';
import { basicData as data } from '../components/selectData';

type Props = any;

// Not a functional component because ScrollParent throws a ref on it
class Select extends Component<Props> {
  render() {
    return (
      <div style={{ width: pxToEm(224) }}>
        <_Select {...this.props} />
      </div>
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
