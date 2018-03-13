/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';
import examples from '../../website/app/demos/Button/examples';
import testDemoExamples from '../../../utils/testDemoExamples';

function shallowButton(props = {}) {
  const buttonProps = {
    children: 'Do Something',
    onClick: jest.fn(),
    ...props
  };
  return shallow(<Button {...buttonProps} />);
}

describe('Button', () => {
  it('renders', () => {
    const button = shallowButton();

    expect(button.exists()).toEqual(true);
  });

  it('calls onClick when clicked', () => {
    const button = shallowButton();

    button.simulate('click');

    expect(button.props().onClick).toHaveBeenCalled();
  });

  testDemoExamples(examples);
});
