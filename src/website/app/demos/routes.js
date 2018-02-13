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
export default [
  {
    description:
      'Avatar provides a graphic representation of an identity. It can display an image, text, or an icon.',
    slug: 'avatar',
    title: 'Avatar'
  },
  {
    description:
      'Buttons trigger actions or state changes in your app. Choose a button color to match the intent of the action.',
    slug: 'button',
    title: 'Button'
  },
  [
    {
      description:
        'Cards group related elements and actions. Use a Card to display content that doesn’t fit neatly into a table row or grid cell.',
      slug: 'card',
      title: 'Card'
    },
    {
      description:
        'CardActions lays out actions like Buttons or Links in the body of the Card.',
      slug: 'card-actions',
      title: 'CardActions'
    },
    {
      description:
        'CardBlock lays out content that’s not a title or an image in the body of the Card.',
      slug: 'card-block',
      title: 'CardBlock'
    },
    {
      description:
        'CardDivider visually seperates sections of content in Card.',
      slug: 'card-divider',
      title: 'CardDivider'
    },
    {
      description: 'CardFooter provides a stateful extension to Card.',
      slug: 'card-footer',
      title: 'CardFooter'
    },
    {
      description:
        'CardImages reinforce the intent of the Card. Images shouldn’t be used alone in a Card, but should be paired with a call to action and/or a CardTitle.',
      slug: 'card-image',
      title: 'CardImage'
    },
    {
      description:
        "CardStatus provides a standard way of displaying a Card's current status.",
      slug: 'card-status',
      title: 'CardStatus'
    },
    {
      description:
        'CardTitles provide a consistently styled heading for your Card. Use a subtitle to provide supporting information for the data displayed in the Card.',
      slug: 'card-title',
      title: 'CardTitle'
    }
  ],
  [
    {
      description:
        'Checkboxes allows users to select one or more options from a list. Use Checkboxes to accept multiple choice input from a user.',
      slug: 'checkbox',
      title: 'Checkbox'
    },
    {
      description:
        'CheckboxGroup allows users to construct a group of Checkboxes and provides a simpler API than working with Checkbox directly',
      slug: 'checkbox-group',
      title: 'CheckboxGroup'
    }
  ],
  {
    description:
      'Dropdowns display a hidden Menu, available upon user interaction. Use Dropdowns for non-primary actions only.',
    slug: 'dropdown',
    title: 'Dropdown'
  },
  [
    {
      description:
        'FormFields wrap an input with a label and other features.  Wrap each input in your app with a FormField for appropriate accessibilty and styling.',
      slug: 'form-field',
      title: 'FormField'
    },
    {
      description:
        'FormFieldsets wrap related FormFields and provide a legend.  Wrap related FormFields in a FormFieldset with a useful legend to help communicate relationships.',
      slug: 'form-fieldset',
      title: 'FormFieldset'
    },
    {
      description:
        'FormFieldDividers separate FormFields.  FormFieldDividers are best used to call attention to a subtle difference between fields.',
      slug: 'form-field-divider',
      title: 'FormFieldDivider'
    }
  ],
  {
    description:
      'Icons symbolize actions and objects in your interface. Use icons in combination with labels to help users more quickly process your UI.',
    slug: 'icon',
    title: 'Icon'
  },
  {
    description:
      'Links change the users’ browser location, and clearly express the intended destination.',
    slug: 'link',
    title: 'Link'
  },
  [
    {
      description:
        'Menus group related actions or links for your user. Use Menus to toggle features or to group navigation options.',
      slug: 'menu',
      title: 'Menu'
    },
    {
      description:
        'MenuDividers visually separate MenuGroups or individual MenuItems to increase usability in your Menu.',
      slug: 'menu-divider',
      title: 'MenuDivider'
    },
    {
      description: 'MenuGroups classify similar actions and provide labels.',
      slug: 'menu-group',
      title: 'MenuGroup'
    },
    {
      description:
        'MenuItems represent an option in a Menu. Use MenuItems to trigger actions or navigate to a new location.',
      slug: 'menu-item',
      title: 'MenuItem'
    }
  ],
  {
    description:
      'Popovers display supporting content when your user interacts with an associated trigger. Use Popovers to implement other custom behaviors or widgets.',
    slug: 'popover',
    title: 'Popover'
  },
  [
    {
      description:
        'Radios allows users to select a single option from a list. Use Radios to accept limited choice input from a user.',
      slug: 'radio',
      title: 'Radio'
    },
    {
      description:
        'RadioGroup allows users to construct a group of Radios and provides a simpler API than working with Radio directly',
      slug: 'radio-group',
      title: 'RadioGroup'
    }
  ],
  {
    description:
      'TextAreas accept data from the user.  Use a TextArea to accept potentially lengthy, free-form input from a user',
    slug: 'text-area',
    title: 'TextArea'
  },
  {
    description:
      'TextInputs accept data from the user.  Use a TextInput to accept brief, free-form input from a user',
    slug: 'text-input',
    title: 'TextInput'
  },
  {
    description:
      'ThemeProvider applies styles to a section of your app. Nesting enables multiple themes.',
    slug: 'theme-provider',
    title: 'ThemeProvider'
  },
  {
    description:
      'Tooltips display supporting content when your user interacts with an associated trigger. Use Tooltips to implement other custom behaviors or widgets.',
    slug: 'tooltip',
    title: 'Tooltip'
  }
];
