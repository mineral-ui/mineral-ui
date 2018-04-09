/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Card, { CardBlock, CardTitle } from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'clickable',
  title: 'Clickable',
  backgroundColor: mineralTheme.color_gray_10,
  description: `If an \`onClick\` callback is provided, the entire Card becomes clickable and keyboard actionable.
Use this feature when only one action can be taken per Card.
This simplifies the interface by not requiring an extra [Button](/components/button).`,
  scope: { Card, CardBlock, CardTitle, loremIpsum, DemoLayout },
  source: `
    <DemoLayout>
      <Card onClick={event => console.log(event)}>
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    </DemoLayout>`
};
