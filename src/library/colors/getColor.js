/* @flow */
import keyedColors from './keyedColors';

export default (key: string, level: number) =>
  keyedColors[key] ? keyedColors[key][`${key}_${level}`] : undefined;
