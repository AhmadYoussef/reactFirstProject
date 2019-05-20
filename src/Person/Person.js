import React from 'react';
import './Person.css';

const person = (props)=>{
    return(
        <div className="person-card" style={props.style}>
            <h2 onClick={props.onclickHandler}>Name: {props.name}</h2>
            <h2>age: {Math.floor(Math.random()*2*props.age)}</h2>
            <input onChange={props.changeHandler} />
            <h2>{props.children}</h2>
        </div>
    );
}

export default person;