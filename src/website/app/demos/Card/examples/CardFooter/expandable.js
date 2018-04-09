/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Card, { CardBlock, CardFooter } from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'expandable',
  title: 'Expandable Footer',
  backgroundColor: mineralTheme.color_gray_10,
  description: `Set \`expandable\` to true to allow the user to expand/collapse
CardFooter. Note that a \`title\` must be provided to expandable CardFooters.`,
  scope: { Card, CardBlock, CardFooter, loremIpsum, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardFooter title="Collapsed by Default" expandable>
          <CardBlock>{loremIpsum}</CardBlock>
        </CardFooter>
      </Card>

      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardFooter title="Expanded by Default" expandable defaultIsOpen>
          <CardBlock>{loremIpsum}</CardBlock>
        </CardFooter>
      </Card>
    </DemoLayout>`
};
