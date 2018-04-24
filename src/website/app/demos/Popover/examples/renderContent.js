/* @flow */

import { createStyledComponent } from '../../../../../library/styles';
import Button from '../../../../../library/Button';
import Popover from '../../../../../library/Popover';
import Popper from '../../../../../library/Popover/RtlPopper';
import DemoContent from '../components/DemoContent';

export default {
  id: 'render-content',
  title: 'Custom Rendering - renderContent',
  description: `Use the \`renderContent\`
[render prop](https://reactjs.org/docs/render-props.html) to provide custom
rendering control of the content.

_Prior to reaching for this functionality, please consider whether the
desired outcome could be achieved using a simpler means, such as with
Mineral's robust [styling](/styling) and/or [theming](/theming) capabilities._`,
  scope: {
    Button,
    createStyledComponent,
    DemoContent,
    Popover,
    Popper
  },
  source: `
    () => {
      const renderContent = ({ contentProps }) => {
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
          <Root {...contentProps}>
            <DemoContent />
          </Root>
        );
      };

      return (
        <Popover renderContent={renderContent}>
          <Button>Open Popover</Button>
        </Popover>
      );
    }`
};
