import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../../redux/configureStore'
import AsyncApp from './AsyncApp' // Usar para async example

import App from '../../components/App' // Usar para app todo list

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}