/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import Button from '../../../../../library/Button';
import TextArea from '../../../../../library/TextArea';
import TextInput from '../../../../../library/TextInput/';
import _DemoLayout from '../components/DemoLayout';

const DemoLayout = createStyledComponent(_DemoLayout, {
  '& > *': {
    alignItems: 'flex-start',
    display: 'flex',

    '& > div': {
      flex: '0 0 8rem',
      marginRight: '0.5rem'
    }
  }
});

export default {
  id: 'next-to-other-inputs',
  title: 'Placed Next to Other Inputs',
  hideFromProd: true,
  scope: { Button, DemoLayout, TextArea, TextInput },
  source: `
    <DemoLayout>
      <div>
        <TextArea size="small" defaultValue="Small" rows={1} />
        <TextArea size="small" defaultValue="Small" rows={1} autoSize />
        <TextInput size="small" defaultValue="Small" />
        <Button size="small">Small</Button>
      </div>
      <div>
        <TextArea size="medium" defaultValue="Medium" rows={1} />
        <TextArea size="medium" defaultValue="Medium" rows={1} autoSize />
        <TextInput size="medium" defaultValue="Medium" />
        <Button size="medium">Medium</Button>
      </div>
      <div>
        <TextArea defaultValue="Large" rows={1} />
        <TextArea defaultValue="Large" rows={1} autoSize />
        <TextInput defaultValue="Large" />
        <Button>Large</Button>
      </div>
      <div>
        <TextArea size="jumbo" defaultValue="Jumbo" rows={1} />
        <TextArea size="jumbo" defaultValue="Jumbo" rows={1} autoSize />
        <TextInput size="jumbo" defaultValue="Jumbo" />
        <Button size="jumbo">Jumbo</Button>
      </div>
    </DemoLayout>
  `
};
