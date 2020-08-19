import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer'

class App extends Component {
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Welcome to Timer App in React.js</h3>
        </header>

        <Timer start={Date.now()}/>
      </div>
    );
  }
}

export default App;
