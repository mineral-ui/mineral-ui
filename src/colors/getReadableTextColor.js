import keyedColors from './keyedColors';
import common from './common';

export default (key: string, level: number) => {
  if (keyedColors[key]) {
    return keyedColors[key].a11y_text_light.indexOf(level) != -1
      ? common.white
      : common.black;
  }
  return undefined;
};
