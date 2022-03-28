import React from 'react';
import logo from './favicon.ico';
import { Joker } from './features/joker/Joker';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Joker />
        <p>
          Generate the funny jokes.
        </p>
        <span>
          <span>Created by </span>
          <a
            className="App-link"
            href="https://github.com/geoday03/"
            target="_blank"
            rel="noopener noreferrer"
          >
            geoday03
          </a>
          <span>.</span>
          <br></br>
          <span>Made possible by </span>
          <a
            className="App-link"
            href="https://github.com/Sv443/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sv443
          </a>
          <span>'s </span>
          <a
            className="App-link"
            href="https://sv443.net/jokeapi/v2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            JokeAPI
          </a>
          <span>.</span>
        </span>
      </header>
    </div>
  );
}

export default App;
