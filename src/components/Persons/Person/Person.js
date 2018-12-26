 import React, {Component} from 'react';
 
 class Person extends Component {
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
         return (
            <div>
                <p onClick={this.props.klik}> I am {this.props.name} and i am {this.props.age} years old</p>
                <input type="text" onChange={this.props.change}/>
            </div>
         )
     }
 }

export default Person;