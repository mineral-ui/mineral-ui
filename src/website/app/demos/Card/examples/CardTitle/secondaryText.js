/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Card, { CardBlock, CardTitle } from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'secondary-text',
  title: 'With Secondary Text',
  backgroundColor: mineralTheme.color_gray_10,
  description: `When you must provide information that doesn't belong to every
Card in a set, supply it as \`secondaryText\` information. The information will
display beside the title. If information is in every card in the set, or if the
\`secondaryText\` information is not brief, consider using the \`subtitle\`
prop. Note that if [\`actions\`](#actions-menu) is provided, it will take
precedence.`,
  scope: { Card, CardBlock, CardTitle, loremIpsum, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle secondaryText="Secondary info">Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>

      <Card>
        <CardTitle secondaryText="Longer secondary info will be truncated">Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    </DemoLayout>`
};
