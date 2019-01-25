/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../Dialog';
import DialogBody from '../DialogBody';
import examples from '../../../website/app/demos/Dialog/DialogBody/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowDialog(props = {}) {
  const dialogBodyProps = {
    ...props
  };

  return shallow(
    <Dialog title="Title">
      <DialogBody {...dialogBodyProps} />
    </Dialog>
  );
}

describe('DialogBody', () => {
  it('renders', () => {
    const dialog = shallowDialog();

    expect(dialog.exists()).toEqual(true);
  });

  testDemoExamples(examples);
});
