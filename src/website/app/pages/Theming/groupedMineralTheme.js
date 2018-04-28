/* @flow */
import * as groupedTokens from 'mineral-ui-tokens/groupedTokens';
import { black, brand, gray, white } from 'mineral-ui-tokens';
import { createColorRamp, themeFromTokens } from '../../../../library/themes';
import { nonTokenVariables } from '../../../../library/themes/createTheme';

import type { Ramp, Theme } from '../../../../library/themes/themeFromTokens';

type Group = [string, Theme | ((themeRamp?: Ramp) => Theme)];
type GroupedTheme = Array<Group>;

const grayRamp = createColorRamp(gray, 'color_gray_');
const themeRamp = undefined;

const getThemeRamp = (themeRamp?: Ramp) => {
  return themeRamp || createColorRamp(brand, 'color_theme_');
};

const groupedMineralTheme: GroupedTheme = [
  [
    'generics',
    (themeRamp) => {
      const group = {
        ...themeFromTokens({ themeRamp, tokens: groupedTokens.generic }),
        ...nonTokenVariables
      };
      return Object.keys(group)
        .sort()
        .reduce((acc, key) => {
          acc[key] = group[key];
          return acc;
        }, {});
    }
  ],
  ['Headings', themeFromTokens({ themeRamp, tokens: groupedTokens.heading })],
  [
    'Icons',
    (themeRamp) => themeFromTokens({ themeRamp, tokens: groupedTokens.icon })
  ],
  ['Inputs', themeFromTokens({ themeRamp, tokens: groupedTokens.input })],
  ['Panels', themeFromTokens({ themeRamp, tokens: groupedTokens.panel })],
  ['Wells', themeFromTokens({ themeRamp, tokens: groupedTokens.well })],
  [
    'Colors',
    (themeRamp) => ({
      ...getThemeRamp(themeRamp),
      color_white: white,
      ...grayRamp,
      color_black: black
    })
  ]
];

export default groupedMineralTheme;
