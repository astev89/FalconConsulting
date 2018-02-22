import React from 'react'
import './_falcon-footer.scss'

export default function FalconFooter(props) {
  return (
    <footer className="falcon-footer">
      <p className="falcon-footer__text">
        Invest with Falcon Consulting today!
      </p>
      <a href="mailto:smorales@falconconsulting.co?Subject=Investment%20interest" target="_top" 
        className="falcon-footer__link"
      >
        Reach Out Now!
      </a>
    </footer>
  )
}
