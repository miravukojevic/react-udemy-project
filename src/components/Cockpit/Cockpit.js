
import React from 'react';

const cockpit = (props) => {
    return(
        <div>
            <h1>This is my little person app</h1>
            <button style={props.style} onClick={props.toggle }>Switch name</button>
        </div>
    );
}
export default cockpit;