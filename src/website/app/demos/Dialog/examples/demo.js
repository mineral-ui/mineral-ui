/* @flow */
import Dialog from '../../../../../library/Dialog';
import Demo from '../components/DialogDemo';

export default {
  id: 'demo',
  title: 'Demo',
  description: `WIP - This is an example of how we might hide some of the demo
implementation details.`,
  scope: { Dialog, Demo },
  source: `
    <Demo>
      <Dialog
        // closeOnClickOutside={false}
        // closeOnEscape={false}
        // showOverlay={false}
      />
    </Demo>`
};
