import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {

    constructor(props){
        super(props);
        console.log('props', props)
      }
    
    componentWillMount = () => {
        console.log('inside componentWillMount')
    }

    componentDidMount(){
        console.log('inside did mount')
    }
    
    render() {
        return this.props.persons.map((person, index) => {
            return ( 
                <div>
                    <h1>
                        {this.props.appTitle}
                    </h1>
                    <Person
                    key={index} 
                    klik={() => this.props.clicked(index)} 
                    name={person.name} 
                    age={person.age} 
                    change={(event) => this.props.changed(event, person.id)}/>
                </div>
            )
          })
    }
}

export default Persons;