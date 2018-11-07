/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '../../themes';
import { dialogTitleTheme } from '../themes';
import DialogTitle from '../DialogTitle';
import examples from '../../../website/app/demos/Dialog/DialogTitle/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

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

  describe('theme overrides', () => {
    testThemeOverrides(
      <DialogTitle>children</DialogTitle>,
      getProcessedComponentThemeKeys(dialogTitleTheme, {
        excludeKeys: ['DialogTitleIcon_margin', 'DialogTitleIcon_size']
      })
    );
    testThemeOverrides(<DialogTitle variant="danger">children</DialogTitle>, [
      'DialogTitleIcon_margin',
      'DialogTitleIcon_size'
    ]);
  });
});
