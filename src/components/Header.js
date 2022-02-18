
import React from 'react'
import './Header.css'
export default function Header({black}) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="heaer-logo">
        <a href="#" className='logo'>
              PedroFlix
        </a>
      </div>
    </header>
  )
}