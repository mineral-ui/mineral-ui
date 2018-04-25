/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import MenuGroup from '../MenuGroup';
import examples from '../../../website/app/demos/Menu/examples/MenuGroup';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowMenuGroup(props = {}) {
  const menuGroupProps = {
    ...props
  };

  return shallow(<MenuGroup {...menuGroupProps} />);
}

describe('MenuGroup', () => {
  testDemoExamples(examples);

  describe('renders', () => {
    it('root', () => {
      const menuGroup = shallowMenuGroup();

      expect(menuGroup.exists()).toEqual(true);
    });
  });
});
