import React,{Component} from 'react';
import axios from 'axios';
import './App.css';


class App extends Component {
  state ={
    names : [],
    newName : null
  }
  adduser= () => {
    const newName = this.state.newName
    
    console.log("hello"+this.state.newName)
    axios.post(`http://localhost:8180/intents`,{ newName} )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  getuser= () => {
    axios.get(`http://localhost:8180/intents`)
    .then(res => {
      console.log(res)
      //const names = res;
      this.setState({ names:res.data });
    })
    console.log(this.state)
  }
  updateInputValue= (evt) => {
    console.log(evt.target.value)
    this.setState({
      newName: evt.target.value
    });
  }
  render() {    
    return(<div className="App">
        <h2> List of users</h2>
        <ul>
        { this.state.names ? this.state.names.map(person => <li>{person}</li>)
        : null
        }
        </ul>
        <button onClick={this.getuser}> get user</button>
        <button onClick={this.adduser}> add user</button>
        <input type="text" onChange={this.updateInputValue} />
      </div>)
  };
}
export default App;
