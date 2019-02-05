/* @flow */
import type { ComponentPropDocs } from '../../../pages/ComponentDoc/types';

const propDocs: ComponentPropDocs = {
  children: {
    description:
      'Rendered Dialog title; use of [DialogTitle](/components/dialog-title) is recommended',
    type: 'React$Node'
  },
  closeButton: {
    description: 'Rendered close button',
    type: 'React$Node'
  }
};

export default propDocs;
