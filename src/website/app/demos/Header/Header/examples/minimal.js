/* @flow */
import Avatar from '../../../../../../library/Avatar';
import Button from '../../../../../../library/Button';
import Header, {
  HeaderContainer,
  HeaderTitle
} from '../../../../../../library/Header';
import IconApps from 'mineral-ui-icons/IconApps';
import IconNotifications from 'mineral-ui-icons/IconNotifications';
import IconSearch from 'mineral-ui-icons/IconSearch';
import IconSuccess from 'mineral-ui-icons/IconSuccess';
import PrimaryNav from '../../../Navigation/common/PrimaryNav';

const navItems = [
  {
    href: '/malachite',
    text: 'Malachite'
  },
  {
    href: '/fluorite',
    text: 'Fluorite'
  },
  {
    href: '/magnetite',
    text: 'Magnetite'
  }
];

export default {
  id: 'minimal',
  title: 'Minimal',
  description: `TODO`,
  scope: {
    Avatar,
    Button,
    Header,
    HeaderContainer,
    HeaderTitle,
    IconApps,
    IconNotifications,
    IconSearch,
    IconSuccess,
    PrimaryNav,
    navItems
  },
  source: `
    <Header minimal>
      <HeaderTitle logo={IconSuccess}>App Name is Long to Force Wrapping</HeaderTitle>
      <PrimaryNav items={navItems} />
      <HeaderContainer>
        <Button iconStart={<IconSearch title="Search"/>} />
        <Button iconStart={<IconApps title="App switcher"/>} />
        <Button iconStart={<IconNotifications title="Notifications"/>} />
        <Avatar>
          <img src="http://fillmurray.com/80/80" alt="First Last" />
        </Avatar>
      </HeaderContainer>
    </Header>
  `
};
