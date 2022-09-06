import React from 'react'
import './menu.css'

export const Menu = ({ onClick }) => {
  return (
    <div className="Menu">
      <button className="Button" onClick={onClick}>
        Play
      </button>
    </div>
  )
}

export default Menu
