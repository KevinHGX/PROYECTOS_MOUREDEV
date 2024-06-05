import React, { useState, useEffect } from 'react';
import Cell from './Cells';

const Board = () => {
  const [board, setBoard] = useState(Array(6).fill(Array(7).fill(0)));
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [wins, setWins] = useState({ red: 0, yellow: 0 });

  useEffect(() => {
    // Alternar jugador después de cada partida
    setCurrentPlayer(prev => (prev === 1 ? 2 : 1));
  }, [wins]);

  const handleClick = (columnIndex) => {
    // Clonar el tablero para no mutar el estado directamente
    const newBoard = board.map(row => [...row]);

    // Encontrar la primera fila vacía en la columna seleccionada
    for (let rowIndex = newBoard.length - 1; rowIndex >= 0; rowIndex--) {
      if (newBoard[rowIndex][columnIndex] === 0) {
        newBoard[rowIndex][columnIndex] = currentPlayer;
        break;
      }
    }

    setBoard(newBoard);
    checkWinner(newBoard);
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const checkWinner = (board) => {
  const checkLine = (a, b, c, d) => {
    return (a !== 0 && a === b && a === c && a === d);
  };

  const checkAllLines = () => {
    // Verificar todas las filas
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 4; col++) {
        if (checkLine(board[row][col], board[row][col + 1], board[row][col + 2], board[row][col + 3])) {
          return board[row][col];
        }
      }
    }

    // Verificar todas las columnas
    for (let col = 0; col < 7; col++) {
      for (let row = 0; row < 3; row++) {
        if (checkLine(board[row][col], board[row + 1][col], board[row + 2][col], board[row + 3][col])) {
          return board[row][col];
        }
      }
    }

    // Verificar diagonales (de izquierda a derecha)
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        if (checkLine(board[row][col], board[row + 1][col + 1], board[row + 2][col + 2], board[row + 3][col + 3])) {
          return board[row][col];
        }
      }
    }

    // Verificar diagonales (de derecha a izquierda)
    for (let row = 0; row < 3; row++) {
      for (let col = 3; col < 7; col++) {
        if (checkLine(board[row][col], board[row + 1][col - 1], board[row + 2][col - 2], board[row + 3][col - 3])) {
          return board[row][col];
        }
      }
    }

    return null;
  };

  const winner = checkAllLines();
  if (winner) {
    if (winner === 1) {
      setWins(prev => ({ ...prev, red: prev.red + 1 }));
    } else if (winner === 2) {
      setWins(prev => ({ ...prev, yellow: prev.yellow + 1 }));
    }
  }
};


  const resetBoard = () => {
    setBoard(Array(6).fill(Array(7).fill(0)));
  };

  const resetWins = () => {
    setWins({ red: 0, yellow: 0 });
  };

  return (
    <div id = "content">
      <div id="boardGame">
        {board.map((row, rowIndex) =>
          row.map((cell, cellIndex) => (
            <Cell key={cellIndex} value={cell} onClick={() => handleClick(cellIndex)} />
          ))
        )}
      </div>

      <div id="buttons">        
        <button onClick={resetBoard}>Reiniciar Partida</button>
        <button onClick={resetWins}>Resetear Contador</button>
      </div>

      <div id="players">
        <p>Red Player: {wins.red}</p>
        <p>Yellow Player: {wins.yellow}</p>
      </div>

    </div>
  );
};

export default Board;
