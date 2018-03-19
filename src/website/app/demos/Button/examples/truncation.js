/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import Button from '../../../../../library/Button';

const FixedWidthLayout = createStyledComponent('div', {
  '& > button': {
    width: '10rem'
  }
});

export default {
  id: 'truncation',
  title: 'Truncation',
  description: 'Long button text is truncated when necessary.',
  scope: { Button, FixedWidthLayout },
  source: `
    <FixedWidthLayout>
      <Button>Supercalifragilisticexpialidocious</Button>
    </FixedWidthLayout>`
};
