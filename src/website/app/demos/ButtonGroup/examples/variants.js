/* @flow */
import Button from '../../../../../library/Button';
import ButtonGroup from '../../../../../library/ButtonGroup';
import DemoLayout from '../../shared/DemoLayout';

export default {
  id: 'variants',
  title: 'Variants',
  description: `Use the \`variant\` prop to help communicate purpose. Note
that the \`variant\` prop may be set on the root or on individual children.`,
  scope: { Button, ButtonGroup, DemoLayout },
  source: `
    <DemoLayout>
      <ButtonGroup variant="success" aria-label="Shopping options">
        <Button>Donate $5</Button>
        <Button>Donate $10</Button>
      </ButtonGroup>
      <ButtonGroup variant="warning" aria-label="Shopping options">
        <Button>Revoke Author Permissions</Button>
        <Button>Revoke Group Permissions</Button>
      </ButtonGroup>
      <ButtonGroup variant="danger" aria-label="Shopping options">
        <Button>Send Storm Watch</Button>
        <Button>Send Storm Warning</Button>
      </ButtonGroup>
    </DemoLayout>
  `
};
