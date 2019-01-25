/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import colorable from 'colorable';
import { getNormalizedValue, pxToEm } from '../../../../library/styles';
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

const a11yColor = (color) => {
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
      padding: `${parseFloat(theme.space_inset_sm) / 2}em ${
        theme.space_inset_sm
      }`
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

const ColorValue = styled('span')(styles.colorValue);
const OverflowContainer = styled('div')(styles.overflowContainer);
const Section = styled('section')(styles.section);
const Table = styled(_Table)(styles.table);
const ExampleCell = styled(TableCell)(styles.exampleCell);
const ValueCell = styled(TableCell)(styles.valueCell);

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
                    <TableHeaderCell width="20rem" scope="col">
                      Example
                    </TableHeaderCell>
                    <TableHeaderCell width="8rem" scope="col">
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
