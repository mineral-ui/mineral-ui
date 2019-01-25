/* @flow */
import styled from '@emotion/styled';
import { themed } from '../../../../../../library/themes';
import Button from '../../../../../../library/Button';
import ButtonGroup from '../../../../../../library/ButtonGroup';
import Dropdown from '../../../../../../library/Dropdown';
import IconArrowDropDown from 'mineral-ui-icons/IconArrowDropDown';
import data from '../../../Menu/common/menuData';

const StyledButton = styled(Button)({
  color: 'lime !important'
});

const ThemedButton = themed(Button)({
  Button_backgroundColor: 'lime'
});

export default {
  id: 'children',
  title: 'Children',
  description:
    'Various combinations of children, including styled/themed buttons, and styled/themed buttons used as triggers in popover-type components',
  hideFromProd: true,
  scope: {
    Button,
    ButtonGroup,
    data,
    Dropdown,
    IconArrowDropDown,
    StyledButton,
    ThemedButton
  },
  source: `
  <ButtonGroup aria-label="Example" variant="warning">
    <Button>Button</Button>
    <StyledButton>Styled</StyledButton>
    <ThemedButton>Themed</ThemedButton>
    <Dropdown data={data}>
      <Button iconEnd={<IconArrowDropDown />}>Button</Button>
    </Dropdown>
    <Dropdown data={data}>
      <StyledButton iconEnd={<IconArrowDropDown />}>Styled</StyledButton>
    </Dropdown>
    <Dropdown data={data}>
      <ThemedButton iconEnd={<IconArrowDropDown />}>Themed</ThemedButton>
    </Dropdown>
  </ButtonGroup>
  `
};
