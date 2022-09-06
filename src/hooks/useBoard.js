import { useState } from 'react'
import { buildBoard } from '../utils/Board'

export const useBoard = ({ rows, columns }) => {
  const [board, setBoard] = useState(buildBoard({ rows, columns }))

  return [board, setBoard]
}
