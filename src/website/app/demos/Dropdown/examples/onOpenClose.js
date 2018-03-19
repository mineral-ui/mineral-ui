/* @flow */
import Button from '../../../../../library/Button';
import Dropdown from '../../../../../library/Dropdown';
import data from '../../Menu/components/menuData';

export default {
  id: 'on-open-close',
  hideFromProd: true,
  title: 'onOpen and onClose',
  scope: { Button, data, Dropdown },
  source: `
    () => {
      const onOpen = () => {
        console.log('Opened');
      };

      const onClose = () => {
        console.log('Closed');
      };

      return (
        <Dropdown data={data} onOpen={onOpen} onClose={onClose}>
          <Button>Menu</Button>
        </Dropdown>
      );
    }`
};
