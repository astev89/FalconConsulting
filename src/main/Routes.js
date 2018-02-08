import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AppContainer from 'components/AppContainer'
import FalconNav from 'components/FalconNav'
import Home from 'main/Home'
import Plans from 'main/Plans'
import Team from 'main/Team'
import OurPromise from 'main/OurPromise'
import Faq from 'main/Faq'


export default function Routes() {
  return (
    <BrowserRouter>
      <AppContainer>
        <FalconNav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/plans" component={Plans} />
            <Route path="/team" component={Team} />
            <Route path="/ourpromise" component={OurPromise} />
            <Route path="/faq" component={Faq} />
          </Switch>
        </FalconNav>
      </AppContainer>
    </BrowserRouter>
  )
}