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
      return state.concat({
        name,
        question,
        id: new Date(),
        votes: 0
      });
    }
    case REMOVE_QUESTION: {
      const { id } = action.payload;
      return state.filter(q => q.id !== id);
    }
    case UPVOTE: {
      return state.map(q => {
        if (q.id === action.payload.id) {
          return {
            ...q,
            votes: q.votes + 1
          };
        }
        return q;
      });
    }
    case DOWNVOTE: {
      const { id } = action.payload;
      return state.map(q => {
        if (q.id === id) {
          return {
            ...q,
            votes: Math.max(0, q.votes - 1)
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