/* @flow */
import { createStyledComponent } from '../../../../../../library/styles';
import { mineralTheme } from '../../../../../../library/themes';
import Card, {
  CardBlock as _CardBlock,
  CardTitle
} from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

const CardBlock = createStyledComponent(_CardBlock, ({ theme }) => ({
  position: 'relative',

  '&::before': {
    borderColor: theme.color_theme_10,
    borderStyle: 'solid',
    borderWidth: `${theme.space_inset_md} ${theme.space_inset_md} ${
      theme.space_inset_lg
    }`,
    bottom: `-${theme.space_inset_lg}`,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: `-${theme.space_inset_md}`
  }
}));

export default {
  id: 'consistent-spacing',
  title: 'Provide Consistent Spacing',
  backgroundColor: mineralTheme.color_gray_10,
  description: `CardBlock provides uniform spacing (highlighted here in light
blue), relative to the other Card components, around its content.`,
  scope: { Card, CardBlock, CardTitle, loremIpsum, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{loremIpsum}</CardBlock>
      </Card>
    </DemoLayout>`
};
