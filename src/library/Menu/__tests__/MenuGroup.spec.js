/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import MenuGroup, { componentTheme } from '../MenuGroup';
import examples from '../../../website/app/demos/Menu/examples/MenuGroup';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

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

  describe('theme overrides', () => {
    testThemeOverrides(
      <MenuGroup />,
      getProcessedComponentThemeKeys(componentTheme)
    );
  });
});
