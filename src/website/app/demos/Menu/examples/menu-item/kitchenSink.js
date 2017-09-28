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
import {
  createStyledComponent,
  mineralTheme,
  pxToEm
} from '../../../../../../utils';
import IconCloud from '../../../../../../Icon/IconCloud';
import Menu, { MenuItem } from '../../../../../../Menu';
import _DemoLayout from '../../components/DemoLayout';

const DemoLayout = createStyledComponent(_DemoLayout, {
  '& > div:last-child': {
    // For <DropdownContent wide={true} />
    width: pxToEm(344)
  }
});

export default {
  id: 'kitchen-sink',
  title: 'Kitchen Sink',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  hideFromProd: true,
  scope: { DemoLayout, IconCloud, Menu, MenuItem },
  source: `
    <DemoLayout>
      <Menu>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}>
          Kitchen Sink
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}>
          Kitchen Siiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiink
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}>
          Kitchen Sink with much longer text to force wrapping
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink">
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Siiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiink">
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink with much longer text to force wrapping">
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen sink">
          Kitchen Sink
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen sink">
          Kitchen Sink with much longer text to force wrapping
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink with much longer text to force wrapping">
          Kitchen Sink
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink with much longer text to force wrapping">
          Kitchen Sink with much longer text to force wrapping
        </MenuItem>
      </Menu>
      <Menu>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}>
          Kitchen Sink
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}>
          Kitchen Sink with much longer text to force wrapping
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink">
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink with much longer text to force wrapping">
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen sink">
          Kitchen Sink
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen sink">
          Kitchen Sink with much longer text to force wrapping
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink with much longer text to force wrapping">
          Kitchen Sink
        </MenuItem>
        <MenuItem
          iconStart={<IconCloud />}
          iconEnd={<IconCloud />}
          secondaryText="Kitchen Sink with much longer text to force wrapping">
          Kitchen Sink with much longer text to force wrapping
        </MenuItem>
      </Menu>
    </DemoLayout>
  `
};
