/* @flow */

import { createStyledComponent } from '../../../../../library/styles';
import Button from '../../../../../library/Button';
import Popover from '../../../../../library/Popover';
import Popper from '../../../../../library/Popover/RtlPopper';
import DemoContent from '../components/DemoContent';
import renderPropDescription from '../../shared/renderPropDescription';

export default {
  id: 'custom-content',
  title: 'Custom Content',
  description: `Use the \`content\`
[render prop](https://reactjs.org/docs/render-props.html) to provide custom
rendering control of the content.

${renderPropDescription}`,
  scope: {
    Button,
    createStyledComponent,
    DemoContent,
    Popover,
    Popper
  },
  source: `
    () => {
      const content = ({ props }) => {
        // Your root element must be a Popper component.
        // import { Popper } from 'react-popper';
        const Root = createStyledComponent(Popper, ({ theme }) => ({
          backgroundColor: theme.backgroundColor_dangerPrimary,
          color: theme.color_white,
          margin: theme.space_inset_sm,
          padding: theme.space_inset_lg,
          zIndex: theme.zIndex_100
        }), {
          includeStyleReset: true,
          filterProps: ['hasArrow']
        });

        return (
          <Root {...props}>
            <DemoContent />
          </Root>
        );
      };

      return (
        <Popover content={content}>
          <Button>Open Popover</Button>
        </Popover>
      );
    }`
};
