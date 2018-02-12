import React from 'react'
import { Link, Route } from 'react-router-dom'

import './_page-links.scss'

const Links = [
  { to: '/', text: 'Home', active: [{ path: '/', exact: true }]},
  { to: '/team', text: 'About Us', active: [{ path: '/team' }] },
  { to: '/plans', text: 'Plans', active: [{ path: '/plans' }] },
  { to: '/faq', text: 'FAQ', active: [{ path: '/faq' }] }
]

export default function PageLinks({children, onClick}) {
  const renderChild = children ? <li className="page-links__close" onClick={onClick}>{children}</li> : null

  return (
    <ul className="page-links">
      {renderChild}
      {Links.map((link, i) => (
        <li key={i} className="page-links__item">
          <Link className="page-links__item-text" to={link.to}>{link.text}</Link>
          {link.active.map((item, i) => (
            <Route exact={item.exact} path={item.path} key={i} component={() => <hr/>} />
          ))}
        </li>
      ))}
    </ul>
  )
}