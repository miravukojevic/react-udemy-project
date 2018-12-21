 import React from 'react';
 
 const person = (props) => {
    return (
        <div>
            <p onClick={props.klik}> I am {props.name} and i am {props.age} years old</p>
            <input type="text" onChange={props.change}/>
        </div>
    )
 }

export default person