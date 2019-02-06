/* @flow */
export enum ALIGN_ITEMS {
  start = 'start',
  end = 'end',
  center = 'center',
  stretch = 'stretch'
};

export const ALIGN_SELF = ALIGN_ITEMS;

export enum DIRECTION {
  column = 'column',
  'column-reverse' = 'column-reverse',
  row = 'row',
  'row-reverse' = 'row-reverse'
};

export enum GUTTER_WIDTH {
  xxs = 'xxs',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl'
};

export enum JUSTIFY_CONTENT {
  start = 'start',
  end = 'end',
  center = 'center',
  around = 'around',
  between = 'between',
  evenly = 'evenly'
};
