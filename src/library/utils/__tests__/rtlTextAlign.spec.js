/* @flow */
import { rtlTextAlign } from '../index';

const configs = [
  { align: undefined, expected: undefined },
  { align: 'start', expected: 'left' },
  { align: 'end', expected: 'right' },
  { align: 'center', expected: 'center' }
];

describe('rtlTextAlign', () => {
  let result;

  describe('returns appropriate value', () => {
    configs.forEach(({ align, expected }) => {
      it(`when align=${align || 'undefined'}`, () => {
        result = rtlTextAlign(align);
        expect(result).toBe(expected);
      });
    });
  });
});
