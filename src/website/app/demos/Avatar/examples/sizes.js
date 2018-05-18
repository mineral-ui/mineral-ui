/* @flow */
import IconCloud from 'mineral-ui-icons/IconCloud';
import Avatar from '../../../../../library/Avatar';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'sizes',
  title: 'Sizes',
  description: `Avatar is available in the following sizes.`,
  scope: { Avatar, DemoLayout, IconCloud },
  source: `
    <DemoLayout>
      <Avatar size="small">
        <img src="/images/avatar.svg" alt="Sam" />
      </Avatar>
      <Avatar size="small">Sam</Avatar>
      <Avatar size="small">
        <IconCloud title="cloud" />
      </Avatar>
      <br />

      <Avatar size="medium">
        <img src="/images/avatar.svg" alt="Melissa" />
      </Avatar>
      <Avatar size="medium">Melissa</Avatar>
      <Avatar size="medium">
        <IconCloud title="cloud" />
      </Avatar>
      <br />

      <Avatar>
        <img src="/images/avatar.svg" alt="Larry" />
      </Avatar>
      <Avatar>Larry</Avatar>
      <Avatar>
        <IconCloud title="cloud" />
      </Avatar>
      <br />

      <Avatar size="jumbo">
        <img src="/images/avatar.svg" alt="Jennifer" />
      </Avatar>
      <Avatar size="jumbo">Jennifer</Avatar>
      <Avatar size="jumbo">
        <IconCloud title="cloud" />
      </Avatar>

    </DemoLayout>`
};
