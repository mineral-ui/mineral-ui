/* @flow */
import colors from '../../../../../library/colors';
import Avatar from '../../../../../library/Avatar';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'colors',
  title: 'Colors',
  description: `By default, Avatar will use your theme's base color. You may
also pass in a custom \`background\` and/or \`color\`, but be sure to use a
color combination with an
[adequate contrast ratio](/color#guidelines-accessibility).`,
  scope: { Avatar, colors, DemoLayout },
  source: `
    <DemoLayout>
      <Avatar                               >Theme  </Avatar>
      <Avatar background={colors.red_60}    >Red    </Avatar>
      <Avatar background={colors.magenta_60}>Magenta</Avatar>
      <Avatar background={colors.purple_60} >Purple </Avatar>
      <Avatar background={colors.indigo_60} >Indigo </Avatar>
      <Avatar background={colors.blue_60}   >Blue   </Avatar>
      <Avatar background={colors.sky_60}    >Sky    </Avatar>
      <Avatar background={colors.teal_60}   >Teal   </Avatar>
      <Avatar background={colors.green_60}  >Green  </Avatar>
      <Avatar background={colors.bronze_60} >Bronze </Avatar>
      {/* Note that a gray background requires black, not white, text for a11y contrast */}
      <Avatar background={colors.gray_60} color={colors.black}>Gray</Avatar>
      <Avatar background={colors.slate_60}  >Slate  </Avatar>
      <Avatar background={colors.dusk_60}   >Dusk   </Avatar>
      <Avatar background="rgba(139,231,172,0.8)" color="hsl(322,71%,27%)">Custom</Avatar>
    </DemoLayout>`
};
