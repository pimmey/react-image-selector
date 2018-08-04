import {
  applyMiddleware,
  createStore
} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'

// Reducers
import reducers from './reducers'

// Middleware
const middleware = applyMiddleware(
  thunk,
  promise()
)

export default createStore(
  reducers,
  composeWithDevTools(middleware)
)
