/* @flow */
import themeFromTokens, { themeFromColorTokens } from '../themeFromTokens';

const ALIASES = {
  color_black: 'black',
  color_brand: 'brand_10',
  color_danger: 'red_20',
  color_gray: 'gray_30',
  color_white: 'white'
};
const BAD_RAMP = {
  [1]: 'bad'
};
const CUSTOM_RAMP = {
  [10]: 'custom_brand',
  [20]: 'custom_danger',
  [30]: 'custom_gray',
  [40]: '40',
  [50]: '50',
  [60]: '60',
  [70]: '70',
  [80]: '80',
  [90]: '90',
  [100]: '100'
};
const TOKENS_BLACK = {
  color_black: 'black'
};
const TOKENS_BRAND = {
  color_brand: 'blue'
};
const TOKENS_DANGER = {
  color_danger: 'red'
};
const TOKENS_DEFAULT = {
  color_theme: 'blue',
  pixel: '16px',
  boxShadow: '1px 1px 1px rgba(0,0,0,0.1)',
  breakpoint: '16px',
  fontSize_test: '1rem',
  untouched: 100
};
const TOKENS_GRAY = {
  color_gray: 'gray'
};
const TOKENS_WHITE = {
  color_white: 'white'
};

const themeFromColorTokensWithAliases = (color, tokens) =>
  themeFromColorTokens({
    aliases: ALIASES,
    color,
    colorName: 'unimportant',
    tokens
  });

describe('themeFromTokens', () => {
  describe('converts', () => {
    const theme = themeFromTokens(TOKENS_DEFAULT);
    it('rems to ems', () => {
      expect(theme.fontSize_test).toMatchSnapshot();
    });

    it(`'brand' to 'theme' in the key`, () => {
      expect(theme.color_theme).toMatchSnapshot();
      expect(theme.color_brand).toBeUndefined();
    });

    it('leaves some stuff alone', () => {
      expect(theme.boxShadow).toMatchSnapshot();
      expect(theme.untouched).toMatchSnapshot();
    });

    describe('px to ems', () => {
      it('when not a breakpoint', () => {
        expect(theme.pixel).toMatchSnapshot();
      });

      it(`except when key contains 'breakpoint'`, () => {
        expect(theme.breakpoint).toMatchSnapshot();
      });
    });
  });
});

describe('themeFromTokens', () => {
  describe('with colors', () => {
    describe('with black', () => {
      it('overrides black value', () => {
        const theme = themeFromColorTokensWithAliases(
          'custom_black',
          TOKENS_BLACK
        );
        expect(theme.color_black).toMatchSnapshot();
      });
    });

    describe('with intent', () => {
      it('overrides intent value', () => {
        const theme = themeFromColorTokensWithAliases(
          CUSTOM_RAMP,
          TOKENS_DANGER
        );
        expect(theme.color_danger).toMatchSnapshot();
      });
    });

    describe('with gray', () => {
      it('overrides gray value', () => {
        const theme = themeFromColorTokensWithAliases(CUSTOM_RAMP, TOKENS_GRAY);
        expect(theme.color_gray).toMatchSnapshot();
      });
    });

    describe('with theme', () => {
      it('overrides theme value', () => {
        const theme = themeFromColorTokensWithAliases(
          CUSTOM_RAMP,
          TOKENS_BRAND
        );
        expect(theme.color_theme).toMatchSnapshot();
      });
    });

    describe('with white', () => {
      it('overrides white value', () => {
        const theme = themeFromColorTokensWithAliases(
          'custom_white',
          TOKENS_WHITE
        );
        expect(theme.color_white).toMatchSnapshot();
      });
    });

    describe('with invalid ramp as any color', () => {
      it('throws error', () => {
        expect(() => {
          themeFromColorTokensWithAliases(BAD_RAMP, TOKENS_DANGER);
        }).toThrowError();
      });
    });
  });
});
