/* @flow */
type Page = {
  component: string,
  description: string,
  id?: string,
  path: string,
  hiddenInNav?: boolean,
  title: string
};

type Pages = Array<Page>;

type Section = {
  heading: string,
  pages: Pages
};

const sections: Array<Section> = [
  {
    heading: 'What’s New',
    pages: [
      {
        component: 'ComponentStatus',
        description:
          'Check back here anytime to see current component status information for Mineral UI. Check our GitHub for issues or to suggest a new feature!',
        path: '/component-status',
        title: 'Component Status'
      },
      {
        component: 'Roadmap',
        description:
          'Mineral UI is committed to stable and predictable releases. Learn more about our plans for the future.',
        path: '/roadmap',
        title: 'Roadmap'
      }
    ]
  },
  {
    heading: 'Design',
    pages: [
      {
        component: 'Color',
        description:
          'Make your apps beautiful and accessibile with Mineral UI color palettes and themes.',
        path: '/color',
        title: 'Color'
      },
      {
        component: 'Tokens',
        description:
          'Tokens act as the source of truth for atomic design attributes.',
        path: '/tokens',
        title: 'Tokens'
      },
      {
        component: 'Typography',
        description:
          'Mineral UI provides a simple set of typographic elements to easily apply structure to your interface.',
        path: '/typography',
        title: 'Typography'
      }
    ]
  },
  {
    heading: 'Guides',
    pages: [
      {
        component: 'GettingStarted',
        description:
          'Mineral UI’s React component library helps you quickly build elegantly accessible apps. Use npm or yarn to install components and themes tested across modern browsers.',
        path: '/getting-started',
        title: 'Getting Started'
      },
      {
        component: 'Theming',
        description:
          'Theming is a core concept in Mineral UI. Mineral UI makes it simple to implement and maintain theming across your app.',
        path: '/theming',
        title: 'Theming'
      },
      {
        component: 'Styling',
        description:
          'Mineral UI is built on a design system with styles ready to go out of the box. Learn the techniques for customizing styles in your application.',
        path: '/styling',
        title: 'Styling'
      },
      {
        component: 'ImportSyntax',
        description: 'Import syntax guide',
        path: '/import-syntax',
        title: 'Import Syntax'
      },
      {
        component: 'RenderProps',
        description:
          'Render props allow for deep customization of select Mineral components.',
        path: '/render-props',
        title: 'Render Props'
      }
    ]
  }
];

export default sections;
