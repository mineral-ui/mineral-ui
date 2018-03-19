/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../Icon';
import examples from '../../../website/app/demos/Icon/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowIcon(props = {}) {
  const iconProps = {
    ...props
  };
  return shallow(<Icon {...iconProps} />);
}

describe('Icon', () => {
  it('renders', () => {
    const icon = shallowIcon();

    expect(icon.exists()).toEqual(true);
  });

  testDemoExamples(examples, { exclude: ['categories'] });
});
