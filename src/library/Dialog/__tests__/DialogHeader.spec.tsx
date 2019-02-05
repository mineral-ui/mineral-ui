/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import DialogHeader from '../DialogHeader';
import examples from '../../../website/app/demos/Dialog/DialogHeader/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowDialogHeader(props = {}) {
  const dialogHeaderProps = {
    ...props
  };

  return shallow(<DialogHeader {...dialogHeaderProps} />);
}

describe('DialogHeader', () => {
  it('renders', () => {
    const dialogHeader = shallowDialogHeader();

    expect(dialogHeader.exists()).toEqual(true);
  });

  testDemoExamples(examples);
});
