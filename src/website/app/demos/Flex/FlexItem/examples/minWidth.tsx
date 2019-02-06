/* @flow */
import Button from '../../../../../../library/Button';
import Select from '../../../../../../library/Select';
import Flex, { FlexItem } from '../../../../../../library/Flex';

const data = [
  {
    text:
      'This example item has some super long text as well, just to make sure this example is still illustrative when it is selected.'
  }
];

export default {
  id: 'min-width',
  title: 'Min Width',
  description: `Truncated content inside FlexItem will not truncate as expected,
because flex items have a
[default minWidth of \`auto\`](https://www.w3.org/TR/css-flexbox-1/#min-size-auto).
You can enable truncation by setting \`minWidth\` to 0 on the wrapping FlexItem
([why does this work?](https://css-tricks.com/flexbox-truncated-text/)).`,
  scope: { Button, data, Flex, FlexItem, Select },
  source: `
    <Flex>
      <FlexItem><Button>Short Text</Button></FlexItem>
      <FlexItem><Button>Short Text</Button></FlexItem>
      <FlexItem minWidth={0}>
        <Select placeholder="Super long example of text that is specifically formed to force truncation, when minWidth is set to 0, even when the viewport is rather wide" data={data} />
      </FlexItem>
    </Flex>`
};
