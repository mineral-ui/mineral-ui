/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../../../styles';
import { mineralTheme } from '../../../../../../themes';
import Button from '../../../../../../Button';
import Card, { CardBlock, CardTitle } from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';

const CustomContent = createStyledComponent('div', ({ theme }) => ({
  backgroundColor: theme.color_gray_20,
  padding: `${theme.space_stack_md} 0`
}));

const customContent = (
  <CustomContent>
    <Button fullWidth>Button</Button>
  </CustomContent>
);

export default {
  id: 'children',
  title: 'Arbitrary Children',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `A CardBlock will render any children.`,
  scope: { Button, Card, CardBlock, CardTitle, customContent, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardBlock>{customContent}</CardBlock>
      </Card>
    </DemoLayout>`
};
