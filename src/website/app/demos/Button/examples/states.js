/* @flow */
import { simulate } from 'glamor';
import { createStyledComponent } from '../../../../../library/styles';
import Button from '../../../../../library/Button';

const DemoLayout = createStyledComponent('div', {
  '& > button': {
    marginRight: '0.5rem',
    width: '8rem'
  }
});

export default {
  id: 'states',
  title: 'States',
  hideFromProd: true,
  hideSource: true,
  scope: { Button, DemoLayout, simulate },
  source: `
    <DemoLayout>
      <Button>Regular</Button>
      <Button primary>Primary</Button>
      <Button minimal>Minimal</Button>
      <br /><br />
      <Button {...simulate('hover')}>Hover</Button>
      <Button {...simulate('hover')} primary>Hover</Button>
      <Button {...simulate('hover')} minimal>Hover</Button>
      <br /><br />
      <Button {...simulate('focus')}>Focus</Button>
      <Button {...simulate('focus')} primary>Focus</Button>
      <Button {...simulate('focus')} minimal>Focus</Button>
      <br /><br />
      <Button {...simulate('focus', 'hover')}>Focus & Hover</Button>
      <Button {...simulate('focus', 'hover')} primary>Focus & Hover</Button>
      <Button {...simulate('focus', 'hover')} minimal>Focus & Hover</Button>
      <br /><br />
      <Button {...simulate('focus', 'active')}>Focus & Active</Button>
      <Button {...simulate('focus', 'active')} primary>Focus & Active</Button>
      <Button {...simulate('focus', 'active')} minimal>Focus & Active</Button>
      <br /><br />
      <Button {...simulate('active')}>Active</Button>
      <Button {...simulate('active')} primary>Active</Button>
      <Button {...simulate('active')} minimal>Active</Button>
      <br /><br />
      <Button disabled>Disabled</Button>
      <Button disabled primary>Disabled</Button>
      <Button disabled minimal>Disabled</Button>
      <br /><br /><br />

      <Button variant="danger">Regular</Button>
      <Button variant="danger" primary>Primary</Button>
      <Button variant="danger" minimal>Minimal</Button>
      <br /><br />
      <Button {...simulate('hover')} variant="danger">Hover</Button>
      <Button {...simulate('hover')} variant="danger" primary>Hover</Button>
      <Button {...simulate('hover')} variant="danger" minimal>Hover</Button>
      <br /><br />
      <Button {...simulate('focus')} variant="danger">Focus</Button>
      <Button {...simulate('focus')} variant="danger" primary>Focus</Button>
      <Button {...simulate('focus')} variant="danger" minimal>Focus</Button>
      <br /><br />
      <Button {...simulate('focus', 'hover')} variant="danger">
        Focus & Hover
      </Button>
      <Button {...simulate('focus', 'hover')} variant="danger" primary>
        Focus & Hover
      </Button>
      <Button {...simulate('focus', 'hover')} variant="danger" minimal>
        Focus & Hover
      </Button>
      <br /><br />
      <Button {...simulate('focus', 'active')} variant="danger">
        Focus & Active
      </Button>
      <Button {...simulate('focus', 'active')} variant="danger" primary>
        Focus & Active
      </Button>
      <Button {...simulate('focus', 'active')} variant="danger" minimal>
        Focus & Active
      </Button>
      <br /><br />
      <Button {...simulate('active')} variant="danger">Active</Button>
      <Button {...simulate('active')} variant="danger" primary>Active</Button>
      <Button {...simulate('active')} variant="danger" minimal>Active</Button>
      <br /><br />
      <Button disabled variant="danger">Disabled</Button>
      <Button disabled variant="danger" primary>Disabled</Button>
      <Button disabled variant="danger" minimal>Disabled</Button>
      <br /><br /><br />

      <Button variant="success">Regular</Button>
      <Button variant="success" primary>Primary</Button>
      <Button variant="success" minimal>Minimal</Button>
      <br /><br />
      <Button {...simulate('hover')} variant="success">Hover</Button>
      <Button {...simulate('hover')} variant="success" primary>Hover</Button>
      <Button {...simulate('hover')} variant="success" minimal>Hover</Button>
      <br /><br />
      <Button {...simulate('focus')} variant="success">Focus</Button>
      <Button {...simulate('focus')} variant="success" primary>Focus</Button>
      <Button {...simulate('focus')} variant="success" minimal>Focus</Button>
      <br /><br />
      <Button {...simulate('focus', 'hover')} variant="success">
        Focus & Hover
      </Button>
      <Button {...simulate('focus', 'hover')} variant="success" primary>
        Focus & Hover
      </Button>
      <Button {...simulate('focus', 'hover')} variant="success" minimal>
        Focus & Hover
      </Button>
      <br /><br />
      <Button {...simulate('focus', 'active')} variant="success">
        Focus & Active
      </Button>
      <Button {...simulate('focus', 'active')} variant="success" primary>
        Focus & Active
      </Button>
      <Button {...simulate('focus', 'active')} variant="success" minimal>
        Focus & Active
      </Button>
      <br /><br />
      <Button {...simulate('active')} variant="success">Active</Button>
      <Button {...simulate('active')} variant="success" primary>Active</Button>
      <Button {...simulate('active')} variant="success" minimal>Active</Button>
      <br /><br />
      <Button disabled variant="danger">Disabled</Button>
      <Button disabled variant="danger" primary>Disabled</Button>
      <Button disabled variant="danger" minimal>Disabled</Button>
      <br /><br /><br />

      <Button variant="warning">Regular</Button>
      <Button variant="warning" primary>Primary</Button>
      <Button variant="warning" minimal>Minimal</Button>
      <br /><br />
      <Button {...simulate('hover')} variant="warning">Hover</Button>
      <Button {...simulate('hover')} variant="warning" primary>Hover</Button>
      <Button {...simulate('hover')} variant="warning" minimal>Hover</Button>
      <br /><br />
      <Button {...simulate('focus')} variant="warning">Focus</Button>
      <Button {...simulate('focus')} variant="warning" primary>Focus</Button>
      <Button {...simulate('focus')} variant="warning" minimal>Focus</Button>
      <br /><br />
      <Button {...simulate('focus', 'hover')} variant="warning">
        Focus & Hover
      </Button>
      <Button {...simulate('focus', 'hover')} variant="warning" primary>
        Focus & Hover
      </Button>
      <Button {...simulate('focus', 'hover')} variant="warning" minimal>
        Focus & Hover
      </Button>
      <br /><br />
      <Button {...simulate('focus', 'active')} variant="warning">
        Focus & Active
      </Button>
      <Button {...simulate('focus', 'active')} variant="warning" primary>
        Focus & Active
      </Button>
      <Button {...simulate('focus', 'active')} variant="warning" minimal>
        Focus & Active
      </Button>
      <br /><br />
      <Button {...simulate('active')} variant="warning">Active</Button>
      <Button {...simulate('active')} variant="warning" primary>Active</Button>
      <Button {...simulate('active')} variant="warning" minimal>Active</Button>
      <br /><br />
      <Button disabled variant="danger">Disabled</Button>
      <Button disabled variant="danger" primary>Disabled</Button>
      <Button disabled variant="danger" minimal>Disabled</Button>
      <br /><br />
    </DemoLayout>`
};
