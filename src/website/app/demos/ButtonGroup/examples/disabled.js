/* @flow */
import Button from '../../../../../library/Button';
import ButtonGroup from '../../../../../library/ButtonGroup';
import DemoLayout from '../../shared/DemoLayout';

export default {
  id: 'disabled',
  title: 'Disabled',
  description: `Use \`disabled\` to indicate that Buttons are not available for
interaction.  Note that the \`disabled\` prop may be set on the root or on
individual children.`,
  scope: { Button, ButtonGroup, DemoLayout },
  source: `
    <DemoLayout>
      <ButtonGroup disabled aria-label="Edit text">
        <Button>Cut</Button>
        <Button>Copy</Button>
        <Button>Paste</Button>
      </ButtonGroup>

      <ButtonGroup aria-label="Edit text">
        <Button disabled>Cut</Button>
        <Button>Copy</Button>
        <Button>Paste</Button>
      </ButtonGroup>

      <ButtonGroup
        disabled
        aria-label="Align text"
        defaultChecked={0}
        mode="radio">
        <Button>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </ButtonGroup>

      <ButtonGroup aria-label="Align text" defaultChecked={0} mode="radio">
        <Button>Left</Button>
        <Button>Center</Button>
        <Button disabled>Right</Button>
      </ButtonGroup>
    </DemoLayout>
  `
};
