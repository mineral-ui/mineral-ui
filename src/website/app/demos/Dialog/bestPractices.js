/* @flow */
import React from 'react';
import Link from '../../../../library/Link';
import Text from '../../../../library/Text';
import DemoLayout from './components/DemoLayout';
import Dialog from './components/DemoDialog';

export default {
  dialog: [
    {
      type: 'do',
      description: `Use clear and concise language for titles and actions. The
title should avoid apologies (Sorry to interrupt), alarm (WARNING), and
ambiguity (Are you sure?). Actions should clearly indicate the outcome and
should be in verb-noun form except for common cases (Create, Save, Send, Share,
Cancel, etc.)`,
      example: (
        <div>
          <DemoLayout>
            <Dialog
              title="Share this article with your entire friends list?"
              actions={[{ text: 'Cancel' }, { text: 'Share' }]}
            />
          </DemoLayout>
        </div>
      )
    },
    {
      type: 'do',
      description: `Provide at least two actions (one dismissing and one
confirming), but no more than three actions for user decisions. Provide one
action for user acknowledgements.`,
      example: (
        <div>
          <DemoLayout>
            <Dialog
              title="Are you sure you want to save before closing?"
              actions={[
                { text: 'Cancel', style: { marginRight: 'auto' } },
                { text: `Don't save` },
                { text: 'Save' }
              ]}
            />
          </DemoLayout>
          <DemoLayout>
            <Dialog
              title="The glowing selenite tower is no longer available"
              actions={[{ text: 'I understand' }]}
            />
          </DemoLayout>
        </div>
      )
    },
    {
      type: 'do',
      description: `Use the right Dialog size based on your content and
supported screen sizes; consider alternative components if the content is too
long or too complex within a Dialog.`,
      example: (
        <div>
          <DemoLayout>
            <Dialog
              title="The glowing selenite tower is no longer available"
              size="small"
              actions={[{ text: 'I understand' }]}
            />
          </DemoLayout>
        </div>
      )
    },
    {
      type: 'dont',
      description: `Don't include links that navigate away from Dialog; this
  leaves the task at-hand unfinished.`,
      example: (
        <div>
          <DemoLayout>
            <Dialog
              title="Team Policies"
              actions={[{ text: 'Disagree' }, { text: 'I agree' }]}>
              <Text>
                Click <Link href="javascript:void(0);">here</Link> to read the
                entire team policy
              </Text>
            </Dialog>
          </DemoLayout>
        </div>
      )
    },
    {
      type: 'dont',
      description: `Don't use Dialog for non-critical, non-actionable,
contextual information; use [Tooltip](/components/tooltip) or
[Popover](/components/popover) instead.`,
      example: (
        <div>
          <DemoLayout>
            <Dialog aria-label="Info">
              <Text>
                Fluorite is the mineral form of calcium fluoride, CaF₂. It
                belongs to the halide minerals. It crystallizes in isometric
                cubic habit, although octahedral and more complex isometric
                forms are not uncommon.
              </Text>
            </Dialog>
          </DemoLayout>
        </div>
      )
    }
  ]
};
