import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = 'Welcome to React';
    const o = {firstName: 'Jack', lastName: 'Huang'};
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h3>{o.firstName} {o.lastName}</h3>
      </div>
    );
  }
}

export default App;
