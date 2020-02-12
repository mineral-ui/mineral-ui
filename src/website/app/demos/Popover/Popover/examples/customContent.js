/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import Button from '../../../../../../library/Button';
import Popover from '../../../../../../library/Popover';
import Popper from '../../../../../../library/Popover/RtlPopper';
import { componentStyleReset } from '../../../../../../library/styles';
import renderPropsDescription from '../../../common/renderPropsDescription';
import DemoContent from '../../common/DemoContent';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const _DemoLayout: StyledComponent<{ [key: string]: any }> = styled('div')({
  marginBottom: 140
});

const DemoLayout = (props: {}) => <_DemoLayout {...props} />;

export default {
  id: 'custom-content',
  title: 'Custom Content',
  description: `Use the \`content\` render prop to provide custom rendering
control of the content. ${renderPropsDescription}`,
  scope: {
    Button,
    componentStyleReset,
    styled,
    DemoContent,
    DemoLayout,
    Popover,
    Popper
  },
  source: `
    () => {
      const content = ({ props }) => {
        // Your root element must be a Popper component.
        // import { Popper } from 'react-popper';

        const Content = styled('div')(({ theme }) => ({
          ...componentStyleReset(theme),

          backgroundColor: theme.backgroundColor_dangerPrimary,
          color: theme.color_white,
          margin: theme.space_inset_sm,
          padding: theme.space_inset_lg,
          zIndex: theme.zIndex_100
        }));

        return (
          <Popper placement={props.placement}>
            {(popperProps) => {
              const contentProps = {
                ...props,
                ...popperProps
              };

              return (
                <Content {...contentProps} >
                  <DemoContent />
                </Content>
              );
            }}
          </Popper>
        );
      };

      return (
        <DemoLayout>
          <Popover content={content} isOpen placement="bottom-start">
            <Button>Open Popover</Button>
          </Popover>
        </DemoLayout>
      );
    }`
};
