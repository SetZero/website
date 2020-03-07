import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome! </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p> This website has been served by an Kubernetes Cluster, you are currently being served by Node {process.env.NODE_NAME || 'UNKNOWN_NODE'} on Pod {process.env.POD_NAME || 'UNKNOWN_POD'} </p>
      </header>
    </div>
  );
}

export default App;
