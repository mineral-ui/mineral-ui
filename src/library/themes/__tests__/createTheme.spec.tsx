/* @flow */
import createTheme from '../createTheme';

const BLACK = 'custom_black';
const WHITE = 'custom_white';
const CUSTOM_RAMP = {
  [10]: '10',
  [20]: '20',
  [30]: '30',
  [40]: '40',
  [50]: '50',
  [60]: '60',
  [70]: '70',
  [80]: '80',
  [90]: '90',
  [100]: '100'
};
const CUSTOM_RAMP_WITH_INFLECTION = {
  [10]: '10',
  [20]: '20',
  [30]: '30',
  [40]: '40',
  [50]: '50',
  [60]: '60',
  [70]: '70',
  [80]: '80',
  [90]: '90',
  [100]: '100',
  inflection: 80
};
const OVERRIDES = {
  direction: 'rtl'
};

describe('createTheme', () => {
  it('generates default theme', () => {
    const theme = createTheme();
    expect(theme).toMatchSnapshot();
  });

  describe('with colors', () => {
    describe('with black value', () => {
      it('overrides value', () => {
        const theme = createTheme({ colors: { black: BLACK } });
        expect(theme).toMatchSnapshot();
      });
    });

    describe('with danger', () => {
      describe('as palette ramp name', () => {
        it('overrides ramp', () => {
          const theme = createTheme({
            colors: {
              danger: 'teal'
            }
          });
          expect(theme).toMatchSnapshot();
        });
      });

      describe('as custom ramp', () => {
        it('overrides ramp', () => {
          const theme = createTheme({
            colors: {
              danger: CUSTOM_RAMP
            }
          });
          expect(theme).toMatchSnapshot();
        });
      });
    });

    describe('with gray ramp', () => {
      it('overrides ramp', () => {
        const theme = createTheme({
          colors: {
            gray: CUSTOM_RAMP
          }
        });
        expect(theme).toMatchSnapshot();
      });
    });

    describe('with theme', () => {
      describe('as palette ramp name', () => {
        it('overrides ramp', () => {
          const theme = createTheme({
            colors: {
              theme: 'teal'
            }
          });
          expect(theme).toMatchSnapshot();
        });
      });

      describe('as custom ramp', () => {
        it('overrides ramp', () => {
          const theme = createTheme({
            colors: {
              theme: CUSTOM_RAMP
            }
          });
          expect(theme).toMatchSnapshot();
        });
      });
    });

    describe('with white value', () => {
      it('overrides value', () => {
        const theme = createTheme({ colors: { white: WHITE } });
        expect(theme).toMatchSnapshot();
      });
    });

    describe('overriding with a custom ramp with defined inflection', () => {
      it('overrides ramp', () => {
        const theme = createTheme({
          colors: {
            theme: CUSTOM_RAMP_WITH_INFLECTION
          }
        });
        expect(theme).toMatchSnapshot();
      });
    });

    describe('overriding with an invalid palette ramp name', () => {
      it('throws error', () => {
        expect(() => {
          // $FlowFixMe: We want the error here
          createTheme({ colors: { theme: 'bogus' } });
        }).toThrowError();
      });
    });
  });

  describe('with overrides', () => {
    it('overrides value', () => {
      const theme = createTheme({ overrides: OVERRIDES });
      expect(theme).toMatchSnapshot();
    });
  });
});
