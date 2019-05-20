import React from 'react';
import './Person.css';

const Person = (props)=>{
    return(
        <div className="person-card" style={props.style} >
            <h2>Name: {props.name}</h2>
            <h2>age: {Math.floor(Math.random()*2*props.age)}</h2>
            <input onChange={(e)=>{props.changeHandler(props.ke,e)}}  />
            <button onClick={props.click}>Delete</button>
        </div>
    );
}

export default Person;