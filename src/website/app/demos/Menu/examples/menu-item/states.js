/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import { simulate } from 'glamor';
import mineralTheme from '../../../../../../themes/mineral';
import Menu, { MenuItem } from '../../../../../../Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'states',
  title: 'States',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  hideFromProd: true,
  hideSource: true,
  scope: { DemoLayout, Menu, MenuItem, simulate },
  source: `
    <DemoLayout>
      <Menu>
        <MenuItem>
          Regular
        </MenuItem>
        <MenuItem variant="danger">
          Danger
        </MenuItem>
        <MenuItem variant="success">
          Success
        </MenuItem>
        <MenuItem variant="warning">
          Warning
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem {...simulate('hover')}>
          Hover
        </MenuItem>
        <MenuItem {...simulate('hover')} variant="danger">
          Hover
        </MenuItem>
        <MenuItem {...simulate('hover')} variant="success">
          Hover
        </MenuItem>
        <MenuItem {...simulate('hover')} variant="warning">
          Hover
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem {...simulate('focus')}>
          Focus
        </MenuItem>
        <MenuItem {...simulate('focus')} variant="danger">
          Focus
        </MenuItem>
        <MenuItem {...simulate('focus')} variant="success">
          Focus
        </MenuItem>
        <MenuItem {...simulate('focus')} variant="warning">
          Focus
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem {...simulate('focus', 'hover')}>
          Focus & Hover
        </MenuItem>
        <MenuItem {...simulate('focus', 'hover')} variant="danger">
          Focus & Hover
        </MenuItem>
        <MenuItem {...simulate('focus', 'hover')} variant="success">
          Focus & Hover
        </MenuItem>
        <MenuItem {...simulate('focus', 'hover')} variant="warning">
          Focus & Hover
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem {...simulate('focus', 'active')}>
          Focus & Active
        </MenuItem>
        <MenuItem {...simulate('focus', 'active')} variant="danger">
          Focus & Active
        </MenuItem>
        <MenuItem {...simulate('focus', 'active')} variant="success">
          Focus & Active
        </MenuItem>
        <MenuItem {...simulate('focus', 'active')} variant="warning">
          Focus & Active
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem {...simulate('active')}>
          Active
        </MenuItem>
        <MenuItem {...simulate('active')} variant="danger">
          Active
        </MenuItem>
        <MenuItem {...simulate('active')} variant="success">
          Active
        </MenuItem>
        <MenuItem {...simulate('active')} variant="warning">
          Active
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem disabled>
          Disabled
        </MenuItem>
        <MenuItem disabled variant="danger">
          Disabled
        </MenuItem>
        <MenuItem disabled variant="success">
          Disabled
        </MenuItem>
        <MenuItem disabled variant="warning">
          Disabled
        </MenuItem>
      </Menu>
    </DemoLayout>`
};
