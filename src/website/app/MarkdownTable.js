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
import { Table, TableCell, TableHeaderCell, TableRow } from './Table';
import {
  isAvailable,
  isExperimental,
  isInDevelopment,
  isNew,
  isPlanned
} from './tableCellTransforms';

type TableTreeItem = {
  props: { children: React$Element<*>[] }
};

type Props = {
  children: [Array<TableTreeItem>, Array<TableTreeItem>]
};

export default function MarkdownTable({ children }: Props) {
  // we're going to assume there's a table header here
  // since marked (marksy's parser) requires a header
  let [head, body] = children;

  // a bunch of the elements returned by marksy are null,
  // so there's a lot of filtering and finding with the identity
  const headNode = head.find(element => element);
  const headRow = headNode && headNode.props.children.find(row => row);
  const headCells =
    headRow &&
    headRow.props.children
      .filter(cell => cell)
      .map((cell, index) => (
        <TableHeaderCell key={index}>{cell.props.children}</TableHeaderCell>
      ));
  const bodyNode = body.find(element => element);
  const bodyRows =
    bodyNode &&
    bodyNode.props.children.filter(row => row).map(row => {
      const rowCells = row.props.children.filter(cell => cell).map(cell => {
        let { children: cellReactChildren } = cell.props;
        if (cellReactChildren == null) {
          return <TableCell key={cell.key} />;
        }

        const transforms = [
          isAvailable,
          isExperimental,
          isInDevelopment,
          isNew,
          isPlanned
        ];

        const enhancedChildren = cellReactChildren
          .filter(child => child)
          // all the transforms return a (possibly modified) node,
          // which is passed to the next transform
          .map(child =>
            transforms.reduce((node, transform) => transform(node), child)
          );

        return <TableCell key={cell.key}>{enhancedChildren}</TableCell>;
      });

      // Sometimes marksy returns null if the cell actually contains empty string.
      // Pad out the length of the rowCells array so there are at least as many
      // columns as defined in the header
      while (headCells && rowCells.length < headCells.length) {
        rowCells.push(<TableCell key={`emptyCell_${rowCells.length}`} />);
      }

      return <TableRow key={row.key}>{rowCells}</TableRow>;
    });

  return (
    <Table>
      <thead>
        <TableRow>{headCells}</TableRow>
      </thead>
      <tbody>{bodyRows}</tbody>
    </Table>
  );
}
