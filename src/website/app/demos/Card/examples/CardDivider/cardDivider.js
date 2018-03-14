/* @flow */
import { mineralTheme } from '../../../../../../themes';
import Card, {
  CardBlock,
  CardDivider,
  CardTitle
} from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'basic',
  title: 'Basic Usage',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `Use CardDivider to separate sections of your [Card](../card).`,
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
