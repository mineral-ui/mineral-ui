/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import SideBar from '../SideBar';
import examples from '../../../website/app/demos/SideBar/SideBar/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowSideBar() {
  return shallow(<SideBar />);
}

describe('SideBar', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const sideBar = shallowSideBar();

    expect(sideBar.exists()).toEqual(true);
  });
});
