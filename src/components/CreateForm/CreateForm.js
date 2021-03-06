import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { connect }          from 'react-redux';
import {
  cancelCreate,
  addQuestion }             from '../../redux/actions';
import './CreateForm.css';

export class CreateForm extends Component {
  state = {
    name: '',
    question: ''
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // TODO: add form validation
  addQuestion = (event) => {
    event.preventDefault();
    this.props.addQuestion(this.state.name, this.state.question);
  };

  render() {
    return (
      <div className="add-question-form">
        <div className="card create-card">
          <div className="card-body">
            <div className="card-title">Ask a new question</div>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  autoFocus={true}
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder="Enter your name or a nickname" />
              </div>
              <div className="form-group">
                <label htmlFor="question">Your question</label>
                <textarea
                  className="form-control"
                  id="question"
                  name="question"
                  value={this.state.question}
                  onChange={this.handleChange}
                  placeholder="Ask your question" />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={false}
                onClick={this.addQuestion}>Submit</button>
              <button type="button"
                      className="btn btn-default btn-cancel"
                      onClick={this.props.cancelCreate}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CreateForm.propTypes = {
  cancelCreate: PropTypes.func.isRequired,
  addQuestion: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    cancelCreate,
    addQuestion
  }
)(CreateForm);