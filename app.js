import React from 'react';
import logo from './logo.svg'; // Keep if you want the React logo, otherwise remove
import './App.css';
import Welcome from './Welcome'; // Import your Welcome component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* The React logo can stay or be removed */}
        <img src={logo} className="App-logo" alt="logo" />

        {/* Render your Welcome component here */}
        <Welcome />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;