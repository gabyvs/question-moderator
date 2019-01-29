import React                  from 'react';
import PropTypes              from 'prop-types';
import { connect }            from 'react-redux';
import Question               from '../Question/Question';
import { getSortedQuestions } from '../../redux/selectors';
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

const mapStateToProps = (state) => {
  return  ({ questions: getSortedQuestions(state) })
};

export default connect(mapStateToProps)(List);