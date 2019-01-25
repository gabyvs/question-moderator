import {
  ADD_QUESTION,
  REMOVE_QUESTION,
  UPVOTE,
  DOWNVOTE } from '../actionTypes';

const initialState = [];

const questions = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION: {
      const { name, question } = action.payload;
      return state.questions.concat({
        name,
        question,
        id: new Date(),
        votes: 0
      });
    }
    case REMOVE_QUESTION: {
      const { id } = action.payload;
      return state.questions.filter(q => q.id !== id);
    }
    case UPVOTE: {
      const { id } = action.payload;
      return state.questions.map(q => {
        if (q.id === id) {
          return {
            ...q,
            votes: q.votes++
          };
        }
        return q;
      });
    }
    case DOWNVOTE: {
      const { id } = action.payload;
      return state.questions.map(q => {
        if (q.id === id) {
          return {
            ...q,
            votes: q.votes--
          };
        }
        return q;
      });
    }
    default:
      return state;
  }
};

export default questions;