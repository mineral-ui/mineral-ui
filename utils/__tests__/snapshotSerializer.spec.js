/* @flow */
import React from 'react';
import { mount } from 'enzyme';
import ThemeProvider from '../../src/library/themes/ThemeProvider';
import Button from '../../src/library/Button';

describe('snapshotSerializer', () => {
  it('Excludes verbose ThemeProvider props from snapshot', () => {
    const tree = mount(
      <ThemeProvider>
        <Button>Submit</Button>
      </ThemeProvider>
    );

    expect(tree).toMatchSnapshot();
  });
});
