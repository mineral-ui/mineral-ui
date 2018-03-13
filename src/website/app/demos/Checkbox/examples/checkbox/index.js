/* @flow */
import controlled from './controlled';
import disabled from './disabled';
import importSyntax from './importSyntax';
import inputRef from './inputRef';
import invalid from './invalid';
import labelPositionAndJustification from './labelPositionAndJustification';
import labelWrapping from './labelWrapping';
import nextToOtherInputs from './nextToOtherInputs';
import required from './required';
import rtl from './rtl';
import sizes from './sizes';
import states from './states';
import triState from './triState';
import uncontrolled from './uncontrolled';

export default [
  importSyntax,
  uncontrolled,
  controlled,
  triState,
  disabled,
  required,
  invalid,
  sizes,
  labelPositionAndJustification,
  labelWrapping,
  inputRef,
  rtl,
  nextToOtherInputs,
  states
];
