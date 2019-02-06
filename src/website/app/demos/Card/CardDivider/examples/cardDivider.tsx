/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Card, {
  CardBlock,
  CardDivider,
  CardTitle
} from '../../../../../../library/Card';
import DemoLayout from '../../common/DemoLayout';
import loremIpsum from '../../common/loremIpsum';

export default {
  id: 'basic',
  title: 'Basic Usage',
  backgroundColor: mineralTheme.color_gray_10,
  description: `Use CardDivider to separate sections of your [Card](/components/card).`,
  scope: { Card, CardBlock, CardDivider, CardTitle, loremIpsum, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardDivider />
        <CardBlock>{loremIpsum}</CardBlock>
        <CardDivider />
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    </DemoLayout>`
};
