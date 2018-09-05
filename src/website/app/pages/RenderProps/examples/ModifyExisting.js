/* @flow */
import React from 'react';
import LiveProvider from '../../../LiveProvider';
import customSortableHeaderCell from '../../../demos/Table/examples/customSortableHeaderCell';

const { scope, source } = customSortableHeaderCell;

export default function ModifyExisting() {
  const liveProviderProps = {
    scope,
    source
  };

  return <LiveProvider {...liveProviderProps} />;
}
