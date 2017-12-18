/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import Avatar from '../../../../../Avatar';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'colors',
  title: 'Colors',
  description: `Avatar is available in any of the
[palette's base colors](/color/#guidelines-ramps). By default, it will use your
theme's base color. You may also pass in a custom \`background\` and \`color\`,
but be sure to use a color combination with an
[adequate contrast ratio](/color/#guidelines-accessibility-(a11y\)).`, // eslint-disable-line no-useless-escape
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
