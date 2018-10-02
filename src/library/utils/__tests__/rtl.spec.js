/* @flow */
import { rtlAlign, rtlTextAlign } from '../index';

type Config = {
  align: $FlowFixMe,
  capitalize?: boolean,
  direction?: 'ltr' | 'rtl',
  expected?: string
};

type Configs = {
  [string]: Array<Config>
};

const configs: Configs = {
  rtlAlign: [
    { align: 'start', direction: undefined, expected: 'left' },
    { align: 'start', direction: 'ltr', expected: 'left' },
    { align: 'end', direction: 'ltr', expected: 'right' },
    { align: 'start', direction: 'rtl', expected: 'right' },
    { align: 'end', direction: 'rtl', expected: 'left' },
    { align: 'end', capitalize: true, direction: 'rtl', expected: 'Left' }
  ],
  rtlTextAlign: [
    { align: undefined, direction: undefined, expected: undefined },
    { align: undefined, direction: 'ltr', expected: undefined },
    { align: 'start', direction: undefined, expected: 'left' },
    { align: 'start', direction: 'ltr', expected: 'left' },
    { align: 'end', direction: 'ltr', expected: 'right' },
    { align: undefined, direction: 'rtl', expected: undefined },
    { align: 'start', direction: 'rtl', expected: 'right' },
    { align: 'end', direction: 'rtl', expected: 'left' }
  ]
};

const functions = {
  rtlAlign,
  rtlTextAlign
};

const value = (input) => (input ? `'${input}'` : 'undefined');

Object.keys(configs).forEach((config) => {
  describe(config, () => {
    configs[config].forEach(({ align, capitalize, direction, expected }) => {
      // prettier-ignore
      it(
        `returns ${value(expected)} when align=${value(align)}, direction=${value(direction)}, ${capitalize === false ? 'capitalize=false' : ''}`,
        () => {
          const result = functions[config]({align, direction, capitalize});
          expect(result).toBe(expected);
        }
      );
    });
  });
});
