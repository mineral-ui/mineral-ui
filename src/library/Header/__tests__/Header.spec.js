/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import testDemoExamples from '../../../../utils/testDemoExamples';
import Header from '../../Header';
import examples from '../../../website/app/demos/Header/Header/examples';

function shallowHeader(props = {}) {
  return shallow(<Header {...props} />);
}

describe('Header', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const header = shallowHeader();

    expect(header.exists()).toEqual(true);
  });
});
