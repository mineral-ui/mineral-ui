import Enzyme from 'enzyme';
import * as emotion from 'emotion';
import { matchers, createSerializer } from 'jest-emotion';
import Adapter from 'enzyme-adapter-react-16';
import { canUseDOM } from 'exenv';

expect.addSnapshotSerializer(createSerializer(emotion));
expect.extend(matchers);

Enzyme.configure({ adapter: new Adapter() });

if (canUseDOM) {
  window.scroll = jest.fn();
}
