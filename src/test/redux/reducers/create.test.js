import reducer from '../../../redux/reducers/create';
import * as types from '../../../redux/actionTypes';

describe('create reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(false);
  });

  it('should handle start creating a question', () => {
    expect(reducer(false, {
      type: types.OPEN_CREATE
    })).toEqual(true);
  });

  it('should handle cancel creating a question', () => {
    expect(reducer(true, {
      type: types.CANCEL_CREATE
    })).toEqual(false);
  });

  it('should handle adding a new question', () => {
    expect(reducer(true, {
      type: types.ADD_QUESTION
    })).toEqual(false);
  });
});