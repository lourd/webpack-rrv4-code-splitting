import React from 'react'

/**
 * Returns a promise that resolves to a Component class
 * @param  {Function} getComponent fetches a Component class to instantiate
 * @return {Component}
 */
export default function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {

    state = { Component: null }

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          this.setState({ Component })
        })
      }
    }

    render() {
      const { Component } = this.state
      return Component
        ? <Component {...this.props} />
        : <h3>Loading...</h3>
    }
  }
}
