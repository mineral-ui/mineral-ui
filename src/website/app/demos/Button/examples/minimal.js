/* @flow */
import Button from '../../../../../library/Button';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'minimal',
  title: 'Minimal',
  description:
    'Use for less-important actions, or if there are a lot of other buttons on screen.',
  scope: { Button, DemoLayout },
  source: `<DemoLayout>
    <Button minimal>Default</Button>
    <Button variant="success" minimal>Success</Button>
    <Button variant="warning" minimal>Warning</Button>
    <Button variant="danger" minimal>Danger</Button>
    <Button disabled minimal>Disabled</Button>
  </DemoLayout>`
};
