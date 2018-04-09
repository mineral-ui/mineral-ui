/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Card, {
  CardBlock,
  CardImage,
  CardTitle
} from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'with-image',
  title: 'Displaying an Image in a Card',
  backgroundColor: mineralTheme.color_gray_10,
  description: 'CardImages should provide an `alt` attribute.',
  scope: { Card, CardBlock, CardImage, CardTitle, loremIpsum, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardImage src="/images/500x281.png" alt="gradient image" />
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    </DemoLayout>`
};
