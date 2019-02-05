/* @flow */
import Dropdown from '../../../../../../library/Dropdown';
import { NavItem } from '../../../../../../library/Navigation';
import DemoLayout from '../../../common/DemoLayout';
import PrimaryNav from '../../common/PrimaryNav';

export default {
  id: 'overflow',
  title: 'Overflow',
  description: `If there is not sufficient space to display all navigation
items, e.g. when a media query dictates a narrow width, they can be overflowed
into a [Dropdown](/components/dropdown) menu with the \`overflowAtIndex\`
property.`,
  scope: { DemoLayout, Dropdown, NavItem, PrimaryNav },
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
      },
      {
        href: '/aragonite',
        text: 'Aragonite'
      }
    ];

    const onChange = (selectedIndex, event) => {
      event.preventDefault();
      console.log(selectedIndex + ' clicked')
    }

    return (
      <DemoLayout style={{ width: '23em' }}>
        <PrimaryNav overflowAtIndex={2}>
          {items.map((item) => {
            return <NavItem key={item.href} {...item}>{item.text}</NavItem>
          })}
        </PrimaryNav>

        <PrimaryNav items={items} overflowAtIndex={2} onChange={onChange} />
      </DemoLayout>
    );
  }`
};
