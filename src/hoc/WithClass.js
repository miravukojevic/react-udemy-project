import React from 'react';

const WithClass = (props) => (
    <div className="App">
    {props.children}
    </div>
)

export default WithClass;