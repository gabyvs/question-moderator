import React, { Component } from 'react';
import Create               from '../Create/Create';
import './App.css';
import List                 from '../List/List';

class App extends Component {
  state = {
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
        <Create/>
        <List questions={this.state.questions}/>
      </div>
    );
  }
}
export default App;
