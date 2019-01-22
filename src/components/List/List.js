import React    from 'react';
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

export default List;