import React, {Component} from 'react'
import PortalComponent from 'components/PortalComponent'

import './_team.scss'

export default class Team extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <main className="team">
        <PortalComponent>
          <h2 className="falcon-header__heading-2">
            About Us
          </h2>
        </PortalComponent>
        <section className="team-section">
          <h3>Our Promise:</h3>
          <p className="team-section__promise">
            Most of our initial Investors have worked with one of our Members in the past and have trusted our expertise to give them results.
            This same foundation of trust is the pillar of Falcon Consulting.
            We value each and every one of our investors and stay 100% committed to complete transparency with them.
            If you feel that you need further explanation of mining or blockchain technology,
            the impressive value attached to it or how it will revolutionize the future,
            our team will be more than happy to consult you in person or virtually through Google
          </p>
          <div className="team-section__members">
          </div>
        </section>
      </main>
    )
  }
}