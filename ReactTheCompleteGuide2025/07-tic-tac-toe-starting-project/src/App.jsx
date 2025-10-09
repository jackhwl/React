import { useState } from 'react'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import Log from './components/Log'

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const handleSelectSquare = () => {
    setCurrentPlayer(prevPlayer => prevPlayer === "X" ? "O" : "X")
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={currentPlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={currentPlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} currentPlayerSymbol={currentPlayer} />
      </div>
      <Log />
    </main>
  )
}

export default App
