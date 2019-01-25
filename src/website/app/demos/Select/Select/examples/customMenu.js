/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import FormField from '../../../../../../library/Form/FormField';
import IconSearch from 'mineral-ui-icons/IconSearch';
import Select from '../../../../../../library/Select';
import Menu from '../../../../../../library/Menu';
import TextInput from '../../../../../../library/TextInput';
import Text from '../../../../../../library/Text';
import { basicData as data } from '../../common/selectData';
import renderPropsDescription from '../../../common/renderPropsDescription';

const _DemoLayout = styled('div')({
  marginBottom: 200
});

const DemoLayout = (props: {}) => <_DemoLayout {...props} />;

export default {
  id: 'custom-menu',
  title: 'Custom Menu',
  description: `Use the \`menu\` render prop to provide custom rendering control
of the [Menu](/components/menu). ${renderPropsDescription}

<Callout title="Note">
The menu in the example below has been customized to include a search input.
While neither fully functional nor accessible, it hopefully serves to give the
user an idea of something that could be achieved with this technique.
</Callout>`,
  scope: {
    styled,
    data,
    DemoLayout,
    FormField,
    IconSearch,
    Menu,
    Select,
    Text,
    TextInput
  },
  source: `
    () => {
      const menu = ({ props }) => {
        const Search = styled('div')(({ theme }) => ({
          borderBottom: '1px solid ' + theme.color_gray_40,
          padding: theme.space_inset_md
        }));

        return (
          <div>
            <Search>
              <FormField
                input={TextInput}
                type="search"
                label="Filter"
                placeholder="Filter..."
                hideLabel
                iconEnd={<IconSearch />} />
            </Search>
            <Menu {...props} />
          </div>
        );
      };

      return (
        <DemoLayout>
          <Select data={data} menu={menu} isOpen />
        </DemoLayout>
      );
    }`
};
