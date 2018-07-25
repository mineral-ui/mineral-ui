/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import Button from '../../../library/Button';
import ButtonGroup from '../ButtonGroup';
import examples from '../../../website/app/demos/ButtonGroup/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

const defaultProps = {
  'aria-label': 'Test',
  children: <Button>Content</Button>,
  onChange: jest.fn(),
  onClick: jest.fn()
};

function shallowButtonGroup(props = {}) {
  const buttonGroupProps = {
    ...defaultProps,
    ...props
  };
  return shallow(<ButtonGroup {...buttonGroupProps} />);
}

function mountButtonGroup(props = {}) {
  const buttonGroupProps = {
    ...defaultProps,
    ...props
  };

  return mountInThemeProvider(<ButtonGroup {...buttonGroupProps} />);
}

describe('ButtonGroup', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const buttonGroup = shallowButtonGroup();

    expect(buttonGroup.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <ButtonGroup aria-label="Test">
        <Button>Content</Button>
      </ButtonGroup>,
      ['ButtonGroupButton_borderStartColor']
    );
  });

  describe('event handlers', () => {
    let button, buttonGroup;

    beforeEach(() => {
      defaultProps.onClick.mockReset();
      defaultProps.onChange.mockReset();
    });

    describe('when no mode', () => {
      beforeEach(() => {
        [, buttonGroup] = mountButtonGroup();
        button = buttonGroup.find('button');

        button.simulate('click');
      });

      it('calls onClick handler', () => {
        expect(defaultProps.onClick).toHaveBeenCalled();
      });
      it('does not call onChange handler', () => {
        expect(defaultProps.onChange).not.toHaveBeenCalled();
      });
    });

    describe('when mode=checkbox', () => {
      beforeEach(() => {
        [, buttonGroup] = mountButtonGroup({ mode: 'checkbox' });
        button = buttonGroup.find('button');

        button.simulate('click');
      });

      it('calls onClick handler', () => {
        expect(defaultProps.onClick).toHaveBeenCalled();
      });

      it('calls onChange handler', () => {
        button.simulate('click');

        expect(defaultProps.onChange).toHaveBeenCalledTimes(2);
      });
    });

    describe('when mode=radio', () => {
      beforeEach(() => {
        [, buttonGroup] = mountButtonGroup({ mode: 'radio' });
        button = buttonGroup.find('button');

        button.simulate('click');
      });

      it('calls onClick handler', () => {
        expect(defaultProps.onClick).toHaveBeenCalled();
      });

      it('calls onChange when Button is toggled', () => {
        button.simulate('click');

        expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
      });
    });
  });
});
