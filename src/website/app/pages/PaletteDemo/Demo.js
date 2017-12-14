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
import React from 'react';
import { createStyledComponent } from '../../../../styles';
import { ThemeProvider } from '../../../../themes';
import Button from '../../../../Button';
import _Card, { CardBlock, CardTitle } from '../../../../Card';
import Dropdown from '../../../../Dropdown';
import FormField from '../../../../Form/FormField';
import TextInput from '../../../../TextInput';
import IconBatteryCharging50 from 'mineral-ui-icons/IconBatteryCharging50';
import IconQuestionAnswer from 'mineral-ui-icons/IconQuestionAnswer';
import IconDirectionsBoat from 'mineral-ui-icons/IconDirectionsBoat';
import IconSpa from 'mineral-ui-icons/IconSpa';
import IconShoppingCart from 'mineral-ui-icons/IconShoppingCart';
import _Link from '../../../../Link';
import Menu from '../../../../Menu';
import Markdown from '../../Markdown';
import Paragraph from '../../Paragraph';
import content from './gallery.md';

type Props = {
  theme: { [string]: any }
};

const menuData = [
  {
    title: 'Menu Title',
    items: [
      { text: 'Menu Item', iconEnd: <IconSpa /> },
      { text: 'Menu Item', variant: 'success' },
      { text: 'With icon', iconStart: <IconSpa />, variant: 'warning' },
      { text: 'Menu Item', variant: 'danger' }
    ]
  }
];

const styles = {
  card: ({ theme }) => ({
    margin: `${theme.space_stack_xxl} 0`
  }),
  cardHolder: ({ theme }) => ({
    padding: `0 ${theme.space_inset_sm}`
  }),
  dropdownContainer: ({ theme }) => ({
    marginBottom: `${parseFloat(theme.space_stack_sm) * 32}em`
  }),
  icon: ({ theme }) => ({
    fill: theme.color_text_primary
  }),
  menuContainer: ({ theme }) => ({
    backgroundColor: theme.color_gray_50,
    padding: theme.space_inset_lg,
    margin: `${theme.space_stack_xxl} 0`,
    maxWidth: '15rem',
    '& > div': {
      backgroundColor: 'white'
    }
  }),
  paragraph: ({ theme }) => ({
    margin: `${theme.space_stack_xxl} 0`
  }),
  root: ({ theme }) => ({
    position: 'relative',
    '& button': {
      marginRight: theme.space_inline_md,
      marginBottom: theme.space_stack_md
    },
    '& h2 + p': {
      marginBottom: theme.space_stack_xxl
    }
  })
};

const Root = createStyledComponent('div', styles.root);
const Card = createStyledComponent(_Card, styles.card);
const CardHolder = createStyledComponent('div', styles.cardHolder);
const DropdownContainer = createStyledComponent(
  'div',
  styles.dropdownContainer
);
const Icon1 = createStyledComponent(IconBatteryCharging50, styles.icon);
const Icon2 = createStyledComponent(IconQuestionAnswer, styles.icon);
const Icon3 = createStyledComponent(IconDirectionsBoat, styles.icon);
const InlineText = createStyledComponent(Paragraph, styles.paragraph);
const MenuContainer = createStyledComponent('div', styles.menuContainer);

const Link = (props: {}) => <_Link target="_blank" {...props} />;

export default function Demo({ theme }: Props) {
  return (
    <Root>
      <ThemeProvider theme={theme}>
        <div>
          <Markdown>{content}</Markdown>
          <Button primary>Primary Button</Button>
          <Button>Regular Button</Button>
          <Button minimal>Minimal Button</Button>
          <FormField input={TextInput} label="TextInput" />
          <CardHolder>
            <Card>
              <CardTitle subtitle="Card Subtitle here">Card Title</CardTitle>
              <CardBlock>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa.{' '}
                <Link href="https://example.com">Aliquam</Link> erat volutpat.
                Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc
                lacinia auctor quam sed pellentesque.
              </CardBlock>
            </Card>
          </CardHolder>
          <Button iconEnd={<IconSpa />}>Button With Icon</Button>
          <Button size="jumbo" circular iconStart={<IconBatteryCharging50 />} />
          <Button size="jumbo" iconStart={<IconShoppingCart />} />
          <InlineText variant="prose">
            A link to <Link href="https://example.com">example.com</Link>.
          </InlineText>
          <DropdownContainer>
            <Dropdown
              data={menuData}
              isOpen
              modifiers={{ flip: { enabled: false } }}>
              <Button>Always Open Dropdown</Button>
            </Dropdown>
          </DropdownContainer>
          <Icon2 size="5em" />
          <Icon1 size="5em" />
          <Icon3 size="5em" />
          <MenuContainer>
            <Menu data={menuData} />
          </MenuContainer>
        </div>
      </ThemeProvider>
    </Root>
  );
}
