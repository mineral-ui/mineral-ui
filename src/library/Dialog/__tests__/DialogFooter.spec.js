/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import DialogFooter from '../DialogFooter';
import examples from '../../../website/app/demos/Dialog/DialogFooter/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowDialogFooter(props = {}) {
  const dialogFooterProps = {
    ...props
  };

  return shallow(<DialogFooter {...dialogFooterProps} />);
}

describe('DialogFooter', () => {
  it('renders', () => {
    const dialogFooter = shallowDialogFooter();

    expect(dialogFooter.exists()).toEqual(true);
  });

  testDemoExamples(examples);
});
