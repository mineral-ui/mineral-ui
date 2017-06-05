import HelloDemo from '../../../hello/src/__demo__/index';
import HelloWorldDemo from '../../../hello-world/src/__demo__/index';
import WorldDemo from '../../../world/src/__demo__/index';

export default HelloDemo.concat(WorldDemo)
                        .concat(HelloWorldDemo);
