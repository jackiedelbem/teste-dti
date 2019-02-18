if (!global._babelPolyfill) {
  require("babel-polyfill");
}

import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import './base.scss'

import SearchPage from '../../pages/search'


// http://server.com/...
const BaseLayout = () => (
  <div className="layout__base">
    <Switch>
      <Route exact path="/" component={BaseRedirect} />
      <Route exact path="/search" component={SearchPage} />

      <Redirect to="/" push />
    </Switch>
  </div>
)

const BaseRedirect = () => <Redirect to="/search" push />

export default BaseLayout
