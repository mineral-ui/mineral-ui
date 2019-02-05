/* @flow */
export default `Use MenuItems to present the user with a choice of actions, and
don't use MenuItems to display content that is not actionable. For example,
don't create a [Menu](/components/menu) with several options where the last item
is an un-clickable status message showing the number of available servers. This
information is not _actionable_ and perhaps belongs somewhere else in your
interface.

Use the secondary text to give hints about extra functionality or provide status.`;
