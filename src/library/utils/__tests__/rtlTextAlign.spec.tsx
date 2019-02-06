/* @flow */
import { rtlTextAlign } from '../index';

const configs = [
  { align: undefined, direction: undefined, expected: undefined },
  { align: undefined, direction: 'ltr', expected: undefined },
  { align: 'start', direction: 'ltr', expected: 'left' },
  { align: 'end', direction: 'ltr', expected: 'right' },
  { align: undefined, direction: 'rtl', expected: undefined },
  { align: 'start', direction: 'rtl', expected: 'right' },
  { align: 'end', direction: 'rtl', expected: 'left' }
];

describe('rtlTextAlign', () => {
  let result;

  describe('returns appropriate value', () => {
    configs.forEach(({ align, direction, expected }) => {
      it(`when align=${align || 'undefined'}, direction=${direction ||
        'undefined'}`, () => {
        result = rtlTextAlign(align, direction);
        expect(result).toBe(expected);
      });
    });
  });
});
