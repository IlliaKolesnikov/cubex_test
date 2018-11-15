import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { speed }  from './firebase.js'

class App extends Component {

  state = {speed: 3}

  componentDidMount(){
    console.log("ku")
    speed.on('value', snap=>{
      console.log(snap) 
      this.setState({
        speed: snap.val()
      })
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The speed is {this.state.speed}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
