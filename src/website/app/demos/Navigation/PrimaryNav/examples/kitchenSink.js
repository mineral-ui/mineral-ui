/* @flow */
import DemoLayout from '../../../common/DemoLayout';
import PrimaryNav from '../../common/PrimaryNav';
import SecondaryNav from '../../common/SecondaryNav';

export default {
  id: 'kitchen-sink',
  title: 'Kitchen Sink',
  hideFromProd: true,
  scope: { DemoLayout, PrimaryNav, SecondaryNav },
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
        disabled: true,
        href: '/magnetite',
        text: 'Magnetite'
      }
    ];

    return (
      <DemoLayout>
        <PrimaryNav items={items} selectedIndex={1} />
        <PrimaryNav minimal items={items} selectedIndex={1} />
        <SecondaryNav items={items} selectedIndex={1} />
        <SecondaryNav type="tabs" items={items} selectedIndex={1} />
      </DemoLayout>
    );
  }`
};
