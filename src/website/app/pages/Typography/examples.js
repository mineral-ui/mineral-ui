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
import { createStyledComponent } from '../../../../utils';
import Heading from '../../Heading';
import Paragraph from '../../Paragraph';

type TypeExample = {
  heading: React$Node,
  description: React$Node,
  examples: Array<Object>
};

type TypeExamples = Array<TypeExample>;

const styles = {
  description: ({ theme }) => ({
    margin: `0 0 ${theme.space_stack_xl}`
  }),
  list: ({ theme }) => ({
    listStyle: 'square',
    paddingLeft: theme.space_inline_lg
  })
};

const List = createStyledComponent('ul', styles.list);
const Description = createStyledComponent(Paragraph, styles.description);

const examples: TypeExamples = [
  {
    heading: (
      <Heading level={2} id="long-form-text">
        Long-form Text
      </Heading>
    ),
    description: (
      <Description variant="prose">
        Default text and caption styles are intended for sections of content
        that provide description and assistance. {' '}
        <strong>Paragraph text</strong> is primarily used for content sections.{' '}
        <strong>Caption Text</strong> is used to highlight or offset content,
        such as inline help or when captioning dashboard content.
      </Description>
    ),
    examples: [
      {
        content: <Paragraph type="ui">Paragraph UI</Paragraph>,
        value: '<p>, <li>',
        color: 'color_gray_100',
        font: 'Bold (14/0.875)'
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
        font: 'Bold (14)'
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
    heading: (
      <Heading level={2} id="display-text">
        Display Text
      </Heading>
    ),
    description: (
      <Description variant="prose">
        <strong>Display text</strong> makes a bold statement, and is useful to
        draw attention to different sections in an application view. Display
        text is for short titles and section divisions. They should be used
        sparingly – they aren’t for long-form content.{' '}
      </Description>
    ),
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
        font: 'SemiBold (28/1.75)'
      },
      {
        content: <Heading level={3}>Medium Section Header</Heading>,
        value: '<h3>',
        color: 'color_gray_80',
        font: 'SemiBold (22/1.375)'
      },
      {
        content: <Heading level={4}>Small Section Header</Heading>,
        value: '<h4>',
        color: 'color_gray_80',
        font: 'Bold (14/0.875)'
      }
    ]
  }
];

export default examples;
