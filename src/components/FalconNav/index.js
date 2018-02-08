import React, {Component} from 'react'
// import PageLinks from 'components/PageLinks'
import HamburgerIcon from 'images/HamburgerIcon'
import SideBar from 'components/SideBar'

import './_falcon-nav.scss'
const HeaderBackgroundHeight = 324

export default class FalconNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
      scrollPos: 0
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const distanceFromTop = document.documentElement.scrollTop
      const testValue = HeaderBackgroundHeight - distanceFromTop > 65 ? HeaderBackgroundHeight - distanceFromTop : 65
      this.setState({scrollPos: testValue})
      console.log(this.state.scrollPos)
    })
  }



  render() {
    const headerHeight = this.state.scrollPos ? `${this.state.scrollPos}px` : '324px'

    return [
      <header key="header" className="falcon-header" style={{height: headerHeight}}>
        {/* <div className="falcon-header__underlay" /> */}
        <nav className="falcon-header__nav">
          <h1 className="falcon-header__nav-heading"><a href="/">Falcon Consulting</a></h1>
          <div onClick={() => this.setState({expanded: true})}><HamburgerIcon /></div>
        </nav>
        <h2 className="falcon-header__heading-2">Let Your Investments Soar</h2>
        <p className="falcon-header__subtext">Your all inclusive crypto currency mining solution.</p>
      </header>,
      <SideBar closeSideBar={() => this.setState({expanded: false})} expanded={this.state.expanded} />,
      this.props.children
    ]
  }
}