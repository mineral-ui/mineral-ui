/* @flow */
import Button from '../../../../../library/Button';
import ButtonGroup from '../../../../../library/ButtonGroup';

export default {
  id: 'basic',
  title: 'Basic',
  description: `ButtonGroups stylistically group a set of buttons together.`,
  scope: { Button, ButtonGroup },
  source: `
    <ButtonGroup aria-label="Edit text">
      <Button>Cut</Button>
      <Button>Copy</Button>
      <Button>Paste</Button>
    </ButtonGroup>
  `
};
