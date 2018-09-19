/* @flow */
import alignment from './alignment';
import basic from './basic';
import controlled from './controlled';
import importSyntax from './importSyntax';
import maxTabWidth from './maxTabWidth';
import overflow from './overflow';
import position from './position';
import rtl from './rtl';

export default [
  importSyntax,
  basic,
  position,
  alignment,
  maxTabWidth,
  overflow,
  controlled,
  rtl
];
