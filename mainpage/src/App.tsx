import React from 'react';
import { AppInfo } from './helper/AppInfo'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to magical.rocks! </h1>
      </header>
      <main></main>
      <footer className="App-info">
        <AppInfo />
      </footer>
    </div>
  );
}

export default App;
