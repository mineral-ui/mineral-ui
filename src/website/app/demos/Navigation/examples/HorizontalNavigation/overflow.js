/* @flow */
import HorizontalNavigation, {
  NavLink
} from '../../../../../../library/Navigation';
import DemoLayout from '../../../shared/DemoLayout';

const oneThruTwenty = [...Array(21).keys()];
oneThruTwenty.shift();

const title = (index: number) => {
  if (index % 3 === 0) {
    return 'Magnetite';
  } else if (index % 2 === 0) {
    return 'Fluorite';
  } else {
    return 'Malachite';
  }
};

export default {
  id: 'overflow',
  title: 'Overflow',
  description: `If the list of [HorizontalNavigation](/components/tab) cannot fit in the space
available, it will automatically be displayed in a scrollable area with
next/previous arrow buttons to navigate.`,
  scope: {
    DemoLayout,
    oneThruTwenty,
    HorizontalNavigation,
    NavLink,
    title
  },
  source: `() => {
    const navLinks = oneThruTwenty.map((number) =>
      <NavLink title={title(number)} key={number} />);

    return (
      <HorizontalNavigation label="Minerals">
        {navLinks}
      </HorizontalNavigation>
    );
  }

  `
};
