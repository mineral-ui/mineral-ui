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
import { Component } from 'react';
import Select from '../../../../../Select';
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
