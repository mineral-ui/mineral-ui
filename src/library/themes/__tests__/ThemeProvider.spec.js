/* @flow */
import React from 'react';
import { mount } from 'enzyme';
import ThemeProvider from '../ThemeProvider';
import Sample from '../../../website/app/demos/ThemeProvider/components/Sample';
import examples from '../../../website/app/demos/ThemeProvider/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

// Allow full theme values in snapshots for ThemeProvider
import snapshotSerializer from '../../../../utils/snapshotSerializer';
snapshotSerializer.print = (val: Object, serialize: Function) => {
  val.processed = true;
  return serialize(val);
};

function mountThemedSample(theme) {
  return mount(
    <ThemeProvider theme={theme}>
      <Sample />
    </ThemeProvider>
  );
}

describe('ThemeProvider', () => {
  testDemoExamples(examples);

  it('renders correctly with default theme', () => {
    const themedSample = mountThemedSample();

    expect(themedSample).toMatchSnapshot();
  });

  it('merges nested theme variables', () => {
    const themedSample = mount(
      <ThemeProvider theme={{ color: 'black' }}>
        <ThemeProvider theme={{ color: 'tomato' }}>
          <Sample />
        </ThemeProvider>
      </ThemeProvider>
    );

    expect(themedSample).toMatchSnapshot();
  });

  it('merges themes instead of overriding', () => {
    const themedSample = mount(
      <ThemeProvider theme={{ color: 'black' }}>
        <ThemeProvider theme={{ color_warning: 'tomato' }}>
          <Sample />
        </ThemeProvider>
      </ThemeProvider>
    );

    expect(themedSample).toMatchSnapshot();
  });
});
