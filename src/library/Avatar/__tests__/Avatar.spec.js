/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../Avatar';
import examples from '../../../website/app/demos/Avatar/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowAvatar(props) {
  return shallow(<Avatar {...props}>A</Avatar>);
}

describe('Avatar', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const avatar = shallowAvatar({});

    expect(avatar.exists()).toEqual(true);
  });
});
