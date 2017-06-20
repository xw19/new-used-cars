// import React from 'react'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import rootReducer from './reducers'
import { loadState } from './actions/localStorage'
const persistedState = loadState()
const middleware = applyMiddleware(promise(), thunk, logger)
const store = createStore(rootReducer, persistedState, middleware)

export default store
