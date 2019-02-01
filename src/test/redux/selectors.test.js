import { getSortedQuestions} from '../../redux/selectors';

describe('getSortedQuestions', () => {
  it('should handle empty state', () => {
    expect(getSortedQuestions({ questions: []})).toEqual([]);
  });

  it('should sort question based on votes', () => {
    const today = new Date();
    const yesterday = today.setDate(today.getDate() - 1);
    let question1 = {
      name: 'First name',
      question: 'First question?',
      votes: 1,
      id: yesterday
    };
    let question2 = {
      name: 'Second name',
      question: 'Second question?',
      votes: 3,
      id: today
    };

    expect(getSortedQuestions({ questions: [question1, question2]}))
      .toEqual([question2, question1]);
  });

  it('should sort questions with the same number of votes by antiquity', () => {
    const today = new Date();
    const yesterday = new Date().setDate(today.getDate() - 1);
    let question1 = {
      name: 'First name',
      question: 'First question?',
      votes: 1,
      id: yesterday
    };
    let question2 = {
      name: 'Second name',
      question: 'Second question?',
      votes: 1,
      id: today
    };

    expect(getSortedQuestions({ questions: [question2, question1]}))
      .toEqual([question1, question2]);
  });
});