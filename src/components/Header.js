
import React from 'react'
import './Header.css'
export default function Header({black}) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="heaer-logo">
        <a href="https://github.com/iroDevs/Clone-Netflix/tree/main/src" target='_blank' className='logo' rel="noreferrer">
              PedroFlix
        </a>
      </div>
    </header>
  )
}