import React from 'react';
import { shallow } from 'enzyme';
import { CreateBtn } from '../../components/CreateBtn/CreateBtn';

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
