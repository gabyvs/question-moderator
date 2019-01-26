import React      from 'react';
import List       from '../List/List';
import CreateBtn  from '../CreateBtn/CreateBtn';
import CreateForm from '../CreateForm/CreateForm';
import './App.css';
import PropTypes  from 'prop-types';

let questions = [
  {
    name: 'Person 1',
    question: "Why didn't I get a name?",
    id: 1,
    votes: 0
  },
  {
    name: 'Alita',
    question: 'Can I fly?',
    id: 2,
    votes: 5
  }
];

const App = (props) => (
  <div className="app">
    {props.isCreating ?
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
  isCreating: PropTypes.bool.isRequired
};

export default App;
