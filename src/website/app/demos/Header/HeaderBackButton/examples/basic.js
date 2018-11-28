/* @flow */
import Header, { HeaderBackButton } from '../../../../../../library/Header';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `TODO`,
  scope: { Header, HeaderBackButton },
  source: `
    <Header minimal>
      <HeaderBackButton>Done</HeaderBackButton>
    </Header>
  `
};
