import React, {Component} from 'react'
import PortalComponent from 'components/PortalComponent'
import FalconFooter from 'components/FalconFooter'
import BitcoinMineIcon from 'images/BitcoinMineIcon'
import ServerIcon from 'images/ServerIcon'
import AltcoinsIcon from 'images/AltcoinsIcon'
import PayoutIcon from 'images/PayoutIcon'
import HandshakeIcon from 'images/HandshakeIcon'
import './_home.scss'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }


  render() {
    return (
      <main className="falcon-home">
        <PortalComponent>
          <h2 className="falcon-header__heading-2">
            Let Your Investments Soar
          </h2>
          <p className="falcon-header__subtext">
            We are your all inclusive crypto currency mining solution.
          </p>
        </PortalComponent>

        <section className="falcon-home__content">
          <h1 className="falcon-home__heading">Start Crypto Mining Today!</h1>
          <div className="falcon-home__icon"><BitcoinMineIcon /></div>
          <p className="falcon-home__subtext">
            At Falcon Consulting we provide one of the easiest, smartest and safest ways to enter the cryptocurrency space: Mining.
          </p>
          <a className="falcon-home__link" href="/our-offer" onClick={(e) => e.stopPropagation()}>Learn More</a>
        </section>

        <section className="falcon-home__content">
          <h2 className="falcon-home__heading">Your Hardware Is Running 24 / 7</h2>
          <div className="falcon-home__icon"><ServerIcon /></div>
          <p className="falcon-home__subtext">
            No need to worry about the cognitive overhead and rising costs of building and maintaining your own rigs.
            We take care of everything for you.
          </p>
        </section>

        <section className="falcon-home__content">
          <h3 className="falcon-home__heading">Mine Alternative Crypto Currencies</h3>
          <div className="falcon-home__icon"><AltcoinsIcon /></div>
          <p className="falcon-home__subtext">
            Our custom algorithms can pivot between the most profitable alternative coins in order to maximize your profits.
          </p>
        </section>

        <section className="falcon-home__content">
          <h4 className="falcon-home__heading">Bi Weekly Payouts</h4>
          <div className="falcon-home__icon"><PayoutIcon /></div>
          <p className="falcon-home__subtext">
            Every 2nd and 4th friday of the month you receive a payout to the wallet of your choosing.
          </p>
          <a className="falcon-home__link" href="/plans" onClick={(e) => e.stopPropagation()}>Our Plans</a>
        </section>

        <section className="falcon-home__content">
          <h5 className="falcon-home__heading">Monthly consultations in person or online</h5>
          <div className="falcon-home__icon"><HandshakeIcon /></div>
          <p className="falcon-home__subtext">
            Schedule meet ups with the team once a month to go over the status of your investment and the market.
          </p>
        </section>

        <FalconFooter />

        {/* Loading bar here: indicates order completion from investors */}
        {/* Ready to start generating your own wealth today? Sign up now  */}
      </main>
    )
  }
}
