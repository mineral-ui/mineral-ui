/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Button from '../../../../../../library/Button';
import Card, {
  CardBlock,
  CardImage,
  CardTitle
} from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'basic',
  title: 'Basic Usage',
  backgroundColor: mineralTheme.color_gray_10,
  description: `Card content should be neither too simple nor too complex. Cards
are used as a gateway to more detailed content, not merely as a widget container.
Cards can contain any children, but are best used with
[CardActions](/components/card-actions), [CardBlock](/components/card-block),
[CardDivider](/components/card-divider), [CardFooter](/components/card-footer),
[CardImage](/components/card-image), and [CardTitle](/components/card-title).`,
  scope: {
    Button,
    Card,
    CardBlock,
    CardImage,
    CardTitle,
    loremIpsum,
    DemoLayout
  },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardImage src="/images/500x500.png" alt="gradient placeholder" />
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    </DemoLayout>`
};
