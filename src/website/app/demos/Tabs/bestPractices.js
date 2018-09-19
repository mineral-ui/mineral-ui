/* @flow */
import React from 'react';
import IconBlurOn from 'mineral-ui-icons/IconBlurOn';
import Tabs, { Tab } from '../../../../library/Tabs';
import Text from '../../../../library/Text';
import content from './shared/content';

export default [
  {
    type: 'do',
    description: `Apply a \`height\` to Tabs if \`position="bottom"\` and
content is long. Otherwise tabs, and therefore the context for their content,
may be unviewable when a user scrolls to the content.`,
    example: (
      <Tabs label="Minerals" position="bottom" height="9em">
        <Tab title="Malachite">
          <Text>{content.malachite}</Text>
        </Tab>
        <Tab title="Fluorite">
          <Text>{content.fluorite}</Text>
        </Tab>
        <Tab title="Magnetite">
          <Text>{content.magnetite}</Text>
        </Tab>
      </Tabs>
    )
  },
  {
    type: 'dont',
    description: `Refrain from passing long [Tab](/components/tab) \`title\`s.
  Use clear and concise descriptions limited to one word when possible. Use
  "Title Case" in all other circumstances.`,
    example: (
      <Tabs label="Minerals" height="9em">
        <Tab title="Malachite Stalactites are Neat">
          <Text>{content.malachite}</Text>
        </Tab>
        <Tab title="Fluorite">
          <Text>{content.fluorite}</Text>
        </Tab>
        <Tab title="Magnetite">
          <Text>{content.magnetite}</Text>
        </Tab>
      </Tabs>
    )
  },
  {
    type: 'dont',
    description: `Don't mix content types for [Tab](/components/tab) \`title\`s.
  Be consistent with icon usage; either all or no Tabs should contain an icon.`,
    example: (
      <Tabs label="Minerals" height="9em">
        <Tab title="Malachite">
          <Text>{content.malachite}</Text>
        </Tab>
        <Tab title="Fluorite" icon={<IconBlurOn />}>
          <Text>{content.fluorite}</Text>
        </Tab>
        <Tab title="Magnetite">
          <Text>{content.magnetite}</Text>
        </Tab>
      </Tabs>
    )
  },
  {
    type: 'dont',
    description: `Don't use Tabs for navigation.`,
    example: (
      <Tabs label="Navigation">
        <Tab title="Home">
          <Text>Home Page</Text>
        </Tab>
        <Tab title="Mineral Info">
          <Text>Mineral Page</Text>
        </Tab>
        <Tab title="Maps">
          <Text>Maps Page</Text>
        </Tab>
      </Tabs>
    )
  },
  {
    type: 'dont',
    description: `Don't use Tabs when there is only one [Tab](/components/tab).`,
    example: (
      <Tabs label="Minerals">
        <Tab title="Malachite">
          <Text>{content.malachite}</Text>
        </Tab>
      </Tabs>
    )
  },
  {
    type: 'dont',
    description: `Avoid nesting Tabs, as the lack of obvious hierarchy is
confusing to users.`,
    example: (
      <Tabs label="Minerals" height="10em">
        <Tab title="Malachite">
          <Text>Malachite Info</Text>
          <Tabs label="Minerals">
            <Tab title="Fluorite">
              <Text>Fluorite Info</Text>
            </Tab>
            <Tab title="Azurite">
              <Text>Azurite Info</Text>
            </Tab>
            <Tab title="Quartz">
              <Text>Quartz Info</Text>
            </Tab>
          </Tabs>
        </Tab>
        <Tab title="Magnetite">
          <Text>{content.magnetite}</Text>
        </Tab>
      </Tabs>
    )
  }
];
