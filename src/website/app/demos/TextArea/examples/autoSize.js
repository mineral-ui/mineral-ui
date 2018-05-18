/* @flow */
import TextArea from '../../../../../library/TextArea';
import DemoLayout from '../../shared/DemoLayout';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare velit nec dui molestie posuere. Nulla facilisi. Nulla tempor turpis vel aliquam viverra. In eu sagittis elit. Integer scelerisque purus nulla, sit amet dictum ipsum elementum finibus. Suspendisse et erat nisl. Sed aliquet finibus odio, ut volutpat metus dictum sed. Nullam nunc mi, consequat sit amet magna ut, faucibus placerat tortor. Duis porttitor tellus vitae condimentum convallis. Fusce hendrerit, nunc vitae tempor tempor, urna dolor fringilla eros, non condimentum urna dui id tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque tempor metus eget ipsum volutpat, venenatis imperdiet lacus commodo. Morbi quis dictum urna, vel facilisis magna. Phasellus nec vehicula lectus. Nulla laoreet nisi nec varius rhoncus. Integer at risus blandit, commodo urna sed, viverra dui.

Duis vitae nisl dignissim, congue elit et, ornare dolor. Pellentesque eu dui pellentesque, vestibulum odio sit amet, vehicula ante. Curabitur et turpis velit. Pellentesque in tincidunt nulla. Aenean malesuada ornare condimentum. Vivamus maximus efficitur sem, non consectetur arcu pretium in. Integer sodales quis quam nec iaculis. Donec accumsan tortor et magna tristique euismod. Nullam pellentesque, ligula nec condimentum rhoncus, arcu dui mollis lectus, ac porttitor purus nisi sed lacus.`;

export default {
  id: 'autosize',
  title: 'Auto Size',
  description: `Use the \`autoSize\` prop to automatically adjust the height of
the input to fit the content.  Note that you can also use this prop in
conjunction with the \`rows\` and \`size\` props.`,
  scope: { DemoLayout, loremIpsum, TextArea },
  source: `
    <DemoLayout>
      <TextArea spellCheck={false} defaultValue={loremIpsum} autoSize />
      <TextArea rows={1} defaultValue="Hello World" autoSize />
      <TextArea rows={1} size="small" defaultValue="Hello World" autoSize />
    </DemoLayout>
  `
};
