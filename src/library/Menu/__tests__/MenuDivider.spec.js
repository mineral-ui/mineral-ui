/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import MenuDivider from '../MenuDivider';
import examples from '../../../website/app/demos/Menu/examples/MenuDivider';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowMenuDivider(props = {}) {
  const menuDividerProps = {
    ...props
  };

  return shallow(<MenuDivider {...menuDividerProps} />);
}

describe('MenuDivider', () => {
  testDemoExamples(examples);

  describe('renders', () => {
    it('root', () => {
      const menuDivider = shallowMenuDivider();

      expect(menuDivider.exists()).toEqual(true);
    });
  });
});
