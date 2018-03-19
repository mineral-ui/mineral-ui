/* @flow */
import { getResponsiveStyles } from '../../styles';

const allResponsiveStyles = {
  alignItems: ['start', 'center', 'end'],
  flexWrap: [true, true, false]
};
const allResponsiveOutput = {
  alignItems: 'start',
  flexWrap: 'wrap',

  '@media (min-width: 100px) and (max-width: 199px)': {
    alignItems: 'center',
    flexWrap: 'wrap'
  },

  '@media (min-width: 200px)': {
    alignItems: 'end',
    flexWrap: 'nowrap'
  }
};
const nonResponsiveStyles = {
  alignItems: 'start',
  flexWrap: true
};
const nonResponsiveOutput = {
  alignItems: 'start',
  flexWrap: 'wrap'
};
const someResponsiveStyles = {
  alignItems: ['start', 'center', 'end'],
  flexWrap: true
};
const someResponsiveOutput = {
  alignItems: 'start',
  flexWrap: 'wrap',

  '@media (min-width: 100px) and (max-width: 199px)': {
    alignItems: 'center'
  },

  '@media (min-width: 200px)': {
    alignItems: 'end'
  }
};
const withNullsResponsiveStyles = {
  alignItems: [null, 'center', 'end'],
  color: ['red', null, 'blue'],
  flexDirection: ['column', 'row', null],
  flexWrap: [null, null, true],
  fontStyles: [null, 'italic', null],
  fontWeight: ['bold', null, null],
  justifyContent: [null, null, null]
};
const withNullsResponsiveOutput = {
  alignItems: null,
  color: 'red',
  flexDirection: 'column',
  flexWrap: null,
  fontStyles: null,
  fontWeight: 'bold',
  justifyContent: null,

  '@media (min-width: 100px) and (max-width: 199px)': {
    alignItems: 'center',
    color: 'red',
    flexDirection: 'row',
    flexWrap: null,
    fontStyles: 'italic',
    fontWeight: 'bold',
    justifyContent: null
  },

  '@media (min-width: 200px)': {
    alignItems: 'end',
    color: 'blue',
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontStyles: 'italic',
    fontWeight: 'bold',
    justifyContent: null
  }
};

const mapValueToProperty = (property, value) => {
  if (property === 'flexWrap') {
    return value ? 'wrap' : value === false ? 'nowrap' : value;
  } else {
    return value;
  }
};
const breakpoints = [100, 'test'];
const otherParameters = {
  mapValueToProperty,
  theme: {
    breakpoint_test: 200
  }
};

describe('getResponsiveStyles', () => {
  describe('outputs correct styles', () => {
    it('when all properties are responsive', () => {
      const result = getResponsiveStyles({
        ...otherParameters,
        breakpoints,
        styles: allResponsiveStyles
      });
      expect(result).toEqual(allResponsiveOutput);
    });
    it('when no properties are responsive', () => {
      const result = getResponsiveStyles({
        ...otherParameters,
        styles: nonResponsiveStyles
      });
      expect(result).toEqual(nonResponsiveOutput);
    });
    it('when some properties are responsive', () => {
      const result = getResponsiveStyles({
        ...otherParameters,
        breakpoints,
        styles: someResponsiveStyles
      });
      expect(result).toEqual(someResponsiveOutput);
    });
    it('when all properties are responsive and some values are null', () => {
      const result = getResponsiveStyles({
        ...otherParameters,
        breakpoints,
        styles: withNullsResponsiveStyles
      });
      expect(result).toEqual(withNullsResponsiveOutput);
    });
  });
});
