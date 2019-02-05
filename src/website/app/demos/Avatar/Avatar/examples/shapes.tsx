/* @flow */
import Avatar from '../../../../../../library/Avatar';
import DemoLayout from '../../common/DemoLayout';

export default {
  id: 'shapes',
  title: 'Shapes',
  description: `Avatar is available in the following shapes.`,
  scope: { Avatar, DemoLayout },
  source: `
    <DemoLayout>
      <Avatar>Circle</Avatar>
      <Avatar shape="rounded">Rounded</Avatar>
      <Avatar shape="square">Square</Avatar>
    </DemoLayout>`
};
