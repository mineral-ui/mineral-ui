/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Button from '../../../../../../library/Button';
import Card, { CardBlock, CardActions } from '../../../../../../library/Card';
import IconCloud from 'mineral-ui-icons/IconCloud';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'basic',
  title: 'Basic Usage',
  backgroundColor: mineralTheme.color_gray_10,
  description: `Use CardActions to add actions, [Buttons](/components/button) or
[Links](/components/link), to your [Card](/components/card). Buttons will automatically size
themselves appropriately, and can be any variety (primary, minimal, icon-only,
etc.)`,
  scope: {
    Button,
    Card,
    CardActions,
    CardBlock,
    loremIpsum,
    DemoLayout,
    IconCloud
  },
  source: `
    <DemoLayout>
      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardActions>
          <Button>Button 1</Button>
          <Button iconStart={<IconCloud />}>Button 2</Button>
        </CardActions>
      </Card>

      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardActions>
          <Button minimal >Button 1</Button>
          <Button iconStart={<IconCloud />} primary>Button 2</Button>
        </CardActions>
      </Card>

      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardActions>
          <Button iconStart={<IconCloud title="Button label 1" />} minimal />
          <Button iconStart={<IconCloud title="Button label 2" />} minimal />
        </CardActions>
      </Card>
    </DemoLayout>`
};
