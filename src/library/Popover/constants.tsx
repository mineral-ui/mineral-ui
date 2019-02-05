/* @flow */
import PopperJs from 'popper.js';

export const ARROW_SIZE = '8px';

export const PLACEMENT = PopperJs.placements.sort().reduce((acc, placement) => {
  acc[placement] = placement;
  return acc;
}, {});
