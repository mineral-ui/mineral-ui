/* @flow */
import Button from '../../../../../library/Button';
import ScrollParent from '../../Popover/components/ScrollBox';
import Tooltip from '../../../../../library/Tooltip';

export default {
  id: 'scrolling-container',
  title: 'Scrolling Container',
  description:
    'Tooltip will attempt to stay visible in an `overflow: scroll` container.',
  scope: { Button, ScrollParent, Tooltip },
  source: `
    <ScrollParent>
      <Tooltip
        content="Light years star stuff"
        placement="left"
        isOpen>
        <Button>Button</Button>
      </Tooltip>
    </ScrollParent>
  `
};
