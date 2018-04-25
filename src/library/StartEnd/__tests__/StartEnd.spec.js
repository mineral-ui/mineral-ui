/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import testDemoExamples from '../../../../utils/testDemoExamples';
import Box from '../../Box';
import StartEnd from '../StartEnd';
import examples from '../../../website/app/demos/StartEnd/examples';

function shallowStartEnd([startEndProps, boxProps]) {
  return shallow(
    <StartEnd {...startEndProps}>
      <Box {...boxProps} />
      <Box {...boxProps} />
    </StartEnd>
  );
}

describe('StartEnd', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const startEnd = shallowStartEnd([{}, {}]);

    expect(startEnd.exists()).toEqual(true);
  });
});
