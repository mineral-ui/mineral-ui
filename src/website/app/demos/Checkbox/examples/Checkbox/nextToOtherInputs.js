/* @flow */
import { createStyledComponent } from '../../../../../../library/styles';
import Button from '../../../../../../library/Button';
import Checkbox from '../../../../../../library/Checkbox';
import TextInput from '../../../../../../library/TextInput';
import _DemoForm from '../../components/DemoForm';

const DemoForm = createStyledComponent(_DemoForm, {
  '& > *': {
    alignItems: 'center',
    display: 'flex',

    '& > *': {
      flex: '0 0 8rem',
      marginRight: '0.5rem'
    }
  }
});

export default {
  id: 'next-to-other-inputs',
  title: 'Placed Next to Other Inputs',
  hideFromProd: true,
  scope: { Button, DemoForm, Checkbox, TextInput },
  source: `
    <DemoForm>
      <div>
        <Checkbox name="size" size="small" label="Small" />
        <TextInput size="small" defaultValue="Small" />
        <Button size="small">Small</Button>
      </div>
      <div>
        <Checkbox name="size" size="medium" label="Medium" />
        <TextInput size="medium" defaultValue="Medium" />
        <Button size="medium">Medium</Button>
      </div>
      <div>
        <Checkbox name="size" label="Large" />
        <TextInput defaultValue="Large" />
        <Button>Large</Button>
      </div>
      <div>
        <Checkbox name="size" size="jumbo" label="Jumbo" />
        <TextInput size="jumbo" defaultValue="Jumbo" />
        <Button size="jumbo">Jumbo</Button>
      </div>
    </DemoForm>
  `
};
