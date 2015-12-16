import React from 'react'
import ReactDOM from 'react-dom'

import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncReduxAndRouter } from 'redux-simple-router'

import { bind as bindLogger } from '../common/debug'
import configureStore from './store/configureStore'
import Root from './containers/root.jsx'

// Import CSS. Will be extracted by webpack.
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap-social'
import './css/main.css'

// TODO: get actual initial state
const initialState = {
  auth: {
    isAuthenticated: false
  }
}

const history = createBrowserHistory()
const store = configureStore(initialState)
bindLogger(window)

syncReduxAndRouter(history, store, (state) => state.router)

ReactDOM.render(<Root history={history} store={store}/>, document.getElementById('main'))