import './App.css';
import {useState } from 'react';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toc</h1>
        <Game/>
      </header>
    </div>
  );
}

export default App;
