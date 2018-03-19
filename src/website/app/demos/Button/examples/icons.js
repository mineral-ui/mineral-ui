/* @flow */
import Button from '../../../../../library/Button';
import IconCloud from 'mineral-ui-icons/IconCloud';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'icons',
  title: 'Buttons with Icons',
  description: `Buttons can contain [Icons](/components/icon) at their start, end, or both.

\`small\` Buttons use small Icons; \`medium\` and \`large\` Buttons use medium Icons; \`jumbo\` Buttons use large Icons.`,
  scope: { Button, IconCloud, DemoLayout },
  source: `
    () => {
      const icon = <IconCloud />;

      return (
        <DemoLayout>
          <Button iconStart={icon}>Start icon</Button>
          <Button iconEnd={icon}>End icon</Button>
          <Button iconStart={icon} iconEnd={icon}>Both icons</Button>
          <br /><br />
          <Button iconStart={icon} primary>Primary</Button>
          <Button iconStart={icon} minimal>Minimal</Button>
          <Button iconStart={icon} variant="danger">Danger</Button>
          <Button iconStart={icon} variant="success">Success</Button>
          <Button iconStart={icon} variant="warning">Warning</Button>
          <Button iconStart={icon} disabled>Disabled</Button>
          <br /><br />
          <Button iconStart={icon} size="small">Small</Button>
          <Button iconStart={icon} size="medium">Medium</Button>
          <Button iconStart={icon}>Large</Button>
          <Button iconStart={icon} size="jumbo">Jumbo</Button>
        </DemoLayout>
      );
    }`
};
