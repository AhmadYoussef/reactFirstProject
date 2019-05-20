
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component{
  state={
    Person:[
        {name: 'gega', age:34},
        {name: 'sda', age:32},
        {name: 'gonz', age:39}
    ],
    styleBtn: {backgroundColor: 'gray', border : '1px solid red'},
    isGiveStyle: false,
    isShow: true
    }
    changeName = (event)=>{
        console.log(event.target)
        this.setState({
        Person:[
            {name: event.target.value, age:34},
            {name: 'lli', age:34},
            {name: 'ase', age:39}
        ]
    })
} 
    changeStyle = ()=>{
        let styleBtn = this.state.styleBtn;
        styleBtn = {backgroundColor: 'blue',
                    border : '1px solid red'};
        this.setState({styleBtn});
    }
    ToggleStyle = ()=>{
        this.setState({isGiveStyle : !this.state.isGiveStyle});
    }
    ToggleHidden = () =>{
        this.setState({isShow : !this.state.isShow})
    }
    render(){
    let persons = null;
    if(this.state.isShow){
     persons= <div>
        {this.state.Person.map((value,index)=>{
            console.log(value);
            return <Person 
                    name={value.name} 
                    // onclickHandler={this.changeName.bind(this, 'Ahmad')} 
                    key ={index}
                    changeHandler={this.changeName} 
                    style = {this.state.isGiveStyle ? this.state.styleBtn: {}}
                    age={value.age}
                /> 
        })}
        </div>
        }
        return(
        <div className="App">
            <button onClick={this.changeStyle} style= {this.state.styleBtn}>click</button>
            <button onClick={this.ToggleStyle} style= {this.state.styleBtn}>Toggle</button>
            <button onClick={this.ToggleHidden} style= {this.state.styleBtn}>Toggle</button>
            {persons}
        </div>
        );
    }
}
export default App;
