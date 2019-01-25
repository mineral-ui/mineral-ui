/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';
import Button from '../../Button/Button';
import Dialog, {
  DialogActions,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  dialogActionsTheme,
  dialogRowTheme,
  dialogTheme,
  dialogTitleTheme
} from '../index';

describe('Dialog', () => {
  describe('theme overrides', () => {
    const props = {
      id: 'test',
      isOpen: true,
      title: 'Test',
      usePortal: false
    };
    testThemeOverrides(
      <Dialog {...props} />,
      getProcessedComponentThemeKeys(dialogTheme, {
        excludeKeys: ['Dialog_transitionDuration', 'DialogCloseButton_margin']
      }).filter((key) => {
        const parts = key.split('_');
        const lastPart = parts[parts.length - 1];

        return lastPart !== 'small' && lastPart !== 'large';
      })
    );
    testThemeOverrides(<Dialog {...props} showCloseButton title="title" />, [
      'DialogCloseButton_margin'
    ]);
  });
});

describe('DialogActions', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <DialogActions>
        <Button>Cancel</Button>
        <Button>Action</Button>
      </DialogActions>,
      getProcessedComponentThemeKeys(dialogActionsTheme)
    );
  });
});

describe('DialogBody', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <DialogBody />,
      getProcessedComponentThemeKeys(dialogRowTheme)
    );
  });
});

describe('DialogFooter', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <DialogFooter />,
      getProcessedComponentThemeKeys(dialogRowTheme)
    );
  });
});

describe('DialogHeader', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <DialogHeader />,
      getProcessedComponentThemeKeys(dialogRowTheme)
    );
  });
});

describe('DialogTitle', () => {
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
