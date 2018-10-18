/* @flow */
import { Component } from 'react';
import Button from '../../../../../../library/Button';
import HorizontalNavigation, {
  NavLink
} from '../../../../../../library/Navigation';
import DemoLayout from '../../../shared/DemoLayout';

export default {
  id: 'controlled',
  title: 'Controlled',
  description: `HorizontalNavigation controls its own state by default, and can optionally be
managed by the application as a controlled component through the
\`selectedNavLinkIndex\` prop. A callback for \`onChange\` is also provided.`,
  scope: {
    Button,
    Component,
    DemoLayout,
    HorizontalNavigation,
    NavLink
  },
  source: `() => {
    class MyHorizontalNavigation extends Component {
      constructor(props) {
        super(props);

        this.state = {
          selectedNavLinkIndex: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.resetDefaultSelected = this.resetDefaultSelected.bind(this);
      }

      handleChange(selectedNavLinkIndex) {
        this.setState({
          selectedNavLinkIndex
        });
      }

      resetDefaultSelected() {
        this.setState({
          selectedNavLinkIndex: 0
        });
      }

      render() {
        return (
          <DemoLayout>
            <Button minimal size="small" onClick={this.resetDefaultSelected}>Reset to Default Selected</Button>
            <HorizontalNavigation
              onChange={this.handleChange}
              selectedNavLinkIndex={this.state.selectedNavLinkIndex}
              label="Minerals"
            >
              <NavLink title="Malachite" />
              <NavLink title="Fluorite" />
              <NavLink title="Magnetite" />
            </HorizontalNavigation>
          </DemoLayout>
        );
      }
    }

    return <MyHorizontalNavigation />;
  };`
};
