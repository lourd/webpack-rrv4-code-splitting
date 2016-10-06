import React, { Component } from 'react'

import Link from 'react-router/Link'
import Match from 'react-router/Match'
import HashRouter from 'react-router/HashRouter'

import asyncComponent from './asyncComponent'
import Home from './Home'
import Sync from './Sync'

const Foo = asyncComponent(() =>
  System.import('./Foo').then(module => module.default)
)
const Bar = asyncComponent(() =>
  System.import('./Bar').then(module => module.default)
)

const App = () =>
  <HashRouter>
    <div>
      <Link to="/foo">Foo</Link>
      <Link to="/bar">Bar</Link>
      <Link to="/sync">Sync</Link>
      <Link to="/">Home</Link>

      <Match pattern="/foo" component={Foo} />
      <Match pattern="/bar" component={Bar} />
      <Match pattern="/sync" component={Sync} />
      <Match pattern="/" exactly component={Home} />
    </div>
  </HashRouter>

export default App
