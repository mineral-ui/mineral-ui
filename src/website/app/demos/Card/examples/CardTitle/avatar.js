/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Avatar from '../../../../../../library/Avatar';
import Card, { CardBlock, CardTitle } from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'avatar',
  title: 'With an Avatar',
  backgroundColor: mineralTheme.color_gray_10,
  description: `To help communicate ownership or categorization of a Card, add
an \`avatar\` to CardTitle. The [Avatar](/components/avatar) will automatically size
itself correctly whether a \`subtitle\` is also provided or not.`,
  scope: { Avatar, Card, CardBlock, CardTitle, loremIpsum, DemoLayout },
  source: `
    () => {
      const avatar = (
        <Avatar>
          <img src="/images/avatar.svg" alt="Alt text" />
        </Avatar>
      );

      return (
        <DemoLayout>
          <Card>
            <CardTitle avatar={avatar}>Card Title</CardTitle>
            <CardBlock>{loremIpsum}</CardBlock>
          </Card>

          <Card>
            <CardTitle
              avatar={avatar}
              subtitle="Card Subtitle">
              Card Title
            </CardTitle>
            <CardBlock>{loremIpsum}</CardBlock>
          </Card>
        </DemoLayout>
      );
    }`
};
