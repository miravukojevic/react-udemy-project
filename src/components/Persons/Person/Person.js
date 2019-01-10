 import React, {Component} from 'react';
 import PropTypes from 'prop-types';
 import {AuthContext} from '../../../App'
 
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
                <AuthContext.Consumer>
                    {auth => auth ? <p>i am authenticated </p>: null}
                </AuthContext.Consumer>
                <p onClick={this.props.klik}> I am {this.props.name} and i am {this.props.age} years old</p>
                <input type="text" onChange={this.props.change}/>
            </div>
         )
     }
 }

 Person.propTypes = {
     click: PropTypes.func,
     name: PropTypes.string,
     age: PropTypes.number,
     changed: PropTypes.func
 }

export default Person;