/* @flow */
import { createStyledComponent } from '../../../../../../styles';
import Button from '../../../../../../Button';
import Radio from '../../../../../../Radio';
import TextInput from '../../../../../../TextInput';
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
  scope: { Button, DemoForm, Radio, TextInput },
  source: `
    <DemoForm>
      <div>
        <Radio name="size" size="small" label="Small" />
        <TextInput size="small" defaultValue="Small" />
        <Button size="small">Small</Button>
      </div>
      <div>
        <Radio name="size" size="medium" label="Medium" />
        <TextInput size="medium" defaultValue="Medium" />
        <Button size="medium">Medium</Button>
      </div>
      <div>
        <Radio name="size" label="Large" />
        <TextInput defaultValue="Large" />
        <Button>Large</Button>
      </div>
      <div>
        <Radio name="size" size="jumbo" label="Jumbo" />
        <TextInput size="jumbo" defaultValue="Jumbo" />
        <Button size="jumbo">Jumbo</Button>
      </div>
    </DemoForm>
  `
};
