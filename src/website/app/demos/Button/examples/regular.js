/* @flow */
import Button from '../../../../../library/Button';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'default',
  title: 'Default',
  description: `Regular Buttons are good for secondary actions when grouped with another [primary](#primary) button.
These Buttons are not impactful enough to represent the primary action in a container.`,
  scope: { Button, DemoLayout },
  source: `
    <DemoLayout>
      <Button>Default</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button disabled>Disabled</Button>
    </DemoLayout>`
};
