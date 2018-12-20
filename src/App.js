import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Stojko', age: 28},
      {name: 'Mira', age: 38},
      {name: 'Jebemga', age: 25}
    ]
  }

  render() {
    return (
      <div className="App">
        <button>Switch name</button>
        
        <Person age={this.state.persons[0].age} name={this.state.persons[0].name}/>
        <Person age={this.state.persons[1].age} name={this.state.persons[1].name}/>
        <Person age={this.state.persons[2].age} name={this.state.persons[2].name}/>
      </div>
    );
  
  }
}

export default App;
