/* @flow */
import Button from '../../../../../library/Button';
import ButtonGroup from '../../../../../library/ButtonGroup';

export default {
  id: 'uncontrolled',
  title: 'Uncontrolled',
  description: `Create an uncontrolled ButtonGroup by using the
\`defaultChecked\` prop rather than the \`checked\` prop. Note that the
\`defaultChecked\` prop may be set on the root (where the value may be a number
representing the index of the Button to check or an array of those indices,
based on the zero-indexed collection of nested Buttons) or on individual
children (where the value is a boolean).`,
  scope: { Button, ButtonGroup },
  source: `
    <ButtonGroup aria-label="Align text" mode="radio">
      <Button defaultChecked>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
    </ButtonGroup>
  `
};
