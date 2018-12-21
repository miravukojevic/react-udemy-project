import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Stojko', age: 28},
      {id: 2, name: 'Mira', age: 38},
      {id: 3, name: 'Jebemga', age: 25}
    ],
    showPersons: false
  }

  deletePerosnHandler  = (event) => {
    console.log(event)
    const newArrayOfPersons = this.state.persons;
    newArrayOfPersons.splice(event, 1);
    this.setState({
      persons: newArrayOfPersons
    })
  }
   
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState ({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    return (
      <div className="App">
      {
        this.state.persons.map((person, index) => {
          return <Person key={index} klik={() => this.deletePerosnHandler(index)} name={person.name} age={person.age} change={(event) => this.nameChangedHandler(event, person.id)}/>
        })
      }
        <button onClick={this.togglePersonsHandler}>Switch name</button>
        {!this.state.showPersons ? <div >
          {/* <Person age={this.state.persons[0].age} name={this.state.persons[0].name} klik={this.switchNameHandler} change={this.nameChangedHandler}/>
          <Person age={this.state.persons[1].age} name={this.state.persons[1].name}/>
          <Person age={this.state.persons[2].age} name={this.state.persons[2].name}/> */}
        </div> : null}
      </div>
    );
  
  }
}

export default App;
