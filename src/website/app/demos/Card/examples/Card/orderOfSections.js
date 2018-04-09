/* @flow */
import { createStyledComponent } from '../../../../../../library/styles';
import { mineralTheme } from '../../../../../../library/themes';
import Button from '../../../../../../library/Button';
import Card, {
  CardActions,
  CardBlock,
  CardFooter,
  CardImage,
  CardTitle
} from '../../../../../../library/Card';
import _DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

const DemoLayout = createStyledComponent(_DemoLayout, {
  '& img': {
    width: '100%'
  }
});

export default {
  id: 'order',
  title: 'Order of Sections',
  backgroundColor: mineralTheme.color_gray_10,
  description: `There is no "one true way" to lay out children in Card; it is
flexible enough to accept different component arrangements. The one exception is
[CardFooter](/components/card-footer), which must be last in Card.`,
  scope: {
    Button,
    Card,
    CardActions,
    CardBlock,
    CardFooter,
    CardImage,
    CardTitle,
    loremIpsum,
    DemoLayout
  },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardImage src="/images/500x500.png" alt="gradient image" />
        <CardBlock>{loremIpsum}</CardBlock>
        <CardActions>
          <Button minimal>Button 1</Button>
          <Button primary>Button 2</Button>
        </CardActions>
        <CardFooter title="Card Footer" />
      </Card>

      <Card>
        <CardImage src="/images/500x500.png" alt="gradient image" />
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardActions>
          <Button minimal>Button 1</Button>
          <Button primary>Button 2</Button>
        </CardActions>
        <CardFooter title="Card Footer" />
      </Card>

      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardImage src="/images/500x500.png" alt="gradient image" />
        <CardActions>
          <Button minimal>Button 1</Button>
          <Button primary>Button 2</Button>
        </CardActions>
        <CardFooter title="Card Footer" />
      </Card>
    </DemoLayout>`
};
