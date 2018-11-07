/* @flow */
import React from 'react';
import GridItem from './DemoGridItem';

export default function renderGridItems(count: number) {
  let gridItems = [];
  for (let i = 0; i < count; i++) {
    gridItems.push(<GridItem key={i}>{i + 1}</GridItem>);
  }
  return gridItems;
}
