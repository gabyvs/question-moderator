import React        from 'react';
import PropTypes    from 'prop-types';
import { connect }  from 'react-redux';
import {
  removeQuestion,
  upVote,
  downVote }        from '../../redux/actions';
import './Question.css';

const Question = ({ question, upVote, downVote, removeQuestion }) => {
    return (
      <div className="card question-card">
        <div className="card-body">
          <div className="card-text">{question.question}</div>
        </div>
        <div className="card-footer">
          <div className="user">{question.name}</div>
          <div className="card-actions">
            <div className="btn-up" onClick={() => upVote(question.id)}>
              <i className="fas fa-caret-up"></i>
            </div>
            <div className="votes">{question.votes}</div>
            <div className="btn-down" onClick={() => downVote(question.id)}>
              <i className="fas fa-caret-down"></i>
            </div>
            <div className="btn-delete" onClick={() => removeQuestion(question.id)}>
              <i className="fas fa-trash-alt"></i>
            </div>
          </div>
        </div>
      </div>
    );
};

Question.propTypes = {
  question: PropTypes.shape({
    name: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    id: PropTypes.instanceOf(Date),
    votes: PropTypes.number.isRequired
  }),
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  removeQuestion: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    removeQuestion,
    upVote,
    downVote
  }
)(Question);
