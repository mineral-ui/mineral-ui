/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../library/styles';
import { ThemeProvider } from '../../../../library/themes';
import Button from '../../../../library/Button';
import _Card, { CardBlock, CardTitle } from '../../../../library/Card';
import Dropdown from '../../../../library/Dropdown';
import FormField from '../../../../library/Form/FormField';
import TextInput from '../../../../library/TextInput/';
import IconBatteryCharging50 from 'mineral-ui-icons/IconBatteryCharging50';
import IconQuestionAnswer from 'mineral-ui-icons/IconQuestionAnswer';
import IconDirectionsBoat from 'mineral-ui-icons/IconDirectionsBoat';
import IconSpa from 'mineral-ui-icons/IconSpa';
import IconShoppingCart from 'mineral-ui-icons/IconShoppingCart';
import _Link from '../../../../library/Link';
import Menu from '../../../../library/Menu';
import Markdown from '../../Markdown';
import Paragraph from '../../Paragraph';
import content from './gallery.md';

import type { ItemGroups } from '../../../../library/Menu/Menu';

type Props = {
  theme: { [string]: any }
};

const menuData: ItemGroups = [
  {
    title: 'Menu Title',
    items: [
      { id: 'item-1', text: 'Menu Item', iconEnd: <IconSpa /> },
      { id: 'item-2', text: 'Menu Item', variant: 'success' },
      {
        id: 'item-3',
        text: 'With icon',
        iconStart: <IconSpa />,
        variant: 'warning'
      },
      { id: 'item-4', text: 'Menu Item', variant: 'danger' }
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
    fill: theme.color_theme
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
              itemKey="id"
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
