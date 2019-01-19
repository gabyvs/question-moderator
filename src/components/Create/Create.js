import React, { Component } from 'react';
import './Create.css';

class Create extends Component {
  state = {
    isCreating: false,
    name: '',
    question: ''
  };

  openCreate = () => {
    this.setState({ isCreating: true });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  closeCreate = () => {
    this.refs.form.reset();
    this.setState({ isCreating: false });
  };

  addQuestion = (event) => {
    event.preventDefault();
    this.refs.form.reset();
    this.setState({ isCreating: false });
  };


  render() {
    if (!this.state.isCreating) {
      return (
        <div className="create-container">
          <button type="button"
                  className="btn btn-primary add-question-btn"
                  onClick={this.openCreate}>
            Ask a new question
          </button>
        </div>
      );
    }
    return (
      <div className="add-question-form">
        <div className="card">
          <div className="card-body">
            <div className="card-title">Ask a new question</div>
            <form ref="form">
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
              <button type="button" className="btn btn-default btn-cancel" onClick={this.closeCreate}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;