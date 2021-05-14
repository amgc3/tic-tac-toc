import './App.css';
import {useState } from 'react';
import Game from './components/Game';
import Board from './components/Board';
import Square from './components/Square';

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
