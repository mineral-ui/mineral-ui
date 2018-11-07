/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { FlexItem } from '../../Flex';
import testDemoExamples from '../../../../utils/testDemoExamples';
import examples from '../../../website/app/demos/Flex/FlexItem/examples';

function shallowFlexItem(props = {}) {
  return shallow(<FlexItem {...props} />);
}

describe('FlexItem', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const flexItem = shallowFlexItem();

    expect(flexItem.exists()).toEqual(true);
  });

  describe('composition', () => {
    it('composes Box by default', () => {
      const flexItem = shallowFlexItem();

      expect(flexItem).toMatchSnapshot();
    });

    it('composes Flex when flex={true}', () => {
      const flexItem = shallowFlexItem({
        flex: true
      });

      expect(flexItem).toMatchSnapshot();
    });
  });
});
