import React, { PureComponent } from 'react';
import Hello from '@mineral-ui/hello';
import World from '@mineral-ui/world';

export default class HelloWorld extends PureComponent {
  render() {
    return (
      <div>
        <Hello /> <World />
      </div>
    );
  }
}
