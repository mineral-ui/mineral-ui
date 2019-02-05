/* @flow */
export default `Use Dialog when you require a user confirmation or decision,
need to reveal critical information, or need to show information without losing
the overall context of the page. Modal Dialogs eliminate interactions with the
rest of the app and completely trap user focus until they are dismissed or
otherwise closed. Modeless Dialogs do not interrupt workflow, but may not be
dismissed without triggering a close action. Both of these approaches are
disruptive, so use thoughtfully and sparingly.

Note that an accessible label is required—one is automatically created if you
provide a title via the \`title\` prop or supply a
[DialogTitle](/components/dialog-title). Otherwise you must pass an
\`aria-label\` to Dialog.`;
