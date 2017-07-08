import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="App-Wrapper">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            Place content in here<br />
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;