/* @flow */
import Header, { HeaderTitle } from '../../../../../../library/Header';
import IconSuccess from '../../../../../../library/Icon/IconSuccess';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `TODO`,
  scope: { Header, HeaderTitle, IconSuccess },
  source: `
    <Header>
      <HeaderTitle logo={IconSuccess}>App Name</HeaderTitle>
    </Header>
  `
};
