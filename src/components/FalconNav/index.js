import React, {Component} from 'react'
// import PageLinks from 'components/PageLinks'
import HamburgerIcon from 'images/HamburgerIcon'
import SideBar from 'components/SideBar'

import './_falcon-nav.scss'
const HeaderBackgroundHeight = 324
const minimumShrinkValue = 64

export default class FalconNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
      scrollPos: 0,
      changingWidth: 0,
      opacityValue: 1
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const distanceFromTop = document.documentElement.scrollTop
      const imageWidthValue = distanceFromTop < 160 ? distanceFromTop : 160
      const imageShrinkValue = HeaderBackgroundHeight - distanceFromTop
      const scrollHeightValue = imageShrinkValue > minimumShrinkValue ? imageShrinkValue : minimumShrinkValue

      this.setState({
        scrollPos: scrollHeightValue,
        changingWidth: imageWidthValue,
        opacityValue: 1 - (distanceFromTop / 120) >= 0 ? 1 - (distanceFromTop / 120) : 0
      })
    })
  }


  render() {
    const {scrollPos, expanded, changingWidth, opacityValue} = this.state
    const headerHeight = scrollPos ? `${scrollPos}px` : '324px'
    const underlayStyle = {height: headerHeight, width: `calc(100% - ${changingWidth}px)`}

    return [
      <header key="header" className="falcon-header" style={{height: headerHeight}}>
        <div className="falcon-header__underlay" style={{height: headerHeight}} />
        <nav className="falcon-header__nav">
          <h1 className="falcon-header__nav-heading">
            <a href="/">
              Falcon Consulting
            </a>
          </h1>
          <div onClick={() => this.setState({expanded: true})}>
            <HamburgerIcon />
          </div>
        </nav>
        <div className="grad" />
      </header>,
      <div key="portal-heading" className="portal-root" style={{opacity: opacityValue}} />,
      <SideBar key="sidebar" closeSideBar={() => this.setState({expanded: false})} expanded={expanded} />,
      this.props.children
    ]
  }
}
