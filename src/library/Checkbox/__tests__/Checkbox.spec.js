/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInWrapper } from '../../../../utils/enzymeUtils';
import Checkbox from '../Checkbox';
import examples from '../../../website/app/demos/Checkbox/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

const defaultProps = {
  label: 'example'
};

function shallowCheckbox(props = {}) {
  const checkboxProps = {
    ...defaultProps,
    ...props
  };
  return shallow(<Checkbox {...checkboxProps} />);
}

describe('Checkbox', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const checkbox = shallowCheckbox();

    expect(checkbox.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(<Checkbox label="test" />, [
      'CheckboxControl_backgroundColor'
    ]);
  });

  describe('indeterminate', () => {
    let wrapper, checkbox;
    const onClick = jest.fn();
    const onChange = jest.fn();

    beforeEach(() => {
      onClick.mockReset();
      onChange.mockReset();
    });

    describe('when uncontrolled', () => {
      beforeEach(() => {
        wrapper = mountInWrapper(
          <Checkbox
            {...defaultProps}
            defaultIndeterminate
            onClick={onClick}
            onChange={onChange}
          />
        );
        checkbox = wrapper.find('input');
      });

      it('is initialized correctly', () => {
        expect(checkbox.instance().indeterminate).toEqual(true);
        expect(checkbox.instance().checked).toEqual(true);
      });

      describe('when clicked', () => {
        it('toggles indeterminate and checked state', () => {
          checkbox.simulate('click');
          wrapper.update();
          checkbox = wrapper.find('input').instance();

          expect(checkbox.indeterminate).toEqual(false);
          expect(checkbox.checked).toEqual(false);
        });

        it('calls onChange handler when provided', () => {
          checkbox.simulate('click');

          expect(onChange).toHaveBeenCalledTimes(1);
        });

        it('calls onClick handler when provided', () => {
          checkbox.simulate('click');

          expect(onClick).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe('controlled', () => {
      beforeEach(() => {
        wrapper = mountInWrapper(
          <Checkbox
            {...defaultProps}
            indeterminate
            onClick={onClick}
            onChange={onChange}
          />
        );
        checkbox = wrapper.find('input');
      });

      it('is initialized correctly', () => {
        expect(checkbox.instance().indeterminate).toEqual(true);
        expect(checkbox.instance().checked).toEqual(true);
      });

      describe('when clicked', () => {
        it('does not toggle indeterminate or checked state', () => {
          checkbox.simulate('click');
          wrapper.update();
          checkbox = wrapper.find('input').instance();

          expect(checkbox.indeterminate).toEqual(true);
          expect(checkbox.checked).toEqual(true);
        });

        it('calls onChange handler when provided', () => {
          checkbox.simulate('click');

          expect(onChange).toHaveBeenCalledTimes(1);
        });

        it('calls onClick handler when provided', () => {
          checkbox.simulate('click');

          expect(onChange).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
