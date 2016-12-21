import React, { Component } from 'react'

// Importing it like this is possible, but not conducive to tree shaking.
// Brings in errthing
// import { Link, Match, HashRouter } from 'react-router'

import Link from 'react-router/Link'
import Match from 'react-router/Match'
import HashRouter from 'react-router/HashRouter'

import asyncComponent from './asyncComponent'
import Home from './Home'
import Sync from './Sync'
import './App.css'

// Webpack understands to make a new "chunk" when it sees `import` used
// It will rewire './Foo' to the filename of the respective "chunk"
const Foo = asyncComponent(() => import('./Foo').then(module => module.default))
const Bar = asyncComponent(() => import('./Bar').then(module => module.default))

const App = () =>
  <HashRouter>
    <div id="App">
      <div id="links">
        <Link to="/foo">Foo</Link>
        <Link to="/bar">Bar</Link>
        <Link to="/sync">Sync</Link>
        <Link to="/">Home</Link>
      </div>

      <Match pattern="/foo" component={Foo} />
      <Match pattern="/bar" component={Bar} />
      <Match pattern="/sync" component={Sync} />
      <Match pattern="/" exactly component={Home} />
      <a
        href="https://github.com/lourd/webpack-rrv4-code-splitting"
        target="_blank"
      >
        Source code on GitHub
      </a>
    </div>
  </HashRouter>

export default App
