/* @flow */
import Button from '../../../../../library/Button';
import Tooltip from '../../../../../library/Tooltip';
import IconPerson from 'mineral-ui-icons/IconPerson';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Tooltips wrap the triggering component.
Placement is relative to the location of the trigger.
Tooltips will change position relative to the trigger automatically depending on viewport constraints.`,
  scope: { Button, IconPerson, Tooltip },
  source: `
    <Tooltip content="Edit your account settings">
      <Button iconStart={<IconPerson title="account settings"/>} />
    </Tooltip>`
};
