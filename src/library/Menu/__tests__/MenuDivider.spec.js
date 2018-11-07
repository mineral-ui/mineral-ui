/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { menuDividerTheme } from '../themes';
import MenuDivider from '../MenuDivider';
import examples from '../../../website/app/demos/Menu/MenuDivider/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

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

  describe('theme overrides', () => {
    testThemeOverrides(
      <MenuDivider />,
      getProcessedComponentThemeKeys(menuDividerTheme)
    );
  });
});
