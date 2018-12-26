import React, { Component } from 'react';
import './App.css';
import Person from './components/Persons/Person/Person';
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit'

class App extends Component {
  constructor(props){
    super(props);
    console.log('props', props)
  }

  componentWillMount = () => {
    console.log('inside componentWillMount')
  }

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

  componentDidMount(){
    console.log('inside did mount')
  }

  render() {
    console.log('inside render')
    let persons = null;

    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid darkgreen',
      padding: '10px',
      marginTop: '20px'
    }
    if(this.state.showPersons){
        persons = <Persons appTitle={this.props.title} persons={this.state.persons} clicked={this.deletePerosnHandler} changed={this.nameChangedHandler}/>
    }
  return(
    <div className="App">
    <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
    <Cockpit style={style} toggle={this.togglePersonsHandler} />
      {persons}
    </div>
  )
  
  }
}
export default App;
