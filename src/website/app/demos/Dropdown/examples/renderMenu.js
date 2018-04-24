/* @flow */

import { createStyledComponent } from '../../../../../library/styles';
import colors from '../../../../../library/colors';
import Button from '../../../../../library/Button/Button';
import FormField from '../../../../../library/Form/FormField';
import IconSearch from 'mineral-ui-icons/IconSearch';
import Dropdown from '../../../../../library/Dropdown';
import Menu from '../../../../../library/Menu';
import TextInput from '../../../../../library/TextInput';
import Text from '../../../../../library/Text';
import data from '../../Menu/components/menuData';

export default {
  id: 'render-menu',
  title: 'Custom Rendering - renderMenu',
  description: `Use the \`renderMenu\`
[render prop](https://reactjs.org/docs/render-props.html) to provide custom
rendering control of the menu.

The menu in the example below has been customized to include a search input.
While not fully functional, it hopefully serves to give the user an idea of
something that could be achieved with this technique.

_Prior to reaching for this functionality, please consider whether the
desired outcome could be achieved using a simpler means, such as with
Mineral's robust [styling](/styling) and/or [theming](/theming) capabilities._`,
  scope: {
    Button,
    colors,
    createStyledComponent,
    data,
    FormField,
    IconSearch,
    Menu,
    Dropdown,
    Text,
    TextInput
  },
  source: `
    () => {
      const renderMenu = ({ menuProps }) => {
        const Search = createStyledComponent('div', ({ theme }) => ({
          borderBottom: '1px solid ' + theme.color_gray_40,
          padding: theme.space_inset_md
        }));

        return (
          <div>
            <Search role="search">
              <FormField
                input={TextInput}
                type="search"
                label="Search"
                placeholder="Search..."
                hideLabel
                iconEnd={<IconSearch />} />
            </Search>
            <Menu {...menuProps} />
          </div>
        );
      };

      return (
        <Dropdown data={data} renderMenu={renderMenu}>
          <Button>Menu</Button>
        </Dropdown>
      );
    }`
};
