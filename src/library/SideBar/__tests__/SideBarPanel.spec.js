/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import SideBarPanel from '../SideBarPanel';
import examples from '../../../website/app/demos/SideBar/SideBarPanel/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

function shallowSideBarPanel() {
  return shallow(<SideBarPanel />);
}

describe('SideBarPanel', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const sideBarPanel = shallowSideBarPanel();

    expect(sideBarPanel.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(<SideBarPanel />, ['SideBarPanel_backgroundColor']);
  });
});
