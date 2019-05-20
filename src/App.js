// import React from 'react';
import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person';

// function App() {
//   return (
//     <div className="App">
//       <Person name="gega" age="29"/>
//       <Person name="gonz" age="39">Hobby: Coding!</Person>
//     </div>
//   );
// }
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
    // const items= [];
    // for(const [index,value] of this.state.Person.entries()){
    //   if(value.name === 'gega' || value.name === "Ahmad" || value.name === 'Dali')
    //     items.push(
    //       <Person 
    //         key={index} 
    //         name={value.name} 
    //         // onclickHandler={this.changeName.bind(this, 'Ahmad')} 
    //         onclickHandler={()=>{this.changeName('Ahmad')}} 
    //         age={value.age}>
    //           Hobby: Gaming
    //       </Person>)
    //   else items.push(<Person key={index} name={value.name} age={value.age}/>)
    // }

    return(
      <div className="App">
      {/* {items} */}
      {this.state.isShow ?
      <div>
        <Person 
          name={this.state.Person[0].name} 
          // onclickHandler={this.changeName.bind(this, 'Ahmad')} 
          key ={0}
          changeHandler={this.changeName} 
          style = {this.state.isGiveStyle ? this.state.styleBtn: {}}
          age={this.state.Person[0].age}>
            Hobby: Gaming
        </Person>
        <Person 
          name={this.state.Person[1].name} 
          // onclickHandler={this.changeName.bind(this, 'Ahmad')} 
          style = {this.state.isGiveStyle ? this.state.styleBtn: {}}

          age={this.state.Person[1].age}>
            Hobby: Gaming
        </Person>
        <Person 
          name={this.state.Person[2].name} 
          // onclickHandler={this.changeName.bind(this, 'Ahmad')} 
          style = {this.state.isGiveStyle ? this.state.styleBtn: {}}

          age={this.state.Person[2].age}>
            Hobby: Gaming
        </Person>
        </div>
        :null
      }
      
        <button onClick={this.changeStyle} style= {this.state.styleBtn}>click</button>
        <button onClick={this.ToggleStyle} style= {this.state.styleBtn}>Toggle</button>
        <button onClick={this.ToggleHidden} style= {this.state.styleBtn}>Toggle</button>
        
        {/*<button onClick={this.changeName.bind(this, 'Dali')}>click</button>*/}

        {/* {this.state.Person.map((value, index)=>{
          return <Person key={index} name={value.name} age={value.age}/>
        })} */}
        {/* <Person name={this.state.Person[0].name} age={this.state.Person[0].age}/>
        <Person name={this.state.Person[1].name} age={this.state.Person[1].age}>Hobby: Coding!</Person> */}
     </div>
    );
  }
}
export default App;
