import React from 'react';
import ReactDOM from 'react-dom';



const lecture = 'of react jsx';
const element = <h1> This is testing {lecture}</h1>; 

ReactDOM.render(element, document.getElementById('jsx'));

function Button(props){ 
    return <button type="submit">{props.label}</button> 
}

ReactDOM.render(<Button label="Save"/>, document.getElementById('jsx'));


ReactDOM.render(<Button label="Cancel"/>, document.getElementById('jsxx'));