/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../Avatar';
import examples from '../../../website/app/demos/Avatar/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

function shallowAvatar(props = {}) {
  return shallow(<Avatar {...props}>A</Avatar>);
}

describe('Avatar', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const avatar = shallowAvatar();

    expect(avatar.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(<Avatar>A</Avatar>, [
      'Avatar_fontSize_large',
      'Avatar_fontWeight',
      'Avatar_size_large'
    ]);
  });
});
