import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CreateForm.css';

class CreateForm extends Component {
  state = {
    name: '',
    question: ''
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // TODO: add form validation
  // TODO: handle adding a question with props
  addQuestion = (event) => {
    event.preventDefault();
    let question = {  }; // TODO: create question
    this.setState({ isCreating: false });
    this.props.addQuestion(question);
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
                      onClick={this.props.closeCreate}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CreateForm.propTypes = {
  closeCreate: PropTypes.func.isRequired,
  addQuestion: PropTypes.func.isRequired
};

export default CreateForm;