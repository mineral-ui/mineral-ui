/* @flow */
import { componentTheme as dialogComponentTheme } from '../../../../library/Dialog/Dialog';
import { componentTheme as dialogActionsComponentTheme } from '../../../../library/Dialog/DialogActions';
import { componentTheme as dialogBodyComponentTheme } from '../../../../library/Dialog/DialogBody';
import { componentTheme as dialogTitleComponentTheme } from '../../../../library/Dialog/DialogTitle';

import dialogExamples from './examples/Dialog';
import dialogActionsExamples from './examples/DialogActions';
import dialogBodyExamples from './examples/DialogBody';
import dialogFooterExamples from './examples/DialogFooter';
import dialogHeaderExamples from './examples/DialogHeader';
import dialogTitleExamples from './examples/DialogTitle';

import bestPractices from './bestPractices';

const dialogDoc = require('!!react-docgen-loader!../../../../library/Dialog/Dialog');
const dialogActionsDoc = require('!!react-docgen-loader!../../../../library/Dialog/DialogActions');
const dialogBodyDoc = require('!!react-docgen-loader!../../../../library/Dialog/DialogBody');
const dialogFooterDoc = require('!!react-docgen-loader!../../../../library/Dialog/DialogFooter');
const dialogHeaderDoc = require('!!react-docgen-loader!../../../../library/Dialog/DialogHeader');
const dialogTitleDoc = require('!!react-docgen-loader!../../../../library/Dialog/DialogTitle');

export default [
  {
    bestPractices: bestPractices.dialog,
    componentTheme: dialogComponentTheme,
    doc: dialogDoc,
    examples: dialogExamples,
    slug: 'dialog',
    title: 'Dialog',
    whenHowToUse: `Use Dialog when you require a user confirmation or decision,
need to reveal critical information, or need to show information without losing
the overall context of the page. Modal Dialogs eliminate interactions with the
rest of the app and completely trap user focus until they are dismissed or
otherwise closed. Modeless Dialogs do not interrupt workflow, but may not be
dismissed without triggering a close action. Both of these approaches are
disruptive, so use thoughtfully and sparingly.

Note that an accessible label is required—one is automatically created if you
provide a title via the \`title\` prop or supply a
[DialogTitle](/components/dialog-title). Otherwise you must pass an
\`aria-label\` to Dialog.`
  },
  {
    componentTheme: dialogActionsComponentTheme,
    doc: dialogActionsDoc,
    examples: dialogActionsExamples,
    slug: 'dialog-actions',
    title: 'DialogActions'
  },
  {
    componentTheme: dialogBodyComponentTheme,
    doc: dialogBodyDoc,
    examples: dialogBodyExamples,
    slug: 'dialog-body',
    title: 'DialogBody'
  },
  {
    doc: dialogFooterDoc,
    examples: dialogFooterExamples,
    slug: 'dialog-footer',
    title: 'DialogFooter'
  },
  {
    doc: dialogHeaderDoc,
    examples: dialogHeaderExamples,
    slug: 'dialog-header',
    title: 'DialogHeader'
  },
  {
    componentTheme: dialogTitleComponentTheme,
    doc: dialogTitleDoc,
    examples: dialogTitleExamples,
    slug: 'dialog-title',
    title: 'DialogTitle'
  }
];
