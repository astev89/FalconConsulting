import React, {Component} from 'react'
import {BrowserRouter, Route, withRouter} from 'react-router-dom'
import AppContainer from 'components/AppContainer'
import FalconNav from 'components/FalconNav'
import Home from 'main/Home'
import Plans from 'main/Plans'
import Team from 'main/Team'
import Faq from 'main/Faq'
import Offer from 'main/Offer'

@withRouter
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <AppContainer>
            <FalconNav>
              <Route exact path="/" component={Home} />
              <Route path="/our-offer" component={Offer} />
              <Route path="/plans" component={Plans} />
              <Route path="/faq" component={Faq} />
              <Route path="/team" component={Team} />
            </FalconNav>
          </AppContainer>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}
