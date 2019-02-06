/* @flow */
export enum ALIGN {
  start = 'start',
  end = 'end',
  center = 'center',
  justify = 'justify'
};

export enum APPEARANCE {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  mouse = 'mouse',
  p = 'p',
  prose = 'prose'
};

export enum FONT_WEIGHT {
  regular = 'regular',
  semiBold = 'semiBold',
  bold = 'bold',
  extraBold = 'extraBold'
};

export const HEADING_ELEMENTS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export const MONOSPACE_ELEMENTS = ['code', 'kbd', 'pre', 'samp'];
