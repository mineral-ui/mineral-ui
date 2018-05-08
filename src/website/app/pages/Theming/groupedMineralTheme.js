/* @flow */
import { black, brand, gray, white } from 'mineral-ui-tokens';
import { createColorRamp, themeFromTokens } from '../../../../library/themes';
import { nonTokenVariables } from '../../../../library/themes/createTheme';
import categorizedJsTokens from '../../generated/categorizedJsTokens';

const { boxShadow_focusInner, direction, fontSize_base } = nonTokenVariables();

const grayRamp = createColorRamp(gray, 'color_gray_');
const themeRamp = createColorRamp(brand, 'color_theme_');

export default Object.keys(categorizedJsTokens)
  .filter((category) => category !== 'palette')
  .map((category) => {
    let tokens = categorizedJsTokens[category];

    if (category === 'depth') {
      const group = { ...tokens, boxShadow_focusInner };
      tokens = Object.keys(group)
        .sort()
        .reduce((acc, key) => {
          acc[key] = group[key];
          return acc;
        }, {});
    } else if (category === 'typography') {
      tokens = { ...tokens, fontSize_base };
    }

    return [category, themeFromTokens(tokens)];
  })
  .concat([
    ['Other', { direction }],
    [
      'Colors',
      {
        ...themeRamp,
        color_white: white,
        ...grayRamp,
        color_black: black
      }
    ]
  ]);
