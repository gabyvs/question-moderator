import React        from 'react';
import PropTypes    from 'prop-types';
import { connect }  from 'react-redux';
import Question     from '../Question/Question';
import './List.css';

const List = ({ questions }) => {
  const questionList = questions.map((question) => {
    return (
      <Question question={question}
                key={question.id} />
    );
  });

  return (
    <div className="question-list">{questionList}</div>
  );
};

List.propTypes = {
  questions: PropTypes.array.isRequired,
};

const mapStateToProps = ({ questions }) => {
  return  ({ questions })
};

export default connect(mapStateToProps)(List);