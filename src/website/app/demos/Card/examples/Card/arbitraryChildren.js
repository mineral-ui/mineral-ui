/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../../../library/styles';
import { mineralTheme } from '../../../../../../library/themes';
import Button from '../../../../../../library/Button';
import Card, { CardTitle } from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';

const CustomContent = createStyledComponent('div', ({ theme }) => ({
  backgroundColor: theme.color_gray_20,
  margin: `${theme.space_stack_md} 0`,
  padding: theme.space_inset_md,

  '&:last-child': {
    borderRadius: `0 0 ${theme.borderRadius_1} ${theme.borderRadius_1}`,
    marginBottom: 0
  }
}));

const customContent = (
  <CustomContent>
    <Button fullWidth>Button</Button>
  </CustomContent>
);

export default {
  id: 'children',
  title: 'Arbitrary Children',
  backgroundColor: mineralTheme.color_gray_10,
  description: `A Card will render any children.

For best results, please ensure content matches the top/bottom margin and left/right padding of the other \`<Card*/>\` components, or use [CardBlock](/components/card-block).`,
  scope: { Button, Card, CardTitle, customContent, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle>Card Title</CardTitle>
        {customContent}
      </Card>
    </DemoLayout>`
};
