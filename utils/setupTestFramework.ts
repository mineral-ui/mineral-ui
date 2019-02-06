import Enzyme from 'enzyme';
import { matchers } from 'jest-emotion';
import Adapter from 'enzyme-adapter-react-16';
import { canUseDOM } from 'exenv';

expect.extend(matchers);

Enzyme.configure({ adapter: new Adapter() });

if (canUseDOM) {
  window.scroll = jest.fn();
}
