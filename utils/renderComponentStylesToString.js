/* @flow */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import { ThemeProvider } from '../src/library/themes';

export default function renderComponentStylesToString(
  component: React$Element<*>
) {
  return renderStylesToString(
    renderToString(<ThemeProvider>{component}</ThemeProvider>)
  );
}
