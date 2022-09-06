import './App.css'
import { Game } from './components/Game'

export default function App() {
  return (
    <div className="App">
      <header className="App-header">Almost Tetris</header>
      <div className="game-container">
        <Game rows={20} columns={10} />
      </div>
    </div>
  )
}
