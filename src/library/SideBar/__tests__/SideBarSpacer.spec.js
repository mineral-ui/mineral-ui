/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { SideBarSpacer } from '../styled';
import examples from '../../../website/app/demos/SideBar/SideBarSpacer/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowSideBarSpacer() {
  return shallow(<SideBarSpacer />);
}

describe('SideBarSpacer', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const sideBarSpacer = shallowSideBarSpacer();

    expect(sideBarSpacer.exists()).toEqual(true);
  });
});
