/* @flow */
import Avatar from '../../../../../library/Avatar';
import IconCloud from 'mineral-ui-icons/IconCloud';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Avatar can display an image, a text character, or an
[Icon](/components/icon). For accessibility, please provide an \`alt\`/\`title\`
attribute for standalone Avatars.`,
  scope: { Avatar, DemoLayout, IconCloud },
  source: `
    <DemoLayout>
      <Avatar>
        <img src="/images/avatar.svg" alt="Allison" />
      </Avatar>
      <Avatar>Allison</Avatar>
      <Avatar>
        <IconCloud title="cloud" />
      </Avatar>
    </DemoLayout>`
};
