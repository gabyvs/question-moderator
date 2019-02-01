import React from 'react';
import { shallow } from 'enzyme';
import { CreateBtn } from '../../components/CreateBtn/CreateBtn';

describe('CreateBtn', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      openCreate: jest.fn()
    };

    wrapper = shallow(<CreateBtn {...props} />);
  });

  it('should have a button element', () => {
    expect(wrapper.containsMatchingElement(
      <button>Ask a new question</button>
    )).toBe(true);
  });

  describe('and the user hits the button', () => {

    beforeEach(() => {
      const button = wrapper.find('button');
      button.simulate('click');
    });


    it('should call openCreate', () => {
      expect(props.openCreate.mock.calls.length).toBe(1);
    });
  });
});
