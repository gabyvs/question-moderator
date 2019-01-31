import * as actions from '../../redux/actions';
import * as types from '../../redux/actionTypes';

describe('actions', () => {
  it('should create an action to open create component', () => {
    expect(actions.openCreate()).toEqual({
      type: types.OPEN_CREATE
    });
  });

  it('should create an action to cancel creating a component', () => {
    expect(actions.cancelCreate()).toEqual({
      type: types.CANCEL_CREATE
    });
  });

  it('should create an action to add a new question', () => {
    const name = 'A name';
    const question = 'A question?';
    expect(actions.addQuestion(name, question)).toEqual({
      type: types.ADD_QUESTION,
      payload: {
        name,
        question
      }
    });
  });

  it('should create an action to remove a question', () => {
    const id = 1;
    expect(actions.removeQuestion(id)).toEqual({
      type: types.REMOVE_QUESTION,
      payload: {
        id
      }
    });
  });

  it('should create an action to increase the votes of a question', () => {
    const id = 1;
    expect(actions.upVote(id)).toEqual({
      type: types.UPVOTE,
      payload: {
        id
      }
    });
  });

  it('should create an action to decrease the votes of a question', () => {
    const id = 1;
    expect(actions.downVote(id)).toEqual({
      type: types.DOWNVOTE,
      payload: {
        id
      }
    });
  });
});