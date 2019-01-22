import React from 'react';
import './Question.css';

const Question = ({ question, upVote: upVote, downVote: downVote, deleteQuestion }) => {
    return (
      <div className="card question-card">
        <div className="card-body">
          <div className="card-text">{question.question}</div>
        </div>
        <div className="card-footer">
          <div className="user">{question.name}</div>
          <div className="card-actions">
            <div className="btn-up" onClick={upVote}>
              <i className="fas fa-caret-up"></i>
            </div>
            <div className="votes">{question.votes}</div>
            <div className="btn-down" onClick={downVote}>
              <i className="fas fa-caret-down"></i>
            </div>
            <div className="btn-delete" onClick={deleteQuestion}>
              <i className="fas fa-trash-alt"></i>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Question;
