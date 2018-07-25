/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../Icon';
import examples from '../../../website/app/demos/Icon/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

function shallowIcon(props = {}) {
  const iconProps = {
    ...props
  };
  return shallow(<Icon {...iconProps} />);
}

describe('Icon', () => {
  testDemoExamples(examples, { exclude: ['categories'] });

  it('renders', () => {
    const icon = shallowIcon();

    expect(icon.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(<Icon />, ['Icon_fill', 'Icon_size_medium']);
    testThemeOverrides(<Icon size="small" />, ['Icon_size_small']);
    testThemeOverrides(<Icon size="large" />, ['Icon_size_large']);
  });
});
