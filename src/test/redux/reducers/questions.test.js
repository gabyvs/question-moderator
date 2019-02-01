import reducer        from '../../../redux/reducers/questions';
import * as types     from '../../../redux/actionTypes';
import {ADD_QUESTION} from '../../../redux/actionTypes';

const today = new Date();
const yesterday = today.setDate(today.getDate() - 1);

describe('questions reducer', () => {
  let name;
  let question;
  let question1;
  let question2;

  beforeEach(() => {
    name = 'A name';
    question = 'A question?';
    question1 = {
      name: 'First name',
      question: 'First question?',
      votes: 1,
      id: yesterday
    };
    question2 = {
      name: 'Second name',
      question: 'Second question?',
      votes: 3,
      id: today
    };
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {}).length).toBe(2);
  });

  it('should handle adding a question', () => {
    expect(
      reducer([], {
        type: types.ADD_QUESTION,
        payload: {
          name,
          question
        }
      })
    ).toEqual([{
      name,
      question,
      votes: 0,
      id: expect.any(Date)
    }]);

    expect(
      reducer([question1], {
        type: ADD_QUESTION,
        payload: {
          name,
          question
        }
      })
    ).toEqual([
      question1, {
        name,
        question,
        votes: 0,
        id: expect.any(Date)
      }
    ]);
  });

  it('should handle removing a question', () => {
    expect(
      reducer([question1, question2], {
        type: types.REMOVE_QUESTION,
        payload: {
          id: yesterday
        }
      })).toEqual([question2]);

    expect(
      reducer([question1], {
        type: types.REMOVE_QUESTION,
        payload: {
          id: yesterday
        }
      })).toEqual([]);
  });

  // TODO: add tests for upvote and downvote
});