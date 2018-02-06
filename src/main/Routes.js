import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import AppContainer from 'components/AppContainer'
import Home from 'main/Home'

export default function Routes() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Route path="/" component={Home} />
      </AppContainer>
    </BrowserRouter>
  )
}