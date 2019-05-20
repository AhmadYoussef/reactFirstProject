
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';


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
    changeName = (index,e)=>{
        let Person = this.state.Person;
        Person[index].name = e.target.value;    
        this.setState({Person})
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
    // deletePerson = (index)=>{
    //     let Person = this.state.Person;
    //     Person.splice(index,1);
    //     this.setState({Person});
    // }
    render(){
    let persons = null;
    if(this.state.isShow){
     persons= <div>
        {this.state.Person.map((value,index)=>{
            return <Person 
                    name={value.name} 
                    ko ={index}
                    key ={index}
                    changeHandler={this.changeName} 
                    style = {this.state.isGiveStyle ? this.state.styleBtn: {}}
                    age={value.age}
                    // click={()=>{this.deletePerson(index)}}
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
