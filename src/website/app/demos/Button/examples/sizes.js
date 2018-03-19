/* @flow */
import Button from '../../../../../library/Button';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'sizes',
  description: `To provide hierarchy to actions on your page, change Button impact with the \`size\` attribute.

For a Button whose width is defined by its container, use \`fullWidth\`.`,
  title: 'Sizes',
  scope: { Button, DemoLayout },
  source: `
    <DemoLayout>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button>Large</Button>
      <Button size="jumbo">Jumbo</Button>
      <Button fullWidth>Full Width</Button>
    </DemoLayout>`
};
