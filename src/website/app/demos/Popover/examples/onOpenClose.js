/* @flow */
import Button from '../../../../../library/Button';
import Popover from '../../../../../library/Popover';
import DemoContent from '../components/DemoContent';

export default {
  id: 'on-open-close',
  hideFromProd: true,
  title: 'onOpen and onClose',
  scope: { Button, DemoContent, Popover },
  source: `
    () => {
      const onOpen = () => {
        console.log('Opened');
      };

      const onClose = () => {
        console.log('Closed');
      };

      return (
        <Popover content={<DemoContent />} onOpen={onOpen} onClose={onClose}>
          <Button>Menu</Button>
        </Popover>
      );
    }`
};
