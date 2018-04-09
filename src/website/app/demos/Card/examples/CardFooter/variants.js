/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Card, { CardBlock, CardFooter } from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'variants',
  title: 'Available Variants',
  backgroundColor: mineralTheme.color_gray_10,
  description: `CardFooter is available in a few variants. Be sure to use the
[appropriate variant](/color#guidelines-variants) for your intent.`,
  scope: { Card, CardBlock, CardFooter, loremIpsum, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardFooter title="Success Footer Title" variant="success">
          <CardBlock>{loremIpsum}</CardBlock>
        </CardFooter>
      </Card>

      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardFooter title="Warning Footer Title" variant="warning">
          <CardBlock>{loremIpsum}</CardBlock>
        </CardFooter>
      </Card>

      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardFooter title="Danger Footer Title" variant="danger">
          <CardBlock>{loremIpsum}</CardBlock>
        </CardFooter>
      </Card>
    </DemoLayout>`
};
