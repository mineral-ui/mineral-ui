/* @flow */
import Button from '../../../../../library/Button';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'primary',
  title: 'Primary Buttons',
  description: `Buttons trigger different actions around the page. Primary Buttons are used once per container, usually as the main call to action for the page.
    Overuse of primary buttons could make the interface feel too busy.`,
  scope: { Button, DemoLayout },
  source: `
    <DemoLayout>
      <Button primary>Default</Button>
      <Button variant="success" primary>Success</Button>
      <Button variant="warning" primary>Warning</Button>
      <Button variant="danger" primary>Danger</Button>
      <Button primary disabled>Disabled</Button>
    </DemoLayout>`
};
