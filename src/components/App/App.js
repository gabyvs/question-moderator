import React          from 'react';
import PropTypes      from 'prop-types';
import { connect }    from 'react-redux';
import CreateBtn      from '../CreateBtn/CreateBtn';
import CreateForm     from '../CreateForm/CreateForm';
import List           from '../List/List';
import './App.css';
const date = new Date();
date.setDate(new Date().getDate() + 1);
let questions = [
  {
    name: 'Person 1',
    question: "Why didn't I get a name?",
    id: new Date(),
    votes: 0
  },
  {
    name: 'Alita',
    question: 'Can I fly?',
    id: date,
    votes: 5
  }
];

const App = ({ create }) => (
  <div className="app">
    {create ?
      <CreateForm
        addQuestion={() => {}}
        closeCreate={() => {}}/> :
      <CreateBtn openCreate={() => {}}/>}
    <List
      questions={questions}
      upVote={() => {}}
      downVote={() => {}}
      deleteQuestion={() => {}}/>
  </div>
);

App.propTypes = {
  create: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return  ({ create: state.create })
};

export default connect(mapStateToProps)(App);
