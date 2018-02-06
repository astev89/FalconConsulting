import React from 'react'
import './_falcon-nav.scss'

export default function FalconNav(props) {
  return [
    <nav className="falconNav">
      <ul className="falconNav__container">
        <li>Home</li>
        <li>Team</li>
        <li>Our Promise</li>
        <li>FAQ</li>
      </ul>
    </nav>,
    props.children
  ]
}