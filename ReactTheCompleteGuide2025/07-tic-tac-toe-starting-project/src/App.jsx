import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './winning-combinations'
import GameOver from './components/GameOver'

const initialGameBoard = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null]
]
function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  //const [hasWinner, setHasWinner] = useState(false)

  const currentPlayer = deriveActivePlayer(gameTurns)
  let gameBoard = initialGameBoard
  let winner = null
  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col]
    const winningCombinationFound = firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol
    if (winningCombinationFound) {
      winner = firstSquareSymbol
    }

    // Alternative approach:
    // const firstSquare = combination[0]
    // const firstSquareOccupiedBy = gameTurns.find(turn => turn.square.row === firstSquare.row && turn.square.col === firstSquare.col)?.player
    // if (!firstSquareOccupiedBy) {
    //   continue
    // }

    // const winningCombinationFound = combination.every(square => {
    //   const squareOccupiedBy = gameTurns.find(turn => turn.square.row === square.row && turn.square.col === square.col)?.player
    //   return squareOccupiedBy === firstSquareOccupiedBy
    // })

    // if (winningCombinationFound) {
    //   alert(`Player ${firstSquareOccupiedBy} has won!`)
    //   //setHasWinner(true)
    //   break
    // }
  }
  
  const hasDraw = !winner && gameTurns.length === 9

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns(prevTurns => {
      const activePlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [{square: { row: rowIndex, col: colIndex }, player: activePlayer}, ...prevTurns]
      return updatedTurns
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={currentPlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={currentPlayer === "O"} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
