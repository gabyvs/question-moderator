import React, { Component } from 'react';
import List                 from '../List/List';
import CreateBtn            from '../CreateBtn/CreateBtn';
import CreateForm           from '../CreateForm/CreateForm';
import './App.css';

class App extends Component {
  state = {
    isCreating: true,
    questions: [
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
    ]
  };
  
  render () {
    return (
      <div className="app">
        {this.state.isCreating ?
          <CreateForm addQuestion={() => {}} closeCreate={() => {}}/> :
          <CreateBtn openCreate={() => {}}/>}
        <List questions={this.state.questions}/>
      </div>
    );
  }
}
export default App;
