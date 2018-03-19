/* @flow */
import Button from '../../../../../library/Button';
import Tooltip from '../../../../../library/Tooltip';
import IconPerson from 'mineral-ui-icons/IconPerson';

export default {
  id: 'disabled',
  title: 'Disabled',
  description: `Disabled Tooltips simply don't display the tooltip content upon
interaction. The child is unaffected.`,
  scope: { Button, IconPerson, Tooltip },
  source: `
    <Tooltip content="Edit your account settings" disabled>
      <Button iconStart={<IconPerson title="account settings"/>} />
    </Tooltip>`
};
