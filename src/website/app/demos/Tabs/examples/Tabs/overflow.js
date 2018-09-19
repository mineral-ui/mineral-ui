/* @flow */
import { CardDivider } from '../../../../../../library/Card';
import Tabs, { Tab } from '../../../../../../library/Tabs';
import Text from '../../../../../../library/Text';
import _content from '../../shared/content';
import DemoLayout from '../../../shared/DemoLayout';

const content = (index: number) => {
  if (index % 3 === 0) {
    return _content.magnetite;
  } else if (index % 2 === 0) {
    return _content.fluorite;
  } else {
    return _content.malachite;
  }
};

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
  description: `If the list of [Tabs](/components/tab) cannot fit in the space
available, it will automatically be displayed in a scrollable area with
next/previous arrow buttons to navigate.

Note that for vertically-oriented Tabs (those with a position of \`'start'\` or
\`'end'\`) to use this behavior, you must provide a \`height\`.`,
  scope: {
    CardDivider,
    content,
    DemoLayout,
    oneThruTwenty,
    Tabs,
    Tab,
    Text,
    title
  },
  source: `() => {
    const tabPanels = oneThruTwenty.map((number) => (
        <Tab title={title(number)} key={number}>
          <Text>{content(number)}</Text>
        </Tab>
      )
    );
    return (
      <DemoLayout>
        <Tabs label="Minerals" height="7.75em">{tabPanels}</Tabs>
        <CardDivider />
        <Tabs height="13em" position="start" label="Minerals">{tabPanels}</Tabs>
      </DemoLayout>
    )
  }

  `
};
