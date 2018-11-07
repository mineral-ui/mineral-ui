/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { dialogRowTheme } from '../themes';
import Dialog from '../Dialog';
import DialogBody from '../DialogBody';
import examples from '../../../website/app/demos/Dialog/DialogBody/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

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

  describe('theme overrides', () => {
    testThemeOverrides(
      <DialogBody />,
      getProcessedComponentThemeKeys(dialogRowTheme)
    );
  });
});
