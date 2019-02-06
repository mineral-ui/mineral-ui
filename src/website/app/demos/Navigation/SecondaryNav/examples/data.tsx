/* @flow */
import SecondaryNav from '../../common/SecondaryNav';

export default {
  id: 'data',
  title: 'Data-Driven',
  description: `Instead of \`children\`, you can define your \`items\` and use
the \`selectedIndex\` property to set which item is currently being viewed.`,
  scope: { SecondaryNav },
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

    return <SecondaryNav items={items} selectedIndex={1} />;
  }`
};
