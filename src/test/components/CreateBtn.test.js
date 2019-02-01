import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CreateBtn } from '../../components/CreateBtn/CreateBtn';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    openCreate: jest.fn()
  };

  const wrapper = shallow(<CreateBtn {...props} />);

  return {
    props,
    wrapper: wrapper
  }
}

describe('CreateBtn', () => {
  it('should have a button element', () => {
    const { wrapper } = setup();
    expect(wrapper.containsMatchingElement(
      <button>Ask a new question</button>
    )).toBe(true);
  });
});
