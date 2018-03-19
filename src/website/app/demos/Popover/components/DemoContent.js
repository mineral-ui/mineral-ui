/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../../library/styles';

const Root = createStyledComponent('div', {
  width: '13.75em'
});

export default function DemoContent() {
  return (
    <Root>
      Light years star stuff harvesting star light citizens of distant epochs
      encyclopaedia galactica.
    </Root>
  );
}
