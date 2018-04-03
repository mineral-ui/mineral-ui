/* @flow */
import Avatar from '../../../../../library/Avatar';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'colors',
  title: 'Colors',
  description: `Avatar is available in any of the
[palette's base colors](/color#guidelines-ramps). By default, it will use your
theme's base color. You may also pass in a custom \`background\` and \`color\`,
but be sure to use a color combination with an
[adequate contrast ratio](/color#guidelines-accessibility).`,
  scope: { Avatar, DemoLayout },
  source: `
    <DemoLayout>
      <Avatar                     >Theme  </Avatar>
      <Avatar background="red"    >Red    </Avatar>
      <Avatar background="magenta">Magenta</Avatar>
      <Avatar background="purple" >Purple </Avatar>
      <Avatar background="indigo" >Indigo </Avatar>
      <Avatar background="blue"   >Blue   </Avatar>
      <Avatar background="sky"    >Sky    </Avatar>
      <Avatar background="teal"   >Teal   </Avatar>
      <Avatar background="green"  >Green  </Avatar>
      <Avatar background="lime"   >Lime   </Avatar>
      <Avatar background="yellow" >Yellow </Avatar>
      <Avatar background="orange" >Orange </Avatar>
      <Avatar background="gray"   >Gray   </Avatar>
      <Avatar background="slate"  >Slate  </Avatar>
      <Avatar background="dusk"   >Dusk   </Avatar>
      <Avatar background="rgba(139,231,172,0.8)" color="hsl(322,71%,27%)">Custom</Avatar>
    </DemoLayout>`
};
