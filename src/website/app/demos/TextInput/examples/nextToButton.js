/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import Button from '../../../../../library/Button';
import TextInput from '../../../../../library/TextInput/';
import _DemoLayout from '../../shared/DemoLayout';

const DemoLayout = createStyledComponent(_DemoLayout, {
  '& > *': {
    alignItems: 'flex-end',
    display: 'flex',

    '& > div': {
      flex: '0 0 8rem',
      marginRight: '0.5rem'
    }
  }
});

export default {
  id: 'next-to-button',
  title: 'Placed Next to Buttons',
  hideFromProd: true,
  hideSource: true,
  scope: { Button, DemoLayout, TextInput },
  source: `
    <DemoLayout>
      <div>
        <TextInput size="small" defaultValue="Small" />
        <Button size="small">Small</Button>
      </div>
      <div>
        <TextInput size="medium" defaultValue="Medium" />
        <Button size="medium">Medium</Button>
      </div>
      <div>
        <TextInput defaultValue="Large" />
        <Button>Large</Button>
      </div>
      <div>
        <TextInput size="jumbo" defaultValue="Jumbo" />
        <Button size="jumbo">Jumbo</Button>
      </div>
    </DemoLayout>
  `
};
