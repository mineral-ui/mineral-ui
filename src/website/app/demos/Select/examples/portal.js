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
  id: 'portal',
  title: 'Portal',
  description: `Use a portal to render the Select to the body of the page rather
than as a sibling of the trigger. This can be useful to visually "break out" of
a bounding container with \`overflow\` or \`z-index\` styles. Note that you may
have to adjust the \`modifiers\` to get the exact behavior that you want.`,
  scope: { data, ScrollParent, Select },
  source: `
    <ScrollParent>
      <Select
        data={data}
        usePortal
        isOpen
        modifiers={{
          preventOverflow: {
            escapeWithReference: true
          }
        }} />
    </ScrollParent>`
};
