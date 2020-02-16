/* @flow */
import styled from '@emotion/styled';
import Card, {
  CardBlock as _CardBlock,
  CardTitle
} from '../../../../../../library/Card';
import { mineralTheme } from '../../../../../../library/themes';
import DemoLayout from '../../common/DemoLayout';
import loremIpsum from '../../common/loremIpsum';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const CardBlock: StyledComponent<{ [key: string]: any }> = styled(_CardBlock)(
  ({ theme }) => ({
    position: 'relative',

    '&::before': {
      borderColor: theme.color_theme_10,
      borderStyle: 'solid',
      borderWidth: `${theme.space_inset_md} ${theme.space_inset_md} ${theme.space_inset_lg}`,
      bottom: `-${theme.space_inset_lg}`,
      content: '""',
      left: 0,
      position: 'absolute',
      right: 0,
      top: `-${theme.space_inset_md}`
    }
  })
);

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
