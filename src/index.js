import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './Reducers/Reducers'
import { defaultStore } from './store'
import {App} from './App';

const store = createStore(reducers, defaultStore);
 
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.subscribe(() => {
  console.log(store.getState())
})
