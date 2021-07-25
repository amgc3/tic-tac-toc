import { cloneDeep } from 'lodash';
import { useState } from 'react';
import { calculateWinner } from '../utilities/util';
import Board from './Board';

const styles = {
  width: '200px',
  margin: '20px auto',
};

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xMove, setXmove] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(index) {
    // copy state using lodash cloneDeep
    const boardCopy = cloneDeep(board);
    //   console.log(boardCopy === board)
    //   console.log(boardCopy[0] === board[0]);
    // if user clicks on an occupied square or game is won do nothing
    if (winner || boardCopy[index]) return;
    // put an X or O in the square
    boardCopy[index] = xMove ? 'X' : 'O';
    setBoard(boardCopy);
    setXmove(!xMove);
  }
   
  function renderMoves() {
      return (<button onClick={() => setBoard(Array(9).fill(null))}>
          Start Game
      </button>)
  }
  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner ? 'Winner: ' + winner : 'Next Player:' + (xMove ? 'X' : 'O')}
        </p>
        {renderMoves()}
      </div>
    </>
  );
}

export default Game;
