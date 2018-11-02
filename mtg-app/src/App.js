import React, { Component } from 'react';
import { Button } from 'reactstrap';
import HomePage from './pages/home'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <HomePage />
      </div>
    );
  }
}

export default App;
