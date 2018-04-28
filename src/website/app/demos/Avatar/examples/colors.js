/* @flow */
import { palette } from 'mineral-ui-tokens';
import Avatar from '../../../../../library/Avatar';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'colors',
  title: 'Colors',
  description: `By default, Avatar will use your theme's base color. You may
also pass in a custom \`background\` and/or \`color\`, but be sure to use a
color combination with an
[adequate contrast ratio](/color#guidelines-accessibility).`,
  scope: { Avatar, DemoLayout, palette },
  source: `
    <DemoLayout>
      <Avatar                               >Theme  </Avatar>
      <Avatar background={palette.red_60}    >Red    </Avatar>
      <Avatar background={palette.magenta_60}>Magenta</Avatar>
      <Avatar background={palette.purple_60} >Purple </Avatar>
      <Avatar background={palette.indigo_60} >Indigo </Avatar>
      <Avatar background={palette.blue_60}   >Blue   </Avatar>
      <Avatar background={palette.sky_60}    >Sky    </Avatar>
      <Avatar background={palette.teal_60}   >Teal   </Avatar>
      <Avatar background={palette.green_60}  >Green  </Avatar>
      <Avatar background={palette.bronze_60} >Bronze </Avatar>
      {/* Note that a gray background requires black, not white, text for a11y contrast */}
      <Avatar background={palette.gray_60} color={palette.black}>Gray</Avatar>
      <Avatar background={palette.slate_60}  >Slate  </Avatar>
      <Avatar background={palette.dusk_60}   >Dusk   </Avatar>
      <Avatar background="rgba(139,231,172,0.8)" color="hsl(322,71%,27%)">Custom</Avatar>
    </DemoLayout>`
};
