import React from 'react'
import './_falcon-nav.scss'

export default function FalconNav(props) {
  return [
    <header key="header" className="falcon-header">
      <h1 className="falcon-header__heading">Falcon Consulting</h1>
      <nav className="falcon-nav">
        <ul className="falcon-nav__container">
          <li><a>Home</a></li>
          <li><a>Team</a></li>
          <li><a>Our Promise</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </nav>
      <h2 className="falcon-header__heading-2">Let Your Investments Soar</h2>
      <p className="falcon-header__subtext">Your all inclusive crypto currency mining solution.</p>
    </header>,
    props.children
  ]
}