import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk' // lets us pass in function to dispatch, instead of action obj ... more flexibility!
import promise from 'redux-promise-middleware'

import reducers from './reducers'
const middleware = applyMiddleware(promise(), thunk, createLogger())

const store = createStore(reducers, middleware)

export default store
