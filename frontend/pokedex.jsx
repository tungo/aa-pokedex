import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'

import * as selectors from './reducers/selectors'
import * as actions from './actions/pokemon_actions'


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store}/>, root)


  window.store = store
  window.selectors = selectors
  window.actions = actions
})
