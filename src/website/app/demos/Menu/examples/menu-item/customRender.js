/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm,
  mineralTheme
} from '../../../../../../utils';
import Menu, { MenuItem } from '../../../../../../Menu';
import DemoLayout from '../../components/DemoLayout';

export default {
  id: 'custom-render',
  title: 'Custom Rendering',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `MenuItem can use a custom function for its rendering. This
allows you to render any item data you might need (like an avatar, below). To
help match the other MenuItems, you have access to its
[theme variables](#theme-variables). The \`CustomRender\` component source below
might be a helpful template. Some things to keep in mind:

1. Remember to include \`:focus\`, \`:hover\`, and \`:active\` styles.
  1. If this is to be used for a [Dropdown](./dropdown), also apply your
     focus/hover styles when \`props.isHighlighted === true\`.
1. Remember to accommodate the disabled state (\`props.disabled === true\`).
1. If your app supports RTL languages, you can use \`theme.direction\` to
   conditionally apply the necessary styles.`,
  scope: {
    createStyledComponent,
    DemoLayout,
    getNormalizedValue,
    Menu,
    MenuItem,
    pxToEm
  },
  source: `
    () => {
      function CustomRender(item, props, theme) {
        const { isHighlighted, disabled } = props;

        const Root = createStyledComponent(
          'div',
          {
            backgroundColor: isHighlighted && theme.color_theme_20,
            display: 'flex',
            padding: theme.MenuItem_padding,
            textDecoration: 'none',

            '&:focus': {
              backgroundColor: !disabled && theme.color_theme_20,
              outline: 0
            },

            '&:hover': {
              backgroundColor: !disabled && theme.color_theme_20
            },

            '&:active': {
              backgroundColor: !disabled && theme.color_theme_40
            }
          },
          {
            includeStyleReset: true
          }
        );
        const Actor = createStyledComponent('span', {
          color: theme.color_text_caption,
          display: 'block',
          fontSize: theme.fontSize_mouse,
          marginTop: theme.spacing_half
        });
        const Avatar = createStyledComponent('img', {
          borderRadius: pxToEm(18),
          display: 'block',
          flex: '0 0 auto',
          height: pxToEm(36),
          marginLeft: theme.direction === 'rtl' && theme.spacing_single,
          marginRight: theme.direction === 'ltr' && theme.spacing_single,
          padding: theme.MenuItemIcon_padding,
          width: pxToEm(36)
        });
        const Content = createStyledComponent('span', function() {
          const fontSize = theme.MenuItemContent_fontSize;
          const paddingHorizontal = getNormalizedValue(
            theme.MenuItemContent_padding,
            fontSize
          );

          return {
            flex: '1 1 auto',
            fontSize,
            padding: '0 ' + paddingHorizontal,
            whiteSpace: 'normal',
            wordBreak: 'break-all'
          };
        });

        const rootProps = {
          disabled,
          ...props
        };

        return (
          <Root {...rootProps}>
            {item.avatar && <Avatar alt={'Photo of ' + item.character} src={item.avatar} />}
            <Content>
              {item.character}
              {item.actor && <Actor>{item.actor}</Actor>}
            </Content>
          </Root>
        );
      }

      const data = [
        {
          items: [
            {
              actor: 'Bill Murray',
              avatar: 'http://www.fillmurray.com/102/100',
              character: 'Captain Steve Zissou',
              render: CustomRender
            },
            {
              actor: 'Bill Murray',
              avatar: 'http://www.fillmurray.com/101/100',
              character: 'Dr. Peter Venkman',
              render: CustomRender
            },
            {
              actor: 'Bill Murray',
              avatar: 'http://www.fillmurray.com/100/100',
              character: 'Bob Harris',
              render: CustomRender
            }
          ]
        }
      ];

      return (
        <DemoLayout>
          <Menu data={data} />
        </DemoLayout>
      )
    }`
};
