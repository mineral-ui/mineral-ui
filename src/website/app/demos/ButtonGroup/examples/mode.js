/* @flow */
import Button from '../../../../../library/Button';
import ButtonGroup from '../../../../../library/ButtonGroup';
import DemoLayout from '../../shared/DemoLayout';

export default {
  id: 'mode',
  title: 'Mode',
  description: `Use the \`mode\` prop to render toggleable Buttons. A value of
\`radio\` will cause Buttons to behave like radio buttons and a value of
\`checkbox\` will cause Buttons to behave like checkboxes.`,
  scope: { Button, ButtonGroup, DemoLayout },
  source: `
    <DemoLayout>
      <ButtonGroup
        mode="radio"
        aria-label="Align text"
        defaultChecked={0}>
        <Button>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <ButtonGroup
        mode="checkbox"
        aria-label="Text Decoration"
        defaultChecked={[0, 1]}>
        <Button>Bold</Button>
        <Button>Italic</Button>
        <Button>Underline</Button>
      </ButtonGroup>
    </DemoLayout>
  `
};
