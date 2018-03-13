/* @flow */
import { mineralTheme } from '../../../../../../themes';
import Card, { CardBlock, CardStatus, CardTitle } from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'basic',
  title: 'Basic Usage',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `CardStatus conveys the current status of [Card](../card). It is
available in a few variants.`,
  scope: { Card, CardBlock, CardStatus, CardTitle, loremIpsum, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardStatus variant="danger">Unavailable</CardStatus>
      </Card>
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardStatus variant="success">Available</CardStatus>
      </Card>
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardStatus variant="warning">Warning</CardStatus>
      </Card>
    </DemoLayout>`
};
