# Header Component

Header provides a place for an app logo & title, functionality like primary
navigation or a workspace switcher, as well as global-level actions like search,
an app switcher, notifications, and a profile menu. It can be used in a "focused
state", where the logo & title are replaced with a back button and the global
actions are not displayed.

## Usage

### Basic Usage

```javascript
import React from 'react';
import Header, { HeaderContainer, HeaderTitle } from 'mineral-ui/Header';
import Avatar from 'mineral-ui/Avatar';
import Button from 'mineral-ui/Button';
import Dropdown from 'mineral-ui/Dropdown';
import Popover from 'mineral-ui/Popover';
import { PrimaryNav } from 'mineral-ui/Navigation';
import IconAppSwitcher from 'mineral-ui-icons/IconAppSwitcher';
import IconNotifications from 'mineral-ui-icons/IconNotifications';
import IconSearch from 'mineral-ui-icons/IconSearch';
import { Logo } from '../assets/logos';

export default () => (
  <Header>
    <HeaderTitle logo={Logo}>App Name</HeaderTitle>
    <PrimaryNav items={[...]} />
    <HeaderContainer>
      <Button iconStart={<IconSearch title="Search" />} />
      <Popover content={AppSwitcher}>
        <Button iconStart={<IconAppSwitcher title="Switch apps" />} />
      </Popover>
      <Popover content={Notifications}>
        <Button iconStart={<IconNotifications title="Notifications" />} />
      </Popover>
      <Popover content={Profile}>
        <Avatar>
          <img src="..." alt="First Last" />
        </Avatar>
      </Popover>
    </HeaderContainer>
  </Header>
);
```

### "Workspace" Usage

```javascript
import React from 'react';
import Header, {
  HeaderContainer,
  HeaderTitle,
  HeaderWorkspacePicker
} from 'mineral-ui/Header';
import PrimaryNav from 'mineral-ui/PrimaryNav';
import { Logo } from '../assets/logos';

export default () => (
  <Header>
    <HeaderTitle logo={Logo}>App Name</HeaderTitle>
    <HeaderWorkspacePicker data={[...]} selectedIndex={0} />
    <HeaderContainer>
      {/* Same as above */}
    </HeaderContainer>
  </Header>
);
```

### "Focused" Usage

```javascript
import React from 'react';
import Header, { HeaderBackButton, HeaderContainer } from 'mineral-ui/Header';
import { FormField } from 'mineral-ui/Forms';
import TextInput from 'mineral-ui/TextInput';
import IconArrowLeft from 'mineral-ui-icons/IconArrowLeft';
import IconSearch from 'mineral-ui-icons/IconSearch';

export default () => (
  <Header minimal>
    <HeaderBackButton icon={IconArrowLeft}>Done</HeaderBackButton>
    <FormField
      input={TextInput}
      label="Search"
      hideLabel
      placeholder="Search"
      iconStart={<IconSearch />}
    />
  </Header>
);
```

## Exports

- `Header` (default)
- `HeaderBackButton`
- `HeaderContainer`
- `HeaderTitle`
- `HeaderWorkspacePicker`

## API

### `Header` API

_Extends Flex_

| Prop     | Type       | Required | Default | Description                                         |
| -------- | ---------- | -------- | ------- | --------------------------------------------------- |
| children | React$Node | false    |         | Contents of Header                                  |
| minimal  | boolean    | false    |         | Display with a minimal appearance                   |
| ...rest  | any        | false    |         | All other props will be applied to the root element |

### `HeaderBackButton` API

| Prop     | Type              | Required | Default | Description                                         |
| -------- | ----------------- | -------- | ------- | --------------------------------------------------- |
| children | React$Node        | true     |         | Content of HeaderBackButton                         |
| icon     | React$Element<\*> | false    |         | Icon displayed before children                      |
| ...rest  | any               | false    |         | All other props will be applied to the root element |

### `HeaderContainer` API

_Extends `<FlexItem flex />`_

| Prop     | Type       | Required | Default | Description                                         |
| -------- | ---------- | -------- | ------- | --------------------------------------------------- |
| children | React$Node | false    |         | Content of HeaderContainer                          |
| ...rest  | any        | false    |         | All other props will be applied to the root element |

### `HeaderTitle` API

| Prop     | Type              | Required | Default | Description                                         |
| -------- | ----------------- | -------- | ------- | --------------------------------------------------- |
| children | React$Node        | true     |         | Content of HeaderTitle                              |
| logo     | React$Element<\*> | false    |         | Source of logo image                                |
| ...rest  | any               | false    |         | All other props will be applied to the root element |

### `HeaderWorkspacePicker` API

_Extends Select_

| Prop          | Type                    | Required | Default | Description                                         |
| ------------- | ----------------------- | -------- | ------- | --------------------------------------------------- |
| data          | MenuItems \| MenuGroups | true     |         | Available options                                   |
| selectedIndex | number                  | true     |         | Index of currently selected item                    |
| ...rest       | any                     | false    |         | All other props will be applied to the root element |

## Dependencies

Identify any internal and/or 3rd party dependencies

- Flex & FlexItem
- Select

## Accessibility

Identify a11y strategy, e.g. aria, role, keyboard controls, etc.

- Use `header` element at root
- Skip link (could be a separate component that is optionally included here?)
- `role="search"` on the Search input
- "auto focus" nature of Search input after clicking/tapping Search button
- Most other a11y provided by subcomponents (PrimaryNav, Dropdown, etc...)

## Design Specs

https://app.goabstract.com/projects/76e2fd80-497c-11e8-8391-09cb0158445d/branches/master/files/C37D814D-F435-4B4F-B70F-4E2705A9E538/pages/09DA49EC-5DF7-4EBE-8483-69DE0D1339E6

## Rough DOM Structure

```js
+--------------------------------------------------------------------------------------------------------------+
| Header                                                                                                       |
| +------------------+ +------------------------+ +----------------------------------------------------------+ |
| | HeaderTitle or   | | PrimaryNav,            | | HeaderContainer                                          | |
| | HeaderBackButton | | HeaderWorkspacePicker, | | +--------+ +-------------+ +---------------+ +---------+ | |
| |                  | | or something else      | | | Search | | AppSwitcher | | Notifications | | Profile | | |
| |                  | |                        | | +--------+ +-------------+ +---------------+ +---------+ | |
| +------------------+ +------------------------+ +----------------------------------------------------------+ |
+--------------------------------------------------------------------------------------------------------------+
```

## Other Considerations

- Using `children` seems like a decent way to avoid what would otherwise be an
  explosion of subcomponent-specific props
  - The contents of Header are order-dependent, so props like `start`, `center`,
    `end` may make more sense than `children`. Also consider a `slot` approach:
    `<Header><SomeComponent slot="start" /></Header>`.
- Rather than hold up release by developing Search, AppSwitcher, Notifications,
  and Profile first, HeaderContainer will simply apply the proper gutter and
  accept any children, thereby allowing consumers to use whatever they need.
  - Not sure where those components should live, though. More named exports,
    like HeaderSearch, HeaderAppSwitcher, etc...?
- HeaderWorkspacePicker may be more appropriate as just WorkSpacePicker
