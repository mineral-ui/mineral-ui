/* @flow */
import React from 'react';
import { isValidProp, reactProps } from '../../utils';

describe('isValidProp', () => {
  describe('when tag is a component', () => {
    it('all props are valid', () => {
      expect(isValidProp(() => <div />, 'xyz')).toBe(true);
    });
  });

  describe('when tag is a string', () => {
    describe('react props', () => {
      it('are valid', () => {
        Object.keys(reactProps).forEach((prop) => {
          expect(isValidProp('div', prop)).toBe(true);
        });
      });
    });

    describe('html attributes', () => {
      it('valid attributes are valid', () => {
        expect(isValidProp('div', 'title')).toBe(true);
      });

      it('invalid attributes are invalid', () => {
        expect(isValidProp('div', 'xyz')).toBe(false);
      });
    });

    describe('svg attributes', () => {
      it('valid attributes are valid', () => {
        expect(isValidProp('svg', 'viewBox')).toBe(true);
      });

      it('invalid attributes are invalid', () => {
        expect(isValidProp('svg', 'xyz')).toBe(false);
      });
    });

    describe('custom attributes', () => {
      it('data attributes are valid', () => {
        expect(isValidProp('div', 'data-test')).toBe(true);
      });

      it('aria attributes are valid', () => {
        expect(isValidProp('div', 'aria-label')).toBe(true);
      });
    });
  });
});
