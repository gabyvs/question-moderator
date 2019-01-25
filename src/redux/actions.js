import {
  ADD_QUESTION,
  REMOVE_QUESTION,
  UPVOTE,
  DOWNVOTE
} from './actionTypes';

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

// TODO: see if this is useful, create all if so.
const boundAddQuestion = (name, question) => dispatch(addQuestion(name, question));