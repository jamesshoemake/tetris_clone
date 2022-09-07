import './tetris.css'
import { Board } from '../Board'
import GameStats from '../GameStats'
import Previews from '../Previews'

// custom hooks
import { useBoard } from '../../hooks/useBoard'
import { useGameStats } from '../../hooks/useGameStats'
import { usePlayer } from '../../hooks/usePlayer'
import GameController from '../GameController'
export const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats()
  const [player, setPlayer, resetPlayer] = usePlayer()
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared
  })

  return (
    <>
      <Previews tetrominoes={player.tetrominoes} />
      <div className="Tetris">
        <Board board={board} />
      </div>
      <GameStats gameStats={gameStats} />
      <GameController
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
      />
    </>
  )
}
