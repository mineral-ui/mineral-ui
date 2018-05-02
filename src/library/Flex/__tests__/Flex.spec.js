/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import testDemoExamples from '../../../../utils/testDemoExamples';
import Flex, { FlexItem } from '../../Flex';
import examples from '../../../website/app/demos/Flex/examples/Flex';

function shallowFlex(flexProps = {}, flexItemProps = {}) {
  return shallow(
    <Flex {...flexProps}>
      <FlexItem {...flexItemProps} />
    </Flex>
  );
}

describe('Flex', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const flex = shallowFlex();

    expect(flex.exists()).toEqual(true);
  });
});
