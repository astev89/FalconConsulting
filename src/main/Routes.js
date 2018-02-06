import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import AppContainer from 'components/AppContainer'
import FalconNav from 'components/FalconNav'
import Home from 'main/Home'

export default function Routes() {
  return (
    <BrowserRouter>
      <AppContainer>
        <FalconNav>
          <Route path="/" component={Home} />
        </FalconNav>
      </AppContainer>
    </BrowserRouter>
  )
}