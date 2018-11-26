/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInWrapper } from '../../../../utils/enzymeUtils';
import Button from '../Button';
import * as styled from '../styled';
import examples from '../../../website/app/demos/Button/Button/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

function shallowButton(props = {}) {
  const buttonProps = {
    children: 'Do Something',
    onClick: jest.fn(),
    ...props
  };
  return shallow(<Button {...buttonProps} />);
}

// eslint-disable-next-line react/display-name
const NonFilteringLink = (props) => <a {...props}>Do Something</a>;

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

  describe('theme overrides', () => {
    testThemeOverrides(<Button />, ['Button_backgroundColor']);
    testThemeOverrides(<Button primary />, ['Button_backgroundColor_primary']);
  });

  it('calls onClick when clicked', () => {
    const button = shallowButton();

    button.simulate('click');

    expect(button.props().onClick).toHaveBeenCalled();
  });

  describe('root node', () => {
    let button, createRootNode, wrapper;

    beforeEach(() => {
      createRootNode = jest.spyOn(styled, 'createButtonRootNode');
      [wrapper, button] = mountButton();
      createRootNode.mockClear();
    });

    afterEach(() => {
      createRootNode.mockRestore();
    });

    describe('when element prop changed', () => {
      it('is recreated', () => {
        wrapper.setProps({ element: 'a' });

        expect(createRootNode).toHaveBeenCalledTimes(1);
      });
    });

    describe('when other props change', () => {
      it('is not recreated', () => {
        wrapper.setProps({ id: 'test' });

        expect(createRootNode).not.toHaveBeenCalled();
      });

      it('retains focus', () => {
        button.getDOMNode().focus();
        wrapper.setProps({ id: 'test' });

        expect(document.activeElement).toEqual(button.getDOMNode());
      });
    });
  });

  describe('type prop', () => {
    describe('is filtered', () => {
      describe('when type=[not a button type]', () => {
        it('when element=button', () => {
          const [, button] = mountButton({
            type: 'foo'
          });
          expect(button).toMatchSnapshot();
        });
      });

      describe('when type=[button type]', () => {
        it('when element=a', () => {
          const [, anchor] = mountButton({
            element: 'a'
          });
          expect(anchor).toMatchSnapshot();
        });

        it('when element=NonFilteringLink', () => {
          const [, link] = mountButton({
            element: NonFilteringLink
          });
          expect(link).toMatchSnapshot();
        });
      });
    });

    describe('is not filtered', () => {
      describe('when type=[button type]', () => {
        it('when element=button', () => {
          const [, button] = mountButton();
          expect(button).toMatchSnapshot();
        });
      });

      describe('when type=[MIME type]', () => {
        it('when element=a', () => {
          const [, anchor] = mountButton({
            element: 'a',
            type: 'video'
          });
          expect(anchor).toMatchSnapshot();
        });

        it('when element=NonFilteringLink', () => {
          const [, link] = mountButton({
            element: NonFilteringLink,
            type: 'video'
          });
          expect(link).toMatchSnapshot();
        });
      });
    });
  });
});
