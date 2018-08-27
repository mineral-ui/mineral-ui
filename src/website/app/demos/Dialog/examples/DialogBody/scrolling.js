/* @flow */
import React from 'react';
import {
  DialogBody,
  DialogHeader,
  DialogTitle
} from '../../../../../../library/Dialog';
import DemoLayout from '../../components/DemoLayout';
import Dialog from '../../components/DemoDialog';

const content = [...Array(6)].map((_, index) => (
  <p key={index}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo
    laoreet sit amet. Vitae sapien pellentesque habitant morbi tristique.
    Posuere lorem ipsum dolor sit. Vel risus commodo viverra maecenas accumsan.
    Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Lectus
    mauris ultrices eros in cursus turpis. Natoque penatibus et magnis dis. Eget
    aliquet nibh praesent tristique magna sit amet. Pellentesque elit eget
    gravida cum sociis natoque penatibus. Luctus accumsan tortor posuere ac ut
    consequat semper viverra. Sed vulputate odio ut enim. Vivamus at augue eget
    arcu.
  </p>
));

export default {
  id: 'scrolling',
  title: 'Scrolling',
  description: `Dialog body content that exceeds the size of the container will
automatically scroll.`,
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
