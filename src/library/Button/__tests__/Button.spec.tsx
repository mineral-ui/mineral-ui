/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInWrapper } from '../../../../utils/enzymeUtils';
import Button from '../Button';
import examples from '../../../website/app/demos/Button/Button/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowButton(props = {}) {
  const buttonProps = {
    children: 'Do Something',
    onClick: jest.fn(),
    ...props
  };
  return shallow(<Button {...buttonProps} />);
}

const mountButton = (props = {}) => {
  const buttonProps = {
    children: 'Do Something',
    onClick: jest.fn(),
    ...props
  };

  const wrapper = mountInWrapper(<Button {...buttonProps} />);
  const button = wrapper.find(Button);

  return [wrapper, button];
};

describe('Button', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const button = shallowButton();

    expect(button.exists()).toEqual(true);
  });

  it('calls onClick when clicked', () => {
    const button = shallowButton();

    button.simulate('click');

    expect(button.props().onClick).toHaveBeenCalled();
  });

  describe('root node', () => {
    describe('when props change', () => {
      it('retains focus', () => {
        const [wrapper, button] = mountButton();
        button.getDOMNode().focus();
        wrapper.setProps({ id: 'test' });

        expect(document.activeElement).toEqual(button.getDOMNode());
      });
    });
  });
});
