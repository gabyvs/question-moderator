import {
  OPEN_CREATE,
  CANCEL_CREATE,
  ADD_QUESTION,
  REMOVE_QUESTION,
  UPVOTE,
  DOWNVOTE
} from './actionTypes';

export const openCreate = () => ({
  type: OPEN_CREATE
});

export const cancelCreate = () => ({
  type: CANCEL_CREATE
});

export const addQuestion = (name, question) => ({
  type: ADD_QUESTION,
  payload: {
    name,
    question
  }
});

export const removeQuestion = id => ({
  type: REMOVE_QUESTION,
  payload: {
    id
  }
});

export const upVote = id => ({
  type: UPVOTE,
  payload: {
    id
  }
});

export const downVote = id => ({
  type: DOWNVOTE,
  payload: {
    id
  }
});
