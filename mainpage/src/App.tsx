import React from 'react';
import logo from './logo.svg';
import { AppInfo } from './helper/AppInfo'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome! </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <AppInfo />
      </header>
    </div>
  );
}

export default App;
