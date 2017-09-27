import React from 'react';
import { findDOMNode } from 'react-dom';
import { createStyledComponent } from '../../../../utils';
import Button from '../../../../Button';
import Heading from '../../Heading';
import Popover from '../../../../Popover';

const styles = {
  badContentLayout: {
    maxWidth: '25em',
    maxHeight: '30em',
    overflowY: 'scroll'
  },
  badDemo: {
    width: '50em'
  },
  demoLayout: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  goodDemo: { width: '15em' },
  p: ({ theme }) => ({
    marginBottom: 0,
    marginTop: theme.spacing_single
  })
};

const BadContentLayout = createStyledComponent('div', styles.badContentLayout);
const GoodDemo = createStyledComponent('div', styles.goodDemo);
const DemoLayout = createStyledComponent('div', styles.demoLayout);
const P = createStyledComponent('p', styles.p);

class PopOverDo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    this.togglePopover = this.togglePopover.bind(this);
  }

  onOpen() {
    this.setState({ isOpen: true });
  }

  onClose(event) {
    // Prevent extra call to togglePopover when clicking the controlling button.
    // Also avoid interactions with other popovers.
    // eslint-disable-next-line
    const demoLayoutNode = findDOMNode(this.demoLayout);
    if (
      !event.nativeEvent &&
      demoLayoutNode &&
      demoLayoutNode.contains(event.target)
    ) {
      event.stopImmediatePropagation();
    }

    this.setState({ isOpen: false });
  }

  togglePopover(event) {
    if (this.state.isOpen) {
      this.onClose(event);
    } else {
      this.onOpen(event);
    }
  }

  render() {
    const DemoContent = (
      <GoodDemo>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
          interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        </p>
      </GoodDemo>
    );
    return (
      <DemoLayout
        ref={node => {
          this.demoLayout = node;
        }}>
        <Button primary onClick={this.togglePopover}>
          Learn more
        </Button>
        <Popover
          onOpen={this.onOpen}
          onClose={this.onClose}
          restoreFocus={false}
          isOpen={this.state.isOpen}
          content={DemoContent}>
          <P>Mineral UI</P>
        </Popover>
      </DemoLayout>
    );
  }
}

const BadContent = (
  <BadContentLayout>
    <Heading level={2}>
      The standard Lorem Ipsum passage, used since the 1500s
    </Heading>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <Heading level={2}>
      Section 1.10.32 of “de Finibus Bonorum et Malorum”, written by Cicero in
      45 BC
    </Heading>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
    <Heading level={2}>1914 translation by H. Rackham</Heading>
    <p>
      “But I must explain to you how all this mistaken idea of denouncing
      pleasure and praising pain was born and I will give you a complete account
      of the system, and expound the actual teachings of the great explorer of
      the truth, the master-builder of human happiness. No one rejects,
      dislikes, or avoids pleasure itself, because it is pleasure, but because
      those who do not know how to pursue pleasure rationally encounter
      consequences that are extremely painful. Nor again is there anyone who
      loves or pursues or desires to obtain pain of itself, because it is pain,
      but because occasionally circumstances occur in which toil and pain can
      procure him some great pleasure. To take a trivial example, which of us
      ever undertakes laborious physical exercise, except to obtain some
      advantage from it? But who has any right to find fault with a man who
      chooses to enjoy a pleasure that has no annoying consequences, or one who
      avoids a pain that produces no resultant pleasure?”
    </p>
  </BadContentLayout>
);

export default [
  {
    type: 'do',
    title: 'use Popover to provide help to the user',
    example: <PopOverDo />,
    description: 'Provide extra context for selected interface elements.'
  },
  {
    type: 'dont',
    title: 'add too much content',
    example: (
      <Popover content={BadContent}>
        <Button>Lorem Ipsum</Button>
      </Popover>
    ),
    description:
      'Content should be succinct. If more context is needed, provide a link to another resource with more detail. Add a `max-width` value to constrain the layout if this is intended app behavior.'
  }
];
