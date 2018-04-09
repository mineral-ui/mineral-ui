/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Card, { CardBlock, CardTitle } from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'variants',
  title: 'Variants',
  backgroundColor: mineralTheme.color_gray_10,
  description: `CardTitle is available in a few variants. Be sure to use the
[appropriate variant](/color#guidelines-variants) for your intent.`,
  scope: { Card, CardBlock, CardTitle, loremIpsum, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle variant="danger">Danger Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>

      <Card>
        <CardTitle variant="success">Success Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>

      <Card>
        <CardTitle variant="warning" subtitle="Card Subtitle">Warning Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    </DemoLayout>`
};
