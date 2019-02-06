/* @flow */
import PrimaryNav from '../../common/PrimaryNav';

export default {
  id: 'data',
  title: 'Data-Driven',
  description: `Instead of \`children\`, you can define your \`items\` and use
the \`selectedIndex\` property to set which item is currently being viewed.`,
  scope: { PrimaryNav },
  source: `() => {
    const items = [
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

    return <PrimaryNav items={items} selectedIndex={1} />;
  }`
};
