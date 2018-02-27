import React, {Component} from 'react'
import AOS from 'aos'
import PortalComponent from 'components/PortalComponent'
import FalconFooter from 'components/FalconFooter'
import BitcoinMineIcon from 'images/BitcoinMineIcon'
import ServerIcon from 'images/ServerIcon'
import AltcoinsIcon from 'images/AltcoinsIcon'
import PayoutIcon from 'images/PayoutIcon'
import HandshakeIcon from 'images/HandshakeIcon'
import './_home.scss'

const homeContent = [
  {
    header: 'Start Crypto Mining Today!',
    icon: <BitcoinMineIcon />,
    mainText: 'At Falcon Consulting we provide one of the easiest, smartest and safest ways to enter the cryptocurrency space: Mining.',
    link: <a className="falcon-home__link" href="/our-offer" onClick={(e) => e.stopPropagation()}>Learn More</a>
  },
  {
    header: 'Your Hardware Is Running 24 / 7',
    icon: <ServerIcon />,
    mainText: 'No need to worry about the cognitive overhead and rising costs of building and maintaining your own rigs. We take care of everything for you.',
    link: null
  },
  {
    header: 'Mine Alternative Crypto Currencies',
    icon: <AltcoinsIcon />,
    mainText: 'Our custom algorithms can pivot between the most profitable alternative coins in order to maximize your profits.',
    link: null
  },
  {
    header: 'Bi Weekly Payouts',
    icon: <PayoutIcon />,
    mainText: 'Every 2nd and 4th friday of the month you receive a payout to the wallet of your choosing.',
    link: <a className="falcon-home__link" href="/plans" onClick={(e) => e.stopPropagation()}>Our Plans</a>
  },
  {
    header: 'Monthly consultations in person or online',
    icon: <HandshakeIcon />,
    mainText: 'Schedule meet ups with the team once a month to go over the status of your investment and the market.',
    link: null
  }
]

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    AOS.init({duration: 800})
  }

  sectionBlockBuilder = (key, header, icon, mainText, anchor) => {
    return (
      <section key={key} className="falcon-home__content" data-aos="fade-up">
        <h1 className="falcon-home__heading">{header}</h1>
        <div className="falcon-home__icon">{icon}</div>
        <p className="falcon-home__subtext">
          {mainText}
        </p>
        {anchor || null}
      </section>
    )
  }

  mapSectionBlocks = (buildFunc, data) => {
    return data.map((item, i) => buildFunc(i, item.header, item.icon, item.mainText, item.link))
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
        {this.mapSectionBlocks(this.sectionBlockBuilder, homeContent)}
        <FalconFooter />

        {/* Loading bar here: indicates order completion from investors */}
        {/* Ready to start generating your own wealth today? Sign up now  */}
      </main>
    )
  }
}
