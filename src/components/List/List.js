import React    from 'react';
import PropTypes from 'prop-types';
import Question from '../Question/Question';
import './List.css';

const List = ({ questions, upVote, downVote, deleteQuestion }) => {
  const questionList = questions.map((question) => {
    return (
      <Question question={question}
                key={question.id}
                deleteQuestion={deleteQuestion}
                upVote={upVote}
                downVote={downVote} />
    );
  });

  return (
    <div className="question-list">{questionList}</div>
  );
};

List.propTypes = {
  questions: PropTypes.array.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  deleteQuestion: PropTypes.func.isRequired
};

export default List;