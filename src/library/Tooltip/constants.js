/* @flow */
import PopperJs from 'popper.js';

export const DELAY_OPEN = 250; // ms

// $FlowFixMe
export const PLACEMENT = PopperJs.placements.sort().reduce((acc, placement) => {
  acc[placement] = placement;
  return acc;
}, {});
