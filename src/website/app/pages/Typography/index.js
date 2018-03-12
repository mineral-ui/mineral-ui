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
import colorable from 'colorable';
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../../../styles';
import Markdown from '../../Markdown';
import {
  Table as _Table,
  TableCell,
  TableHeaderCell,
  TableRow
} from '../../Table';
import FontDemo from './FontDemo';
import content from './typography.md';
import examples from './examples';

type Props = {};

const a11yColor = color => {
  const a11y = colorable({
    main: color,
    white: '#fff',
    black: '#000',
    compact: true
  });

  const whiteContrast = a11y[0].combinations[0].contrast;
  const blackContrast = a11y[0].combinations[1].contrast;

  return whiteContrast > blackContrast ? 'white' : 'black';
};

const styles = {
  colorValue: ({ theme, color }) => {
    return {
      backgroundColor: theme[color],
      borderRadius: theme.borderRadius_1,
      color: a11yColor(theme[color]),
      padding: `${parseFloat(theme.space_inset_sm) /
        2}em ${theme.space_inset_sm}`
    };
  },
  overflowContainer: {
    '@media(max-width: 60em)': {
      overflowX: 'auto'
    }
  },
  section: ({ theme }) => ({
    marginTop: pxToEm(65), // to baseline

    [theme.bp_moreSpacious]: {
      marginTop: pxToEm(82) // to baseline
    }
  }),
  table: {
    fontFamily: 'Open Sans'
  },
  exampleCell: ({ theme }) => ({
    fontSize: getNormalizedValue('1em', theme.fontSize_ui)
  }),
  valueCell: ({ theme }) => ({
    fontFamily: theme.fontFamily_monospace,
    verticalAlign: 'middle'
  })
};

const ColorValue = createStyledComponent('span', styles.colorValue);
const OverflowContainer = createStyledComponent(
  'div',
  styles.overflowContainer
);
const Section = createStyledComponent('section', styles.section);
const Table = createStyledComponent(_Table, styles.table);
const ExampleCell = createStyledComponent(TableCell, styles.exampleCell);
const ValueCell = createStyledComponent(TableCell, styles.valueCell);

export default function Typography(props: Props) {
  return (
    <div {...props}>
      <Markdown scope={{ FontDemo }}>{content}</Markdown>
      {examples.map((section, index) => {
        return (
          <Section key={`section_${index}`}>
            <Markdown>{section.description}</Markdown>
            <OverflowContainer>
              <Table>
                <thead>
                  <tr>
                    <TableHeaderCell width={20} scope="col">
                      Example
                    </TableHeaderCell>
                    <TableHeaderCell width={8} scope="col">
                      Value
                    </TableHeaderCell>
                    <TableHeaderCell scope="col">Color Value</TableHeaderCell>
                    <TableHeaderCell scope="col">Font (px/rem)</TableHeaderCell>
                  </tr>
                </thead>
                <tbody>
                  {section.examples.map(({ content, value, color, font }) => (
                    <TableRow key={value}>
                      <ExampleCell>{content}</ExampleCell>
                      <ValueCell>{value}</ValueCell>
                      <ValueCell>
                        <ColorValue color={color}>
                          {`theme.${color}`}
                        </ColorValue>
                      </ValueCell>
                      <ValueCell>{font}</ValueCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </OverflowContainer>
          </Section>
        );
      })}
    </div>
  );
}
