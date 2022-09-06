import './tetris.css'
import { Board } from '../Board'
import GameStats from '../GameStats'
import Previews from '../Previews'

// custom hooks
import { useBoard } from '../../hooks/useBoard'
import { useGameStats } from '../../hooks/useGameStats'
import { usePlayer } from '../../hooks/usePlayer'

export const Tetris = ({ rows, columns, setGameOver }) => {
  const [gameStats, addLinesCleared] = useGameStats()
  const [board, setBoard] = useBoard({ rows, columns })
  const [player, setPlayer, resetPlayer] = usePlayer()

  return (
    <>
      <Previews tetrominoes={player.tetrominoes} />
      <div className="Tetris">
        <Board board={board} />
      </div>
      <GameStats gameStats={gameStats} />
    </>
  )
}
