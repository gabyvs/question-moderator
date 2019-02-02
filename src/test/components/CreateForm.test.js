import React from 'react';
import { shallow } from 'enzyme';
import { CreateForm } from '../../components/CreateForm/CreateForm';

describe('CreateForm', () => {
  let props;
  let createForm;

  beforeEach(() => {
    props = {
      cancelCreate: jest.fn(),
      addQuestion: jest.fn()
    };

    createForm = shallow(<CreateForm {...props} />);
  });

  it('should have a name input', () => {
    expect(createForm.containsMatchingElement(
      <input name="name" />
    )).toBe(true);
  });

  it('should have a question input', () => {
    expect(createForm.containsMatchingElement(
      <textarea name="question" />
    )).toBe(true);
  });

  it('should have create button', () => {
    expect(createForm.containsMatchingElement(
      <button>Submit</button>
    )).toBe(true);
  });

  it('should have cancel button', () => {
    expect(createForm.containsMatchingElement(
      <button>Cancel</button>
    )).toBe(true);
  });

  describe('the user populates the form', () => {
    const name = 'My name';
    const question = 'My question?';

    beforeEach(() => {
      const nameInput = createForm.find('input').first();
      const questionInput = createForm.find('textarea').first();
      nameInput.simulate('change', { target: { value: name, name: 'name' }});
      questionInput.simulate('change', { target: { value: question, name: 'question' }});
    });

    it('should update the name', () => {
      expect(createForm.state().name).toEqual(name);
    });

    it('should update the question', () => {
      expect(createForm.state().question).toEqual(question);
    });

    describe('and then submits the form', () => {
      beforeEach(() => {
        const saveButton = createForm.find('button').first();
        saveButton.simulate('click', {
          preventDefault: () => {}
        })
      });

      it('should call add question', () => {
        expect(props.addQuestion.mock.calls.length).toBe(1);
      });
    });
  });
});