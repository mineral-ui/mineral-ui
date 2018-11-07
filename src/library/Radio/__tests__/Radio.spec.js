/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Radio from '../Radio';
import examples from '../../../website/app/demos/Radio/Radio/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

function shallowRadio() {
  return shallow(<Radio label="example" />);
}

describe('Radio', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const radio = shallowRadio();

    expect(radio.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(<Radio label="test" />, [
      'RadioControl_backgroundColor'
    ]);
  });
});
