/* @flow */
import IconArrowDropDown from 'mineral-ui-icons/IconArrowDropDown';
import Button from '../../../../../library/Button';
import ButtonGroup from '../../../../../library/ButtonGroup';
import Dropdown from '../../../../../library/Dropdown';
import Popover from '../../../../../library/Popover';
import { createStyledComponent } from '../../../../../library/styles';
import Tooltip from '../../../../../library/Tooltip';
import data from '../../Menu/components/menuData';
import DemoContent from '../../Popover/components/DemoContent';

const FixedWidthLayout = createStyledComponent('div', {
  '@media only screen and (max-width: 450px)': {
    '& > * button': {
      maxWidth: '5rem'
    }
  },
  '@media only screen and (max-width: 380px)': {
    '& > * button': {
      maxWidth: '4rem'
    }
  }
});

export default {
  id: 'composition',
  title: 'Composition',
  description: `Other Mineral components that render a Mineral
[Button](/components/button), such as [Tooltip](/components/tooltip),
[Popover](/components/popover), or [Dropdown](/components/dropdown), may be
composed in a ButtonGroup, though they are incompatible with the \`mode\` prop.`,
  scope: {
    Button,
    ButtonGroup,
    data,
    DemoContent,
    Dropdown,
    FixedWidthLayout,
    IconArrowDropDown,
    Popover,
    Tooltip
  },
  source: `
    <FixedWidthLayout>
      <ButtonGroup aria-label="Optional compositions">
        <Button>Button</Button>
        <Tooltip content="Lorem ipsum dolor sit amet">
          <Button>Tooltip</Button>
        </Tooltip>
        <Popover content={<DemoContent />}>
          <Button>Popover</Button>
        </Popover>
        <Dropdown data={data}>
          <Button iconEnd={<IconArrowDropDown />}>Dropdown</Button>
        </Dropdown>
      </ButtonGroup>
    </FixedWidthLayout>
  `
};
