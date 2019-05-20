import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component{
  state={
    data:[
        {name: 'gega', age:34},
        {name: 'sda', age:32},
        {name: 'gonz', age:39}
    ],
    styleBtn: {backgroundColor: 'gray', border : '1px solid red'},
    isGiveStyle: false,
    isShow: true
    }
    changeName = (index,e)=>{
        let data = this.state.data;
        data[index].name = e.target.value;    
        this.setState({data})
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
    deletePerson = (index)=>{
        let data = this.state.data;
        data.splice(index,1);
        this.setState({data});
    }
    render(){
    let personsComponent = null;
    if(this.state.isShow){
        personsComponent= <div>
        {this.state.data.map((value,index)=>{
            return <Person 
                    name={value.name} 
                    ke ={index}
                    changeHandler={this.changeName} 
                    style = {this.state.isGiveStyle ? this.state.styleBtn: {}}
                    age={value.age}
                    click={()=>{this.deletePerson(index)}}
                /> 
        })}
        </div>
        }
        return(
        <div className="App">
            <button onClick={this.changeStyle} style= {this.state.styleBtn}>click</button>
            <button onClick={this.ToggleStyle} style= {this.state.styleBtn}>Toggle</button>
            <button onClick={this.ToggleHidden} style= {this.state.styleBtn}>Toggle</button>
            {personsComponent}
        </div>
        );
    }
}
export default App;
