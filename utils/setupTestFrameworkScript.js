import Enzyme from 'enzyme';
import * as emotion from 'emotion';
import { matchers, createSerializer } from 'jest-emotion';
import Adapter from 'enzyme-adapter-react-16';

expect.addSnapshotSerializer(createSerializer(emotion));
expect.extend(matchers);

Enzyme.configure({ adapter: new Adapter() });

window.scroll = jest.fn();
