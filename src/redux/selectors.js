import { createSelector } from 'reselect';

const getQuestions = state => state.questions;

export const getSortedQuestions = createSelector(
  getQuestions,
  questions => questions.sort((a, b) => {
    if (a.votes > b.votes) return -1;
    if (a.votes === b.votes) {
      return a.id - b.id;
    }
    return 1;
  })
);