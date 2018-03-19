/* @flow */
import { Component } from 'react';
import Select from '../../../../../library/Select';
import { basicData as data } from '../components/selectData';

export default {
  id: 'controlled',
  description: `Select controls its own state by default, and can optionally be
managed by the application as a controlled component via the control props,
\`isOpen\`, \`selectedItem\`, and \`highlightedIndex\`.`,
  title: 'Controlled',
  scope: { Component, data, Select },
  source: `
  () => {
    class MyForm extends Component {
      constructor(props) {
        super(props);

        this.state = {
          selectedItem: undefined
        };

        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(item) {
        this.setState({
          selectedItem: item
        });
      }

      render() {
        return (
          <Select
            data={data}
            selectedItem={this.state.selectedItem}
            onChange={this.handleChange} />
        );
      }
    }

    return <MyForm />;
  }
  `
};
