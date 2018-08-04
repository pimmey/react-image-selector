import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css'

import store from './state/store'
import './styles/global'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
