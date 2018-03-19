/* @flow */
import { createStyledComponent } from '../../../../../library/styles';
import Tooltip from '../../../../../library/Tooltip';

const DemoLayout = createStyledComponent('div', ({ theme }) => ({
  fontFamily: theme.fontFamily
}));

export default {
  id: 'prose',
  title: 'In Prose',
  description: `Tooltips can add information to prose.`,
  scope: { DemoLayout, Tooltip },
  source: `
    <DemoLayout>
      <p>
        Here's some prose with a <Tooltip content="Light years star stuff" isOpen usePortal>Tooltip</Tooltip> in the middle of it.
      </p>
    </DemoLayout>`
};
