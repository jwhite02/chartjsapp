// setupTests.js
// npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})

window.HTMLCanvasElement.prototype.getContext = () => { }