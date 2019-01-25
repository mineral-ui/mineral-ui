/* @flow */
import { palette } from 'mineral-ui-tokens';
import styled from '@emotion/styled';
import { mineralTheme as theme } from '../../../../../../library/themes';
import Text from '../../../../../../library/Text';

const DemoPanel = styled('div')(({ backgroundColor, theme }) => ({
  backgroundColor,
  padding: theme.space_inset_sm
}));

export default {
  id: 'color',
  title: 'Color',
  description: `Text can be any color, but be sure to use a
color/background-color combination with an
[adequate contrast ratio](/color#guidelines-accessibility).`,
  scope: { DemoPanel, palette, Text, theme },
  source: `
    <div>
      <Text color={theme.color_success}>Success Text</Text>
      <Text color={palette.magenta_60}>Magenta Text</Text>
      <DemoPanel backgroundColor="#421429">
        <Text color="#bfe7d4" noMargins>Custom Text</Text>
      </DemoPanel>
    </div>`
};
