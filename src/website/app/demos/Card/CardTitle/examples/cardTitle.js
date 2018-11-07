/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Card, { CardBlock, CardTitle } from '../../../../../../library/Card';
import DemoLayout from '../../common/DemoLayout';
import loremIpsum from '../../common/loremIpsum';

export default {
  id: 'titles',
  title: 'Displaying Titles',
  backgroundColor: mineralTheme.color_gray_10,
  description: 'In addition to a title, a Card can display a subtitle.',
  scope: { Card, CardBlock, CardTitle, loremIpsum, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle subtitle="Card Subtitle">Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    </DemoLayout>`
};
