/* @flow */
import { pxToEm } from '../../styles';

describe('pxToEm', () => {
  describe('converts', () => {
    it('integers', () => {
      expect(pxToEm(2)).toEqual('0.125em');
    });

    it('floats', () => {
      expect(pxToEm(2.5)).toEqual('0.15625em');
    });

    it('strings without units', () => {
      expect(pxToEm('8')).toEqual('0.5em');
    });

    it('strings with px units', () => {
      expect(pxToEm('4px')).toEqual('0.25em');
    });

    it('strings with floats', () => {
      expect(pxToEm('2.5')).toEqual('0.15625em');
    });

    it('strings with floats and px units', () => {
      expect(pxToEm('2.5px')).toEqual('0.15625em');
    });
  });

  describe('errors with bad input', () => {
    [
      '2em',
      '2rem',
      '',
      'string without numbers',
      'px',
      {},
      ['array'],
      () => {}
    ].forEach((input) => {
      // $FlowFixMe: We're fine with coercing the input here
      it(`${input}`, () => {
        // $FlowFixMe: We want the error
        expect(() => pxToEm(input)).toThrowError();
      });
    });
  });
});
