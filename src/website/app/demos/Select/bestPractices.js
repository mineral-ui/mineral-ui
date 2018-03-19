/* @flow */
import React from 'react';
import Box from '../../../../library/Box';
import Flex, { FlexItem } from '../../../../library/Flex';
import Select from '../../../../library/Select';
import TextInput from '../../../../library/TextInput/';
import { FormField } from '../../../../library/Form';
import {
  basicData,
  currencyData,
  foodData,
  mineralData,
  sizeData,
  wrappingData
} from './components/selectData';

export default [
  {
    type: 'dont',
    description: `Don't rely on placeholder text alone to communicate purpose as
it will disappear once a value is selected. You can easily add a label to Select
using a [FormField](/components/form-field).`,
    example: (
      <Select data={foodData} placeholder="Choose your favorite food..." />
    )
  },
  {
    type: 'do',
    description: `List options in alphabetical or other logical order so that
users can easily identify the pattern and find what they're looking for.`,
    example: (
      <div>
        <Box marginBottom="md">
          <FormField
            data={mineralData}
            input={Select}
            label="Mineral"
            placeholder="Choose your favorite mineral..."
          />
        </Box>
        <Box>
          <FormField
            data={sizeData}
            input={Select}
            label="Size"
            placeholder="Choose your size..."
          />
        </Box>
      </div>
    )
  },
  {
    type: 'do',
    description: `Consider whether a default selection is appropriate
for your users use case. If there's not a logical default, use placeholder
text to prompt the user to make a choice.`,
    example: (
      <Flex>
        <FlexItem grow={1}>
          <FormField input={TextInput} label="Your Bid" type="number" />
        </FlexItem>
        <FlexItem grow={0}>
          <FormField
            data={currencyData}
            defaultSelectedItem={currencyData[0]}
            input={Select}
            label="Currency"
          />
        </FlexItem>
      </Flex>
    )
  },
  {
    type: 'dont',
    description: `Don't use the \`onSelect\` or \`onChange\` handlers to
initiate actions when an option is selected. Users often change their choices
multiple times when interacting with Select. Offer a "submit" [Button](/components/button)
at the end of the form instead.`,
    example: (
      <div>
        <Select
          data={basicData}
          onSelect={({ text }) => {
            typeof text === 'string' && alert(`You chose "${text}!"`);
          }}
        />
      </div>
    )
  },
  {
    type: 'dont',
    description: `Don't use long option text. While Select will wrap long text,
options of differing size can cause confusion for users.`,
    example: (
      <FormField data={wrappingData} input={Select} label="Minerologist" />
    )
  }
];
