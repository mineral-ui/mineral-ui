/* @flow */
import React from 'react';
import { mineralTheme } from '../../../../../../library/themes';
import {
  DialogBody,
  DialogHeader,
  DialogTitle
} from '../../../../../../library/Dialog';
import Text from '../../../../../../library/Text';
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

const content = (
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo
    laoreet sit amet. Vitae sapien pellentesque habitant morbi tristique.
    Posuere lorem ipsum dolor sit. Vel risus commodo viverra maecenas accumsan.
    Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin.
  </Text>
);

export default {
  id: 'basic',
  title: 'Basic Usage',
  backgroundColor: mineralTheme.color_gray_10,
  description: `DialogBody contains the main content of Dialog and provides
uniform spacing around that content.`,
  scope: {
    content,
    DemoLayout,
    Dialog,
    DialogBody,
    DialogHeader,
    DialogTitle
  },
  source: `
    <DemoLayout>
      <Dialog>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
        </DialogHeader>
        <DialogBody>
          {content}
        </DialogBody>
      </Dialog>
    </DemoLayout>`
};
