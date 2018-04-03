/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../library/styles';
import Text from '../../../../library/Text';

type TypeExample = {
  description: string,
  examples: Array<Object>
};

type TypeExamples = Array<TypeExample>;

const styles = {
  list: ({ theme }) => ({
    fontSize: theme.fontSize_ui,
    listStyle: 'square',
    paddingLeft: theme.space_inline_lg
  })
};

const List = createStyledComponent('ul', styles.list);
const examples: TypeExamples = [
  {
    description: `### Long-form Text

Default text and caption styles are intended for sections of content that
provide description and assistance. **Paragraph text** is primarily used for
content sections. **Caption Text** is used to highlight or offset content, such
as inline help or when captioning dashboard content.`,
    examples: [
      {
        content: <Text>Paragraph</Text>,
        value: '<p>, <li>',
        color: 'color_gray_100',
        font: 'Regular (14/0.875)'
      },
      {
        content: <Text appearance="prose">Paragraph (Prose)</Text>,
        value: '<p.prose>',
        color: 'color_gray_100',
        font: 'Regular (16/1)'
      },
      {
        content: <Text appearance="mouse">Paragraph (Mouse)</Text>,
        value: '<p.mouse>',
        color: 'color_gray_100',
        font: 'Regular (11/0.6875)'
      },
      {
        content: (
          <List>
            <li>Alpha</li>
            <li>Bravo</li>
            <li>Charlie</li>
          </List>
        ),
        // the design notes have <ol> here as well,
        // but list-style will override any numbers shown on <ol> list items
        value: '<ul>, <ol>',
        color: 'color_gray_100',
        font: 'Regular (14/0.875)'
      },
      {
        content: <Text element="h5">Caption - Strong</Text>,
        value: '<h5>',
        color: 'color_gray_100',
        font: 'Bold (14/0.875)'
      },
      {
        content: <Text element="h6">Caption - Light</Text>,
        value: '<h6>',
        color: 'color_gray_80',
        font: 'Regular (14/0.875)'
      }
    ]
  },
  {
    description: `### Display Text

Use **Display text** sparingly to make a bold statement, or draw attention to
different sections in an application view. Display text is for short titles and
section divisions—it’s not for long-form content.`,
    examples: [
      {
        content: <Text element="h1">Page Title</Text>,
        value: '<h1>',
        color: 'color_gray_100',
        font: 'ExtraBold (34/2.125)'
      },
      {
        content: <Text element="h2">Large Section Header</Text>,
        value: '<h2>',
        color: 'color_gray_80',
        font: 'Bold (28/1.75)'
      },
      {
        content: <Text element="h3">Medium Section Header</Text>,
        value: '<h3>',
        color: 'color_gray_80',
        font: 'Bold (22/1.375)'
      },
      {
        content: <Text element="h4">Small Section Header</Text>,
        value: '<h4>',
        color: 'color_gray_80',
        font: 'Bold (18/1.125)'
      }
    ]
  }
];

export default examples;
