/* @flow */
import { Component } from 'react';
import Button from '../../../../../../library/Button';
import Tabs, { Tab } from '../../../../../../library/Tabs';
import Text from '../../../../../../library/Text';
import DemoLayout from '../../../shared/DemoLayout';
import content from '../../shared/content';

export default {
  id: 'controlled',
  title: 'Controlled',
  description: `Tabs controls its own state by default, and can optionally be
managed by the application as a controlled component through the
\`selectedTabIndex\` prop. A callback for \`onChange\` is also provided.`,
  scope: {
    Button,
    Component,
    content,
    DemoLayout,
    Tabs,
    Tab,
    Text
  },
  source: `() => {
    class MyTabs extends Component {
      constructor(props) {
        super(props);

        this.state = {
          selectedTabIndex: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.resetDefaultSelected = this.resetDefaultSelected.bind(this);
      }

      handleChange(selectedTabIndex) {
        this.setState({
          selectedTabIndex
        });
      }

      resetDefaultSelected() {
        this.setState({
          selectedTabIndex: 0
        });
      }

      render() {
        return (
          <DemoLayout>
            <Button minimal size="small" onClick={this.resetDefaultSelected}>Reset to Default Selected</Button>
            <Tabs
              onChange={this.handleChange}
              selectedTabIndex={this.state.selectedTabIndex}
              label="Minerals"
              height="7.75em"
            >
              <Tab title="Malachite">
                <Text>{content.malachite}</Text>
              </Tab>
              <Tab title="Fluorite">
                <Text>{content.fluorite}</Text>
              </Tab>
              <Tab title="Magnetite">
                <Text>{content.magnetite}</Text>
              </Tab>
            </Tabs>
          </DemoLayout>
        );
      }
    }

    return <MyTabs />;
  };`
};
