/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import Button from '../../../../../library/Button';
import ButtonGroup from '../../../../../library/ButtonGroup';
import _DemoLayout from '../../shared/DemoLayout';

const DemoLayout = createStyledComponent(_DemoLayout, { width: 90 });

export default {
  id: 'vertical',
  title: 'Vertical',
  description: `Stack ButtonGroup vertically.`,
  scope: { Button, ButtonGroup, DemoLayout },
  source: `
    <DemoLayout>
      <ButtonGroup vertical aria-label="Align text" mode="checkbox">
        <Button defaultChecked>Top</Button>
        <Button>Center</Button>
        <Button>Bottom</Button>
      </ButtonGroup>
    </DemoLayout>
  `
};
