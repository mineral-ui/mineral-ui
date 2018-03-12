/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../styles';
import Heading from '../../Heading';
import Paragraph from '../../Paragraph';

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
        content: <Paragraph>Paragraph UI</Paragraph>,
        value: '<p>, <li>',
        color: 'color_gray_100',
        font: 'Regular (14/0.875)'
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
        content: <Paragraph variant="prose">Paragraph (Long Form)</Paragraph>,
        value: '<p.long>',
        color: 'color_gray_100',
        font: 'Regular (16/1)'
      },
      {
        content: <Paragraph variant="mouse">Paragraph (Mousetype)</Paragraph>,
        value: '<p.mouse>',
        color: 'color_gray_100',
        font: 'Regular (11/0.6875)'
      },
      {
        content: <Heading level={5}>Caption - Strong</Heading>,
        value: '<h5>',
        color: 'color_gray_100',
        font: 'Bold (14/0.875)'
      },
      {
        content: <Heading level={6}>Caption - Light</Heading>,
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
        content: <Heading level={1}>Page Title</Heading>,
        value: '<h1>',
        color: 'color_gray_100',
        font: 'ExtraBold (34/2.125)'
      },
      {
        content: <Heading level={2}>Large Section Header</Heading>,
        value: '<h2>',
        color: 'color_gray_80',
        font: 'Bold (28/1.75)'
      },
      {
        content: <Heading level={3}>Medium Section Header</Heading>,
        value: '<h3>',
        color: 'color_gray_80',
        font: 'Bold (22/1.375)'
      },
      {
        content: <Heading level={4}>Small Section Header</Heading>,
        value: '<h4>',
        color: 'color_gray_80',
        font: 'Bold (18/1.125)'
      }
    ]
  }
];

export default examples;
