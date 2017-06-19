// import React from 'react'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import rootReducer from './reducers'

const middleware = applyMiddleware(promise(), thunk, logger)
const store = createStore(rootReducer, middleware)

export default store
