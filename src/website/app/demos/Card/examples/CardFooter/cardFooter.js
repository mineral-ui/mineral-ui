/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Button from '../../../../../../library/Button';
import Card, {
  CardActions,
  CardBlock,
  CardFooter
} from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'basic',
  title: 'Basic Usage',
  backgroundColor: mineralTheme.color_gray_10,
  description: `CardFooter is used to add an extension to a Card. It can
contain any children, but is best used with [CardActions](/components/card-actions) and
[CardBlock](/components/card-block).`,
  scope: {
    Button,
    Card,
    CardActions,
    CardBlock,
    CardFooter,
    loremIpsum,
    DemoLayout
  },
  source: `
    <DemoLayout>
      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardFooter title="Footer Title Only" />
      </Card>

      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardFooter>
          <CardActions>
            <Button minimal>Button 1</Button>
            <Button primary>Button 2</Button>
          </CardActions>
        </CardFooter>
      </Card>

      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardFooter title="Footer Title">
          <CardBlock>{loremIpsum}</CardBlock>
          <CardActions>
            <Button minimal>Button 1</Button>
            <Button primary>Button 2</Button>
          </CardActions>
        </CardFooter>
      </Card>
    </DemoLayout>`
};
