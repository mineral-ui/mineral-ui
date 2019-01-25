/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '../../themes';
import DialogTitle from '../DialogTitle';
import examples from '../../../website/app/demos/Dialog/DialogTitle/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowDialogTitle(props = {}) {
  const dialogTitleProps = {
    ...props
  };

  return shallow(
    <ThemeProvider>
      <DialogTitle {...dialogTitleProps}>children</DialogTitle>
    </ThemeProvider>
  );
}

describe('DialogTitle', () => {
  it('renders', () => {
    const dialogTitle = shallowDialogTitle();

    expect(dialogTitle.exists()).toEqual(true);
  });

  testDemoExamples(examples);
});
