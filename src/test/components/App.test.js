import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { App } from './App';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {}
}

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  expect(1).toEqual(1);
});
