/* @flow */
import React from 'react';
import { mount } from 'enzyme';
import semver from 'semver';
import { createStyledComponent } from '../../styles';

const mountButton = (props = {}, styles = {}, options = {}) => {
  const Button = createStyledComponent('button', styles, options);
  return mount(<Button {...props} />);
};

describe('createStyledComponent', () => {
  const wrapper = mountButton({ type: 'button', xyz: true });
  const button = wrapper.childAt(0);

  it('forwards valid DOM attributes', () => {
    expect(button.props().type).toBeDefined();
  });

  it('filters invalid DOM attributes', () => {
    expect(button.props().xyz).toBeUndefined();
  });

  describe('with withProps option', () => {
    const wrapper = mountButton(
      {},
      {},
      {
        withProps: {
          type: 'button'
        }
      }
    );
    const button = wrapper.childAt(0);

    it('passes props to component', () => {
      expect(button.props().type).toBe('button');
    });
  });

  describe('with filterProps option', () => {
    const wrapper = mountButton(
      { value: 'test' },
      {},
      {
        filterProps: ['value']
      }
    );
    const button = wrapper.childAt(0);

    it('filters filterProps', () => {
      expect(button.props().filterMe).toBeUndefined();
    });
  });

  describe('with forwardProps option', () => {
    if (semver.lt(React.version, '16.0.0')) {
      // eslint-disable-next-line no-console
      console.log(
        'NOTE: The following warning is expected and safe to ignore.'
      );
    }

    const wrapper = mountButton(
      { forwardme: 'true' },
      {},
      {
        forwardProps: ['forwardme']
      }
    );
    const button = wrapper.childAt(0);

    it('forwards forwardme', () => {
      expect(button.props().forwardme).toBeDefined();
    });
  });

  describe('with rootEl option', () => {
    const Image = createStyledComponent('img', {});
    const StyledImage = createStyledComponent(
      Image,
      {},
      {
        rootEl: 'div'
      }
    );

    const wrapper = mount(<StyledImage src="http" />);
    const image = wrapper.childAt(0);

    it('filters invalid DOM attributes', () => {
      // src is invalid here because rootEl is div
      expect(image.props().src).toBeUndefined();
    });
  });

  describe('styles', () => {
    const styleObject = { color: 'red' };
    const styleArray = [{ color: 'red' }, { backgroundColor: 'blue' }];
    const styleObjectFunction = () => styleObject;
    const styleArrayFunction = () => styleArray;

    it('supports style objects', () => {
      const wrapper = mountButton({}, styleObject);

      expect(wrapper).toHaveStyleRule('color', 'red');
    });

    it('supports style arrays', () => {
      const wrapper = mountButton({}, styleArray);

      expect(wrapper).toHaveStyleRule('color', 'red');
      expect(wrapper).toHaveStyleRule('background-color', 'blue');
    });

    it('supports style functions that return objects', () => {
      const wrapper = mountButton({}, styleObjectFunction);

      expect(wrapper).toHaveStyleRule('color', 'red');
    });

    it('supports style functions that return arrays', () => {
      const wrapper = mountButton({}, styleArrayFunction);

      expect(wrapper).toHaveStyleRule('color', 'red');
      expect(wrapper).toHaveStyleRule('background-color', 'blue');
    });
  });
});
