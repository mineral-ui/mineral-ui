/* @flow */
import Button from '../../../../../library/Button';
import ButtonGroup from '../../../../../library/ButtonGroup';
import DemoLayout from '../../shared/DemoLayout';

export default {
  id: 'sizes',
  title: 'Sizes',
  description: `To provide hierarchy to actions on your page, change ButtonGroup
  impact with the \`size\` attribute.

  For a ButtonGroup whose width is defined by its container, use \`fullWidth\`.
`,
  scope: { Button, ButtonGroup, DemoLayout },
  source: `() => {
    const sizes = ['small', 'medium', 'large', 'jumbo'];

    return (
      <DemoLayout>
        {
          sizes.map((size) => (
            <ButtonGroup size={size} aria-label="Edit text" key={size}>
              <Button>Cut</Button>
              <Button>Copy</Button>
              <Button>Paste</Button>
            </ButtonGroup>
          ))
        }
        <ButtonGroup fullWidth aria-label="Edit text">
          <Button>Cut</Button>
          <Button>Copy</Button>
          <Button>Paste</Button>
        </ButtonGroup>
      </DemoLayout>
    );
  }
  `
};
