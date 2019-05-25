import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpDialog from './Component/SignupDialog'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Signup to React</h2>
        </div>
        <p className="App-intro">
          <SignUpDialog />
        </p>
      </div>
    );
  }
}

export default App;
