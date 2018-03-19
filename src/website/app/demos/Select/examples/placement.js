/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import Select from '../../../../../library/Select';
import { basicData as data } from '../components/selectData';

const DemoLayout = createStyledComponent('div', {
  height: '175px',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center'
});

export default {
  id: 'placement',
  title: 'Placement',
  description: `The \`placement\` prop determines the initial placement of the
Select content relative to the trigger. The Select will still react to viewport
edges and scrolling.`,
  scope: { data, DemoLayout, Select },
  source: `
    <DemoLayout>
      <Select data={data} placement="bottom-start" isOpen />
    </DemoLayout>`
};
