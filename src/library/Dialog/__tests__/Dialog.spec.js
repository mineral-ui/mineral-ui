/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../Dialog';
import examples from '../../../website/app/demos/Dialog/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowDialog(props = {}) {
  const dialogProps = {
    ...props
  };

  return shallow(<Dialog {...dialogProps} />);
}

describe('Icon', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const dialog = shallowDialog();

    expect(dialog.exists()).toEqual(true);
  });
});
